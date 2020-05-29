// all necessary middleware like protect, restrict, set cookie, check token
const jwt = require("jsonwebtoken");
const { promisify } = require("util"); // neede to promisify a function
const { JWT_SECRET, JWT_EXPIRES_IN } = require("../config.js");

const AppError = require("../utils/appError");
const User = require("../model/userModel");

const catchAsync = require("../utils/catchAsyns");

const checkUser = async (id) => {
  const user = await User.findById(id);
  return user;
};

// / check authentication/jwt token status: used in protecting routes and login status of user
const checkTokenStatus = async (req, next) => {
  let token;

  if (req.cookies) {
    token = req.cookies.jwt;
  }

  if (!token) {
    return next(
      new AppError("Authentication failed, Please login in to gain access", 401)
    );
  }

  // 2) validate the user of the token still exists in the database
  const decoded = await promisify(jwt.verify)(
    token,
    process.env.JWT_SECRET || JWT_SECRET
  );
  //3) check if the user still exists

  const freshUser = await checkUser(decoded.id);
  // console.log(freshUser);
  if (!freshUser) {
    return next(new AppError("The User of this token has been deleted", 401));
  }
  req.user = freshUser;
};

// sign the jwt token
const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || JWT_EXPIRES_IN,
  });
};

const setCookie = (res, token) => {
  res.cookie("jwt", token, {
    sameSite: false,
    httpOnly: true,
    maxAge: 900000000,
    secure: false,
  });
};

// generate the jwt token
const generateToken = (user, statusCode, res, req) => {
  let token = signToken(user.id);
  setCookie(res, token);
  user.password = undefined; // remove the password from the response
  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};

// use for protecting routes
exports.protect = catchAsync(async (req, res, next) => {
  await checkTokenStatus(req, next);
  if (req.user) {
    next();
  }
});

// login
exports.loginIn = catchAsync(async (req, res, next) => {
  // console.log(req.body);
  const { name, password } = req.body;
  if (!name || !password) {
    return next(new AppError("Please provide name and password", 400));
  }
  let user = await User.findOne({ name, password }).select({ notes: 0 });

  if (!user) {
    // if user does not exits then create new user
    user = await User.create({ name, password });
  }
  generateToken(user, 200, res, req);
});

// logout
exports.logout = catchAsync(async (req, res, next) => {
  res.clearCookie("jwt");
  res.status(200).json({
    status: "success",
    message: "loggen out successfully",
  });
});

// check login status
exports.checkLoginStatus = catchAsync(async (req, res, next) => {
  res.json({
    status: "success",
    message: "loggen in",
    data: {
      uer: req.user,
    },
  });
});

const express = require("express");
const morgan = require("morgan");
var cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
const globalErrorHandler = require("./utils/errorHandler");
const userRoute = require("./routes/userRoute");
const AppError = require("./utils/appError");

app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

app.use("/user", userRoute);

// default undefined routes
app.all("*", (req, res, next) => {
  next(new AppError("This route is not defined", 404));
});

// global error handler
app.use(globalErrorHandler);

module.exports = app;

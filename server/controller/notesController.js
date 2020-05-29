const User = require("../model/userModel");

const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsyns");

// add a new note

exports.addNewNote = catchAsync(async (req, res, next) => {
  // working with subdocuments
  const note = req.body;
  const user = await User.findById(req.user._id);
  if (!user) {
    return next(new AppError("unable to find use", 404));
  }

  // push new note to array of notes
  user.notes.push(note);
  const updatedUser = await user.save();
  res.status(200).json({
    status: "sucess",
    data: {
      updatedUser,
    },
  });
});

// fetch all notes

exports.allNotes = catchAsync(async (req, res, next) => {
  // working with subdocuments

  const user = await User.findById(req.user._id);
  if (!user) {
    return next(new AppError("unable to find use", 404));
  }

  // we cannot sort subdocuments so we use the technique below used in regular JS
  res.status(200).json({
    status: "sucess",
    data: {
      notes: user.notes.sort((a, b) => b.createdAt - a.createdAt),
    },
  });
});

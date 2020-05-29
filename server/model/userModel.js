const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "each note requires a title"],
    },
    description: {
      type: String,
      required: [true, "each note requires a description"],
    },
  },
  {
    timestamps: true,
  }
);

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, " a user must have a name"],
  },
  password: {
    type: String,
    required: [true, " a user must have a password"],
  },
  notes: [notesSchema],
});

const User = mongoose.model("User", userSchema);

module.exports = User;

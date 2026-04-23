const mongoose = require("mongoose");

const progressSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  lessonId: { type: mongoose.Schema.Types.ObjectId, ref: "Lesson" },
  completed: Boolean,
  score: Number,
  dateCompleted: Date
});

module.exports = mongoose.model("Progress", progressSchema);
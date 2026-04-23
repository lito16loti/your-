const mongoose = require("mongoose");

const lessonSchema = new mongoose.Schema({
  subjectId: { type: mongoose.Schema.Types.ObjectId, ref: "Subject" },
  title: String,
  content: String,
  pointsReward: Number
});

module.exports = mongoose.model("Lesson", lessonSchema);
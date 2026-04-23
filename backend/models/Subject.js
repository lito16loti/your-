const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
  name: String,
  description: String,
  gradeLevel: String
});

module.exports = mongoose.model("Subject", subjectSchema);
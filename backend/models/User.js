const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ["student", "teacher"] },
  gradeLevel: String,
  points: { type: Number, default: 0 },
  badges: [String]
});

module.exports = mongoose.model("User", userSchema);
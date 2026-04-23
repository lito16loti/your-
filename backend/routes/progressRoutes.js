const express = require("express");
const router = express.Router();
const Progress = require("../models/Progress");

// Add progress
router.post("/", async (req, res) => {
  const progress = new Progress(req.body);
  await progress.save();
  res.json(progress);
});

// Get progress
router.get("/", async (req, res) => {
  const progress = await Progress.find()
    .populate("userId")
    .populate("lessonId");
  res.json(progress);
});

module.exports = router;
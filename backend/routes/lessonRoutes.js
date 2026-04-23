const express = require("express");
const router = express.Router();
const Lesson = require("../models/Lesson");

router.post("/", async (req, res) => {
  const lesson = new Lesson(req.body);
  await lesson.save();
  res.json(lesson);
});

router.get("/", async (req, res) => {
  const lessons = await Lesson.find().populate("subjectId");
  res.json(lessons);
});

module.exports = router;
const express = require("express");
const router = express.Router();
const Quiz = require("../models/Quiz");

router.post("/", async (req, res) => {
  const quiz = new Quiz(req.body);
  await quiz.save();
  res.json(quiz);
});

router.get("/", async (req, res) => {
  const quizzes = await Quiz.find().populate("lessonId");
  res.json(quizzes);
});

module.exports = router;
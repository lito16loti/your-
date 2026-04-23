const express = require("express");
const router = express.Router();
const Subject = require("../models/Subject");

router.post("/", async (req, res) => {
  const subject = new Subject(req.body);
  await subject.save();
  res.json(subject);
});

router.get("/", async (req, res) => {
  const subjects = await Subject.find();
  res.json(subjects);
});

module.exports = router;
const express = require("express");
const router = express.Router();
const Teacher = require("../models/Teacher");

router.get("/", async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.json(teachers);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/add", async (req, res) => {
  const newTeacher = new Teacher({
    name: req.body.name,
    subject: req.body.subject,
    gender: req.body.gender,
    phone: req.body.phone
  });

  try {
    const savedTeacher = await newTeacher.save();
    res.json(savedTeacher);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const foundTeacher = await Teacher.findById(req.params.id);
    res.json(foundTeacher);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Teacher.findByIdAndDelete(req.params.id);
    res.json("teacher is deleted");
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/update/:id", async (req, res) => {
  await Teacher.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      subject: req.body.subject,
      gender: req.body.gender,
      phone: req.body.phone
    },
    function(err, result) {
      if (err) {
        res.json(err);
      } else {
        res.json(result);
      }
    }
  );
});

module.exports = router;

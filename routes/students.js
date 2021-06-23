const express = require("express");
const router = express.Router();
const Student = require("../models/Student");

router.get("/", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/add", async (req, res) => {
  const newStudent = new Student({
    name: req.body.name,
    gender: req.body.gender,
    class: req.body.class,
    parent_contact: req.body.parent_contact,
    address: req.body.address,
    payStatus: req.body.payStatus,
    medical_condition: req.body.medical_condition
  });

  try {
    const savedStudent = await newStudent.save();
    res.json(savedStudent);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const foundStudent = await Student.findById(req.params.id);
    res.json(foundStudent);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.json("student is deleted");
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/update/:id", async (req, res) => {
  await Student.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      gender: req.body.gender,
      class: req.body.class,
      parent_contact: req.body.parent_contact,
      address: req.body.address,
      payStatus: req.body.payStatus,
      medical_condition: req.body.medical_condition
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

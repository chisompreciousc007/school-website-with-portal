const mongoose = require("mongoose");
const TeacherSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  subject: {
    type: Array,
    required: true
  },
  gender: {
    type: String
  },
  phone: {
    type: Number
  }
});

module.exports = mongoose.model("Teachers", TeacherSchema);

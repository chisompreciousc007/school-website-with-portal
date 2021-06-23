const mongoose = require("mongoose");
var Schema = mongoose.Schema;
const StudentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  class: {
    type: String,
    required: true
  },
  parent_contact: {
    type: Number,
    required: true
  },
  address: {
    type: String
  },
  payStatus: {
    type: String,
    required: true
  },

  medical_condition: {
    type: String
  }
});

module.exports = mongoose.model("Students", StudentSchema);

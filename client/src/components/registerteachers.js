import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
// import { link } from "react-router-dom";

function RegisterTeacher() {
  const [teacherData, setTeacherData] = useState({
    name: "",
    subject: "",
    gender: "m",
    phone: ""
  });

  const Submit = e => {
    e.preventDefault();

    axios
      .post("http://localhost:4000/teachers/add", teacherData)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
    window.location.reload();
  };
  const updateField = e => {
    e.preventDefault();
    setTeacherData({ ...teacherData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container" style={{ position: "absolute", top: "15%" }}>
      <form className="needs-validation" onSubmit={Submit}>
        <div className="form-group">
          <label htmlFor="name">Enter Full Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Alphabets only"
            onChange={updateField}
            required={true}
          />
        </div>
        <div className="form-group">
          <label htmlFor="adress">Subjects</label>
          <input
            type="text"
            className="form-control"
            id="subject"
            name="subject"
            placeholder="seperate subjects with a comma ','"
            onChange={updateField}
            required={true}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Enter Phone number</label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            required={true}
            placeholder="one phone number only"
            onChange={updateField}
          />
        </div>
        <div className="mb-2">
          <div className="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              id="male"
              name="gender"
              required={true}
              value="male"
              className="custom-control-input"
              onChange={updateField}
            />
            <label className="custom-control-label" htmlFor="male">
              Male
            </label>
          </div>
          <div className="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              id="female"
              value="female"
              name="gender"
              required={true}
              className="custom-control-input"
              onChange={updateField}
            />
            <label className="custom-control-label" htmlFor="female">
              Female
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default RegisterTeacher;

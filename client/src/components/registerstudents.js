import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function RegisterStudent() {
  const [studentData, setStudentData] = useState({
    name: "",
    address: "",
    gender: "m",
    class: "",
    payStatus: "",
    parent_contact: "",
    medical_condition: "NONE"
  });

  // useEffect(function init() {
  //   console.log(`data : ${data}`);
  // }, []);
  const Submit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/students/add", studentData)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
    window.location.reload();
  };
  const updateField = e => {
    e.preventDefault();
    setStudentData({ ...studentData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container" style={{ position: "absolute", top: "12%" }}>
      <form onSubmit={Submit}>
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
          <small id="emailHelp" className="form-text text-muted">
            Enter name as it appears on birth certificate.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="adress">Contact Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            placeholder="Address"
            onChange={updateField}
            required={true}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Enter Parents'/Guardian's phone</label>
          <input
            type="number"
            className="form-control"
            id="number"
            name="parent_contact"
            placeholder="numbers only"
            onChange={updateField}
            required={true}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Medical Conditions(if any)</label>
          <input
            type="text"
            className="form-control"
            id="medicalcondition"
            name="medical_condition"
            placeholder="medical conditions/ disabilities(leave blank if none)"
            onChange={updateField}
          />
        </div>
        <div className="mb-2">
          <div className="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              id="male"
              value="male"
              name="gender"
              className="custom-control-input"
              onChange={updateField}
              required={true}
            />
            <label className="custom-control-label" htmlFor="male">
              Male
            </label>
          </div>
          <div className="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              className="custom-control-input"
              onChange={updateField}
              required={true}
            />
            <label className="custom-control-label" htmlFor="female">
              Female
            </label>
          </div>
        </div>
        <div className="mb-2">
          <div className="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              id="paid"
              name="payStatus"
              value="paid"
              className="custom-control-input"
              onChange={updateField}
              required={true}
            />
            <label className="custom-control-label" htmlFor="paid">
              Paid
            </label>
          </div>
          <div className="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              id="notPaid"
              name="payStatus"
              value="not-paid"
              className="custom-control-input"
              onChange={updateField}
              required={true}
            />
            <label className="custom-control-label" htmlFor="notPaid">
              NotPaid
            </label>
          </div>
        </div>

        <div className="dropdown mb-2">
          <button
            className="btn btn-danger dropdown-toggle"
            type="button"
            id="dropdownMenu2"
            data-toggle="dropdown"
            aria-haspopup={true}
            aria-expanded="false"
          >
            Select Class
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
            <button
              className="dropdown-item"
              type="button"
              value="JSS1"
              name="class"
              onClick={updateField}
              required={true}
            >
              JSS1
            </button>
            <button
              className="dropdown-item"
              type="button"
              value="JSS2"
              name="class"
              onClick={updateField}
              required={true}
            >
              JSS2
            </button>
            <button
              className="dropdown-item"
              type="button"
              value="JSS3"
              name="class"
              onClick={updateField}
              required={true}
            >
              JSS3
            </button>
            <button
              className="dropdown-item"
              type="button"
              value="SS1"
              name="class"
              onClick={updateField}
              required={true}
            >
              SS1
            </button>
            <button
              className="dropdown-item"
              type="button"
              value="SS2"
              name="class"
              onClick={updateField}
              required={true}
            >
              SS2
            </button>
            <button
              className="dropdown-item"
              type="button"
              value="SS3"
              name="class"
              onClick={updateField}
              required={true}
            >
              SS3
            </button>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default RegisterStudent;

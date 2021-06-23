import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function UpdateStudent(props) {
  const url = "http://localhost:4000";
  const [studentData, setStudentData] = useState({
    name: "",
    gender: "",
    class: "",
    parent_contact: "",
    address: "",
    payStatus: "",
    medical_condition: ""
  });
  const getStudent = async () => {
    const id = props.match.params.id;
    const response = await fetch(`${url}/students/${id}`);
    const data = await response.json();
    setStudentData(data);
    console.log(data);
  };

  useEffect(() => {
    getStudent();
  }, []);

  const Submit = e => {
    e.preventDefault();
    const id = props.match.params.id;
    axios
      .post(`${url}/students/update/${id}`, studentData)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
    props.history.push("/students");
  };
  const updateField = e => {
    e.preventDefault();
    setStudentData({ ...studentData, [e.target.name]: e.target.value });
  };

  let malechecked = "";
  let femalechecked = "";
  if (studentData.gender === "male") {
    malechecked = "true";
  } else {
    femalechecked = "true";
  }

  let paidchecked = "";
  let not_paidchecked = "";
  if (studentData.payStatus === "paid") {
    paidchecked = "true";
  } else {
    not_paidchecked = "true";
  }

  return (
    <div className="container" style={{ position: "absolute", top: "12%" }}>
      <form onSubmit={Submit}>
        <div className="form-group">
          <button onClick={() => console.log(studentData.payStatus)}>
            check
          </button>
          <label htmlFor="name">Enter Full Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Alphabets only"
            onChange={updateField}
            required={true}
            defaultValue={studentData.name}
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
            defaultValue={studentData.address}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Enter Parents'/Guardian's phone</label>
          <input
            type="tel"
            className="form-control"
            id="number"
            name="parent_contact"
            placeholder="numbers only"
            onChange={updateField}
            required={true}
            defaultValue={studentData.parent_contact}
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
            defaultValue={studentData.medical_condition}
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
              checked={malechecked}
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
              checked={femalechecked}
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
              checked={paidchecked}
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
              checked={not_paidchecked}
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
            {studentData.class}
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

export default UpdateStudent;

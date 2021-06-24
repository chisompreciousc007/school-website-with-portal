import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Nav from "./Nav";
// import { Link } from "react-router-dom";
// import UpdateTeacher from "../components/editteacher";

function Teachers(props) {
  const url = "http://localhost:4000";
  const [teacherList, setTeacherList] = useState([]);
  // let history = useHistory();

  const getTeacherList = async () => {
    const response = await fetch(`${url}/teachers/`);
    const data = await response.json();
    setTeacherList([...teacherList, ...data]);
  };

  useEffect(() => {
    getTeacherList();
  }, []);

  return (
    <div className="container" style={{ position: "absolute", top: "12%" }}>
      <Nav />
      <h2>Teachers' list</h2>
      <div className="table-responsive-sm">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Full Name</th>
              <th scope="col">Gender</th>
              <th scope="col">Subjects</th>
              <th scope="col">Phone number</th>
            </tr>
          </thead>
          <tbody>
            {teacherList.map((teacher) => (
              <tr key={teacher._id}>
                <th scope="row">
                  {teacher._id}
                  <button
                    onClick={() => {
                      console.log(teacher._id);
                      props.history.push("/teachers/update/" + teacher._id);
                      console.log(props.match.params.id);
                    }}
                    style={{ fontSize: "0.7rem" }}
                    className="btn btn-success btn-xs mx-2 py-0 px-1"
                  >
                    edit
                  </button>
                  <button
                    onClick={() => {
                      axios
                        .delete(`${url}/teachers/${teacher._id}`)
                        .then((res) => console.log(res.data));
                      let filteredList = teacherList.filter(
                        (el) => el._id !== teacher._id
                      );
                      setTeacherList([...filteredList]);
                    }}
                    type="button"
                    style={{ fontSize: "0.7rem" }}
                    className="btn btn-danger btn-xs mx-2 py-0 px-1"
                  >
                    delete
                  </button>
                </th>
                <td>{teacher.name}</td>
                <td>{teacher.gender}</td>
                <td>{teacher.subject}</td>
                <td>{teacher.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Teachers;

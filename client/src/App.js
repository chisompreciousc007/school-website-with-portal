import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import RegisterStudent from "./components/registerstudents";
import RegisterTeacher from "./components/registerteachers";
import Students from "./components/students";
import Teachers from "./components/teachers";
import Home from "./components/home";
import UpdateTeacher from "./components/editteacher";
import UpdateStudent from "./components/editstudent";
//hi

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/portal" exact component={Nav} />
          <Route path="/students/add" component={RegisterStudent} />
          <Route path="/teachers/add" component={RegisterTeacher} />
          <Route path="/students" exact component={Students} />
          <Route path="/teachers" exact component={Teachers} />
          <Route path="/students/update/:id" component={UpdateStudent} />
          <Route path="/teachers/update/:id" component={UpdateTeacher} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

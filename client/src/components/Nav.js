import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Nav() {
  const styling = { marginRight: "10px", padding: "10px", listStyle: "none" };
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
        <Link to="/">
          <h1 className="navbar-brand" href="google.com">
            Logo
          </h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <Link to="/">
              <li className="nav-item active" style={styling}>
                Home <span className="sr-only">(current)</span>
              </li>
            </Link>

            <Link to="/students">
              <li className="nav-item" style={styling}>
                Student database{" "}
              </li>
            </Link>
            <Link to="/teachers">
              <li className="nav-item" style={styling}>
                Staff database
              </li>
            </Link>
            <Link to="/students/add">
              <li className="nav-item" style={styling}>
                Create new Student
              </li>
            </Link>
            <Link to="/teachers/add">
              <li className="nav-item" style={styling}>
                Create new Staff
              </li>
            </Link>
          </ul>
        </div>
      </nav>
      <script
        src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossOrigin="anonymous"
      ></script>
      <script>
        window.jQuery || document.write('
        <script src="../../assets/js/vendor/jquery-slim.min.js"></script>')
      </script>
      <script src="../../assets/js/vendor/popper.min.js"></script>
      <script src="../../dist/js/bootstrap.min.js"></script>
    </div>
  );
}

export default Nav;

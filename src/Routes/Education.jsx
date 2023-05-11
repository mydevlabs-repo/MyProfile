import React from "react";
import "../Components/style.css";
import Graduation from "./Graduation";
import HighSchool from "./HighSchool";
import Ssc from "./Ssc";
import Button from "react-bootstrap/Button";
import {
  BrowserRouter as Router,
  Switch,
  NavLink,
  Link,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
function Education() {
  return (
    <React.Fragment>
      <div className="education-container jumbotron">
        <div className="ed-heading">Educational Qualifications</div>
        <div className="ed-separator"></div>
        <div className="ed-in">
          <div className="ed-link col-lg-3">
            <div className="ed-btn">
              <Link className="ed-btn-txt" to="/home/grad">
                Graduation
              </Link>
            </div>
            <div className="mt-5 ed-btn">
              <Link className="ed-btn-txt" to="/home/ssc">
                SSC
              </Link>
            </div>
            <div className="mt-5 ed-btn">
              <Link className="ed-btn-txt" to="/home/hsc">
                HSC
              </Link>
            </div>
          </div>
          <div className="ed-cont col-lg-9">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Education;

import React from "react";
import "./style.css";
import Graduation from "./Graduation";
import HighSchool from "./HighSchool";
import Ssc from "./Ssc";
function Education() {
  return (
    <React.Fragment>
      <div className="education-container">
        <div>Education</div>
        <div className="degree-container">
          <Graduation></Graduation>
          {""}
          <HighSchool></HighSchool>
          {""}
          <Ssc></Ssc>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Education;

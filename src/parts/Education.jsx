import React from "react";
import './Education.css';
function Education(props){
    
    return  <div id="education">
        <div className="note">
    <h1>{props.degree}</h1>
    <p>{props.grade}</p>
    <p>{props.year}</p>
    <p>{props.institute}</p>
  </div>
        </div>
}
export default Education;
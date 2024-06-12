import React from "react";
import './About.css'
function About(){
    return <div className="home" id="about">
    <div className="profile-container">
      <img src="/Amanyu.jpg" alt="Profile" className="profile-image" />
      <h1 className="profile-name">Amanyujith Raj</h1>
      <p className="profile-role">Software Developer</p>
    </div>
    <div className="additional-info">
      <p className="additional-info-text">
      Graduate with a Bachelor's degree in Computer Science and a passion for software development.  Strong problem-solving skills and ability to quickly learn new technologies and adapt to changing environments. Excellent team player with effective communication skills, eager to contribute to innovative projects and gain hands-on experience in the software development industry.      </p>
    </div>
    <div className="space"></div>
    <a href="https://www.linkedin.com/in/amanyujith-raj-3b408028a/"><img src="/linkedin.png"
    height="25"
    /></a>
    <br></br>
    <div className="space"></div>
    <a href="https://github.com/amanyujith"><img src="/github.png"
    height="25"
    /></a>

  </div>
}
export default About
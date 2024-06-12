import React from "react";
import './Header.css';
function Header(){
    return <nav className="navbar">
    <div className="navbar-container">
      <ul className="nav-menu">
        <li className="nav-item">
          <a href="#about" className="nav-links">About</a>
        </li>
        <li className="nav-item">
          <a href="#education" className="nav-links">Education</a>
        </li>
        <li className="nav-item">
          <a href="#projects" className="nav-links">Projects</a>
        </li>
        <li className="nav-item">
          <a href="#Skills" className="nav-links">Skills</a>
        </li>
        <li className="nav-item">
          <a href="#contact" className="nav-links">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
}
export default Header;
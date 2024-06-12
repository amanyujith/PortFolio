import React from "react";
import './Projects.css'
function Projects(props){
    return <div className="main" id="projects">
       <div className="project-container">
        <h1>{props.name}</h1>
    <h2 className="project-name">{props.pname}</h2>
    <p className="project-description">{props.summary}
    </p>
    <a href={props.link} className="project-url" target="_blank" rel="noopener noreferrer">
      View Project
    </a>
  </div>
    </div>
}
export default Projects;

import React from "react";
function Skills(props){
    return <div className="note" id="Skills">
        <h1>{props.title}</h1>
        <p>{props.list1}</p>
        <p>{props.list2}</p>
        
    </div>
}
export default Skills;
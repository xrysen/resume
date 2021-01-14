import React from "react";
import "./Projects.css";

const ProjectListItem = (props) => {
  const techStack = props.techStack.map((item, index) => {
    if(index !== props.techStack.length - 1) {
      return item + ", "
    } else {
      return item;
    }
  })
  return (
    <li key = {props.id}>
      <p className="description"><span className = "title"><a href = {props.link}>{props.name}</a></span>
        <br />
       {props.description}
       <br /> <strong>Tech Stack: </strong> {techStack}
      </p>
    </li>
  );
}

export default ProjectListItem;
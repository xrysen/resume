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
      <h4><a href = {props.link}>{props.name}</a></h4>
      <p className="description">{props.description}
       <br /> <strong>Tech Stack: </strong> {techStack}
      </p>
    </li>
  );
}

export default ProjectListItem;
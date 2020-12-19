import React from "react";

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
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <strong>Tech Stack: </strong> {techStack}
    </li>
  );
}

export default ProjectListItem;
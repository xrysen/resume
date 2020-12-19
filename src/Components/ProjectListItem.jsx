import React from "react";

const ProjectListItem = (props) => {

  return (
    <li key = {props.id}>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <strong>Tech Stack: </strong> {props.techStack + " "}
    </li>
  );
}

export default ProjectListItem;
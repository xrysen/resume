import React from "react";

const EducationListItem = (props) => {
  return (
    <li>
      <h3 className = "eduTitle">
        {props.school}
        <span>{props.dates}</span>
      </h3>
      <p>
        <em>{props.diploma}</em>
      </p>
      <p>{props.summary}</p>
      <p>{props.description}</p>
    </li>
  );
};

export default EducationListItem;

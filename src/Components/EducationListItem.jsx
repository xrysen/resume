import React from "react";

const EducationListItem = (props) => {
  return (
    <li>
      <h3>
        {props.school}
        <span className="dates">{props.dates}</span>
      </h3>
      <p>
        <em>{props.diploma}</em>
      </p>
      <p>{props.description}</p>
    </li>
  );
};

export default EducationListItem;

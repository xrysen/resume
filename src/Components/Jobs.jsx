import React from "react";

const Jobs = (props) => {
  return (
    <li>
      <h3>
        {props.company} <span className="dates">{props.dates}</span>
      </h3>
      <p>
        <em>{props.title}</em>
      </p>
    </li>
  );
};

export default Jobs;

import React from "react";

const Jobs = (props) => {
  return (
    <li key={props.id}>
      <h3>{props.company}</h3>
      <strong>{props.location}</strong>
      <br />
      {props.dates}

      <p>
        <em>{props.title}</em>
      </p>
    </li>
  );
};

export default Jobs;

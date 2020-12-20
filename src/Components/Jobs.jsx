import React from "react";
import JobTaskItem from "./JobTaskItem";

const Jobs = (props) => {
  console.log(props.description);
  const list = props.description.map((listItem) => {
    return <JobTaskItem description = {listItem} />
  })
 
  return (
    <li key={props.id}>
      <h3>{props.company}</h3>
      <strong>{props.location}</strong>
      <br />
      {props.dates}

      <p>
        <em>{props.title}</em>
      </p>
      <ul className = "jobTasks">
        {list}
      </ul>
    </li>
  );
};

export default Jobs;

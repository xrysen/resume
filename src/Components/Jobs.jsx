import React from "react";
import JobTaskItem from "./JobTaskItem";

const Jobs = (props) => {
  const list = props.description.map((listItem) => {
    return <JobTaskItem description={listItem} />;
  });

  return (
    <li key={props.id}>
      <header className="jobDates">
        <h3>{props.company}</h3>
        <div>
          <strong>{props.location}</strong>
          <br />
          <strong>{props.dates}</strong>
        </div>
      </header>

      <p>
        <em>{props.title}</em>
      </p>
      <ul className="jobTasks">{list}</ul>
    </li>
  );
};

export default Jobs;

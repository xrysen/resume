import React from "react";
import Jobs from "./Jobs";
import { experience } from "../data/data";

const Experience = () => {
  const positions = experience.map((job) => {
    return (
      <Jobs
        company={job.company}
        title={job.title}
        dates={job.dates}
        key={job.id}
        location={job.location}
      />
    );
  });
  return (
    <section className="experience">
      <h1>Experience</h1>
      <ul>{positions}</ul>
    </section>
  );
};

export default Experience;

import React from "react";
import ProjectListItem from "./ProjectListItem";
import { projects } from "../data/data";

const Projects = () => {
  const project = projects.map((project) => {
    return (
      <ProjectListItem
        key={project.id}
        name={project.title}
        description={project.description}
        techStack={project.techStack}
      />
    );
  });

  return (
    <section className="projects">
      <h1>Projects</h1>
      <ul>
        {project}
      </ul>
    </section>
  );
};

export default Projects;

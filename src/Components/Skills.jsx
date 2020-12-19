import React from "react";

const Skills = (props) => {
  const formatSkills = (skill) => {
    const result = skill.map((item, index) => {
      if (index !== skill.length - 1) {
        return item + ", ";
      } else {
        return item;
      }
    });
    return result;
  };

  return (
    <section className="skills">
      <h1>Skills</h1>
      <p>
        <strong>Languages: </strong>
        {formatSkills(props.languages)}
      </p>
      <p>
        <strong>Frameworks/Libraries: </strong>
        {formatSkills(props.frameworks)}
      </p>
      <p>
        <strong>Databases: </strong>
        {formatSkills(props.databases)}
      </p>
    </section>
  );
};

export default Skills;

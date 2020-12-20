import React from "react";
import { education } from "../data/data";
import EducationListItem from "./EducationListItem";

const Education = () => {
  const schools = education.map((item) => {
    return (
      <EducationListItem
        key={item.id}
        school={item.school}
        dates={item.dates}
        diploma={item.diploma}
      />
    );
  });

  return (
    <section>
      <h1>Education</h1>
      <ul>{schools}</ul>
    </section>
  );
};

export default Education;

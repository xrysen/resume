import React from "react";

const EducationListItem = (props) => {

  return (
    <li>
      <h3>{props.school}</h3>
      <p><em>{props.diploma}</em></p>
      <p>{props.dates}</p>
    </li>
  )
}

export default EducationListItem;

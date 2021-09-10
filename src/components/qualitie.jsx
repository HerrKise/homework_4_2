import React from "react";
const Qualitie = ({ color, name, _id }) => {
  const getBadgeClasses = (color) => {
    let classes = "badge m-2 bg-";
    classes += color;
    return classes;
  };

  return (
    <span key={_id} className={getBadgeClasses(color)}>
      {name}
    </span>
  );
};

export default Qualitie;

import React from "react";
import MenuItem from "./MenuItem.component.jsx";
import "./Directory.styles.scss";

function Directory({ sections }) {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...section }) => (
        <MenuItem key={id} {...section} />
      ))}
    </div>
  );
}

export default Directory;

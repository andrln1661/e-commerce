import React from "react";
import MenuItem from "./MenuItem.component.jsx";
import "./Directory.styles.scss";

import { selectDirectorySections } from "../redux/directory/directory.selector";
import { useSelector } from "react-redux";

function Directory() {
  let sections = useSelector(selectDirectorySections);

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...section }) => (
        <MenuItem key={id} {...section} />
      ))}
    </div>
  );
}

export default Directory;

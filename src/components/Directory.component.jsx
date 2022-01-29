import React from "react";
import { connect } from "react-redux";
import MenuItem from "./MenuItem.component.jsx";
import "./Directory.styles.scss";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../redux/directory/directory.selector";

function Directory({ sections }) {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...section }) => (
        <MenuItem key={id} {...section} />
      ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);

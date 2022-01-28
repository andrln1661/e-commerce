import React from "react";
import Directory from "../components/Directory.component.jsx";
import "./Homepage.styles.scss";
import sections from "./homepage.data.js";

function Homepage() {
  return (
    <div className="homepage">
      <Directory sections={sections} />
    </div>
  );
}

export default Homepage;

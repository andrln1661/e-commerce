import React from "react";
import "./Signpage.styles.scss";

import SignIn from "../components/sign-in.component";
import SignUp from "../components/sign-up.component";

function Signpage() {
  return (
    <div className="sign-page">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default Signpage;

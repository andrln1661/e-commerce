import React, { useState } from "react";
import { connect } from "react-redux";

import "./sign-up.styles.scss";

import { signUpStart } from "../redux/user/user.actions";

import FormInput from "./form-input.component";
import CustomButton from "./custom-button.component";

function SignUp({ signUpStart }) {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    signUpStart({ email, password, displayName });

    setDisplayName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account yet</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={(event) => setDisplayName(event.target.value)}
          label="Display Name"
        />
        <FormInput
          type="text"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          label="Email"
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          label="Password"
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          label="Confirm Password"
        />
        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);

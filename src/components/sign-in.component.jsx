import React, { useState } from "react";
import { connect } from "react-redux";

import "./sign-in.styles.scss";

import {
  googleSignInStart,
  emailSignInStart,
} from "../redux/user/user.actions";

import FormInput from "./form-input.component";
import CustomButton from "./custom-button.component";

function SignIn({ googleSignInStart, emailSignInStart }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    emailSignInStart(email, password);
  };

  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          label="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <FormInput
          name="password"
          type="password"
          label="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);

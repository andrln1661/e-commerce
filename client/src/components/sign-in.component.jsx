import React, { useState } from "react";
import "./sign-in.styles.scss";

import {
  googleSignInStart,
  emailSignInStart,
} from "../redux/user/user.actions";

import FormInput from "./form-input.component";
import CustomButton from "./custom-button.component";
import { useDispatch } from "react-redux";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(emailSignInStart({ email, password }));
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
            onClick={() => dispatch(googleSignInStart())}
            isGoogleSignIn
          >
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
}

export default SignIn;

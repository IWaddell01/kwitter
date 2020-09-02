import React from "react";
import {
  LoginFormContainer,
  SignUpFormContainer,
  MenuContainer,
} from "../components";

export const HomeScreen = () => (
  <>
    <MenuContainer />
    <h2>Your favorite microblogging platform</h2>
    <h3>Login</h3>
    <LoginFormContainer />
    <br />
    <h3>Sign Up</h3>
    <SignUpFormContainer />
  </>
);

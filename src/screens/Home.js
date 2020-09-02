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
    <LoginFormContainer />
    <SignUpFormContainer />
  </>
);

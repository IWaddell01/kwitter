import React from "react";
import {
  LoginFormContainer,
  SignUpFormContainer,
  MenuContainer,
} from "../components";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export const HomeScreen = () => (
  <>
    <MenuContainer />
    <h4>Your favorite microblogging platform</h4>

    <Tabs defaultFocus={true} defaultIndex={1}>
      <TabList>
        <Tab>Login</Tab>
        <Tab>Sign Up</Tab>
      </TabList>

      <TabPanel>
        <h3>Login</h3>
        <LoginFormContainer />
        <br />
      </TabPanel>
      <TabPanel>
        <h3>Sign Up</h3>
        <SignUpFormContainer />
      </TabPanel>
    </Tabs>
  </>
);

import React from "react";
import {
  LoginFormContainer,
  SignUpFormContainer,
  MenuContainer,
} from "../components";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Footer } from "rsuite";

import "react-tabs/style/react-tabs.css";

import { AiOutlineLogin } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";

export const HomeScreen = () => (
  <>
    <MenuContainer />
    <h4>Your favorite microblogging platform</h4>
    <Tabs defaultFocus={true} defaultIndex={1}>
      <TabList>
        <Tab>
          <AiOutlineLogin />
          Login
        </Tab>
        <Tab>
          <AiFillEdit />
          Sign Up
        </Tab>
      </TabList>

      <TabPanel>
        <em>
          <strong>Please enter details to login to acccount.</strong>
        </em>
        <br /> <br />
        <LoginFormContainer />
      </TabPanel>
      <TabPanel>
        <em>
          <strong>Please enter details to create an acccount.</strong>
        </em>
        <br /> <br />
        <SignUpFormContainer />
      </TabPanel>
    </Tabs>
    <Footer>Footer</Footer>
  </>
);

import React from "react";
import { CreateMessageContainer, MenuContainer } from "../components";

import "react-tabs/style/react-tabs.css";

import { AiFillEdit } from "react-icons/ai";
import { Footer } from "rsuite";

export const CreateMessageScreen = () => (
  <>
    <MenuContainer />
    <h4>Post a message to the feed</h4>
    <strong>
      Remember, posting online is "forever" <br />
      -- happy posting
    </strong>
    <br /> <br />
    <CreateMessageContainer />
    <Footer>Kwitter - Team S - SE Q2</Footer>
  </>
);

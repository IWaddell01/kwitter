import React from "react";
import { CreateMessageContainer, MenuContainer } from "../components";
import { FooterScreen as Footer } from "./Footer";

import "react-tabs/style/react-tabs.css";

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
    <Footer />
  </>
);

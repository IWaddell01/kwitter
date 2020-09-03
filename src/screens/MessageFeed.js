import React from "react";
import { MenuContainer } from "../components";
import { MessageFeedContainer } from "../components/messageFeed";

export const MessageFeedScreen = () => (
  <>
    <MenuContainer />
    <h2>Message Feed</h2>
    <p>this is from the MessageFeedScreen</p>
    <MessageFeedContainer />
  </>
);

import React from "react";
import { CreateMessageContainer, MenuContainer } from "../components";
import { FooterScreen } from "./Footer";

import "react-tabs/style/react-tabs.css";

import { Container, Header, Content, Footer } from "rsuite";

export const CreateMessageScreen = () => (
  <>
    <Container>
      <Header>
        <MenuContainer />
        <h2>Create message</h2>
        <strong>Remember, posting online is "forever" </strong> <br />
        <em>-- happy posting</em>
      </Header>
      <Content>
        <CreateMessageContainer />
      </Content>
      <Footer>
        <FooterScreen />
      </Footer>
    </Container>
  </>
);

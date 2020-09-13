import React from "react";
import { LoginFormContainer, MenuContainer } from "../components";
import { FooterScreen } from "./Footer";

import { Container, Header, Content, Footer } from "rsuite";

export const LoginScreen = () => (
  <>
    <Container>
      <Header>
        <MenuContainer />
      </Header>
      <Content>
        <h2>Log into Your favorite microblogging platform</h2>
        <LoginFormContainer />
      </Content>
      <Footer>
        <FooterScreen />
      </Footer>
    </Container>
  </>
);

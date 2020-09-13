import React from "react";
import { SignUpFormContainer, MenuContainer } from "../components";
import { FooterScreen } from "./Footer";

import { Container, Header, Content, Footer } from "rsuite";

export const SignUpScreen = () => (
  <>
    <Container>
      <Header>
        <MenuContainer />
      </Header>
      <Content>
        <h2>Sign up for Your favorite microblogging platform</h2>
        <SignUpFormContainer />
      </Content>
      <Footer>
        <FooterScreen />
      </Footer>
    </Container>
  </>
);

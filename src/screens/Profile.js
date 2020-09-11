import React from "react";
import { MenuContainer, UsernameContainer } from "../components";
import { FooterScreen } from "./Footer";
import { Container, Header, Content, Footer } from "rsuite";

export const ProfileScreen = () => (
  <>
    <Container>
      <Header>
        <MenuContainer />
        <h2>Profile</h2>
      </Header>
      <Content>
        <UsernameContainer />
      </Content>
      <Footer>
        <FooterScreen />
      </Footer>
    </Container>
  </>
);
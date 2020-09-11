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
        <strong>Let the world know a little bit about yourself.</strong>
        <br />
        <em>you can be anything you want to be ...on the internet</em>
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

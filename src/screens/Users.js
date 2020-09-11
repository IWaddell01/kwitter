import React from "react";
import { UsersContainer, MenuContainer } from "../components";
import { FooterScreen } from "./Footer";
import { Container, Header, Content, Footer } from "rsuite";

export const UsersScreen = () => (
  <>
    <Container>
      <Header>
        <MenuContainer />
        <h2>List of Users</h2>
        <strong>Best friends "forever" </strong> <br />
        <em>-- end ever</em>
      </Header>
      <Content>
        <UsersContainer />
      </Content>
      <Footer>
        <FooterScreen />
      </Footer>
    </Container>
  </>
);

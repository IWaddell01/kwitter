import React from "react";
import { UpdateProfileContainer, MenuContainer } from "../components";

import { FooterScreen } from "./Footer";
import { Container, Header, Content, Footer } from "rsuite";

export const UpdateProfileScreen = () => (
  <>
    <Container>
      <Header>
        <MenuContainer />
        <h2>Update Profile:</h2>
        <strong>
          "I am what I am because I say I am"
        </strong>
        <br />
        <em>Please fill out <strong>all fields</strong> to take affect...</em>
      </Header>
      <Content>
        <UpdateProfileContainer />
      </Content>
      <Footer>
        <FooterScreen />
      </Footer>
    </Container>
  </>
);

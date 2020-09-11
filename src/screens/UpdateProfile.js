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

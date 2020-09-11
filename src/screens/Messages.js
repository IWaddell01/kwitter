import React from "react";
import { MessagesContainer, MenuContainer } from "../components";
import { FooterScreen } from "./Footer";
import { Container, Header, Content, Footer } from "rsuite";

export const MessagesScreen = () => (
  <>
    <Container>
      <Header>
        <MenuContainer />
        <h2>Message Feed</h2>
        <strong>
          Take a deep breath and explore/look into the infinite abyss!
        </strong>
        <br />
        <em>Keep scrolling for more posts...</em>
      </Header>
      <Content>
        <MessagesContainer />
      </Content>
      <Footer>
        <FooterScreen />
      </Footer>
    </Container>
  </>
);

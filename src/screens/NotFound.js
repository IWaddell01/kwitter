import React from "react";
import { Link } from "react-router-dom";
import { MenuContainer } from "../components";

import { FooterScreen } from "./Footer";
import { Container, Header, Content, Footer } from "rsuite";

const NotFound = ({ location }) => (
  <>
    <Container>
      <Header>
        <MenuContainer />
        <h2>404</h2>
      </Header>
      <Content>
        <p>Page not found for {location.pathname}</p>
      </Content>
      <Footer>
        <FooterScreen />
      </Footer>
    </Container>
  </>
);

export const NotFoundScreen = NotFound;

import React from "react";
import { MenuContainer, UsernameContainer } from "../components";
import { FooterScreen as Footer } from "./Footer";

export const ProfileScreen = () => (
  <>
    <MenuContainer />
    <h2>Profile</h2>
    <UsernameContainer />
    <Footer />
  </>
);

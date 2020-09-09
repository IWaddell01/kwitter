import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../redux/actions/";

import "./Menu.css";

import { Navbar } from "rsuite";

export const Menu = () => {
  const isAuthenticated = useSelector((state) => !!state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const logout = () => dispatch(actions.logout());
  return (
    <Navbar appearance="inverse" componentClass="div">
      <div id="menu">
        <Navbar.Header>
          <Link to="/">
            <h1>KWITTER</h1>
          </Link>
        </Navbar.Header>
        <div id="menu-links">
          {isAuthenticated ? (
            <>
              <Navbar.Body>
                <Link to="/messagefeed">Message Feed</Link>
                <Link to="/users">Users</Link>
                <Link to="/" onClick={logout}>
                  Logout
                </Link>
              </Navbar.Body>
            </>
          ) : null}
        </div>
      </div>
    </Navbar>
  );
};

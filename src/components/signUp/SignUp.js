import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../redux/actions/auth";
import { Loader } from "../loader";

import "./SignUp.css";
import { Button, Alert, PanelGroup, Panel } from "rsuite";

export const SignUp = ({ signUp }) => {
  const { loading, error } = useSelector((state) => ({
    loading: state.auth.loading,
    error: state.auth.error,
  }));

  const dispatch = useDispatch();

  const [state, setState] = useState({
    username: "",
    displayName: "",
    password: "",
  });

  const handleSignUp = (event) => {
    event.preventDefault();
    dispatch(actions.signUp(state));
    // clear out inputs on submit
    setState({
      username: "",
      displayName: "",
      password: "",
    });
    Alert.success("New account created! Please login.");
  };

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setState((prevState) => ({ ...prevState, [inputName]: inputValue }));
  };

  return (
    <React.Fragment>
      <PanelGroup>
        <Panel>
          <form id="sign-up" onSubmit={handleSignUp}>
            <label htmlFor="username">Email (will be your username)</label>
            <input
              type="text"
              name="username"
              placeholder="user@email.com"
              value={state.username}
              autoFocus
              required
              onChange={handleChange}
            />
            <label htmlFor="displayName">Display Name</label>
            <input
              type="text"
              name="displayName"
              placeholder="John Lennon"
              value={state.displayName}
              autoFocus
              required
              onChange={handleChange}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="p@55w0rd"
              value={state.password}
              required
              onChange={handleChange}
            />
            <Button appearance="primary" type="submit" disabled={loading}>
              Sign Up
            </Button>
          </form>
        </Panel>
      </PanelGroup>
      {loading && <Loader />}
      {error && <p style={{ color: "red" }}>{error.message}</p>}
    </React.Fragment>
  );
};

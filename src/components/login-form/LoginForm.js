import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { actions } from "../../redux/actions/auth";
import { Loader } from "../loader";

import "./LoginForm.css";
import { Button, Panel } from "rsuite";
import { AiFillGoogleCircle, AiOutlineLogin } from "react-icons/ai";

export const LoginForm = ({ login }) => {
  const { loading, error } = useSelector((state) => ({
    loading: state.auth.loading,
    error: state.auth.error,
  }));

  let history = useHistory();

  const dispatch = useDispatch();

  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(actions.login(state));
    history.push("/");
  };

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setState((prevState) => ({ ...prevState, [inputName]: inputValue }));
  };

  const handleGoogleLogin = () => {
    const authLoginWindow = window.open(
      "https://kwitter-api.herokuapp.com/auth/google/login",
      "_blank"
    );
    authLoginWindow.window.opener.onmessage = (event) => {
      authLoginWindow.close();

      if (!event || !event.data || !event.data.token) {
        return;
      }
      dispatch(actions.loginGoogle(event.data));
      history.push("/");
    };
  };

  return (
    <>
      <Panel>
        <form id="login-form" onSubmit={handleLogin}>
          <label htmlFor="username">Email (will be your username)</label>
          <input
            type="text"
            name="username"
            placeholder="hello@world.com"
            value={state.username}
            autoFocus
            required
            onChange={handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="donthackme"
            name="password"
            value={state.password}
            required
            onChange={handleChange}
          />
          <Button active appearance="primary" type="submit" disabled={loading}>
            <AiOutlineLogin />
            Login
          </Button>
          <Button
            active
            appearance="ghost"
            disabled={loading}
            onClick={handleGoogleLogin}
          >
            <AiFillGoogleCircle /> Google Login
          </Button>
        </form>
      </Panel>
      {loading && <Loader />}
      {error && <p style={{ color: "red" }}>{error.message}</p>}
    </>
  );
};

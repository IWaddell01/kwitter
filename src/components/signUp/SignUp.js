import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../redux/actions/auth";
import { Loader } from "../loader";
import "./SignUp.css";

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
  };

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setState((prevState) => ({ ...prevState, [inputName]: inputValue }));
  };

  return (
    <React.Fragment>
      <form id="sign-up" onSubmit={handleSignUp}>
        <label htmlFor="username">Email (will be your username)</label>
        <input
          type="text"
          name="username"
          placeholder="me@everythingisawesome.com"
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
          placeholder="b3@tl35Lyr4Cs"
          value={state.password}
          required
          onChange={handleChange}
        />
        <button type="submit" disabled={loading}>
          Sign Up
        </button>
      </form>
      {loading && <Loader />}
      {error && <p style={{ color: "red" }}>{error.message}</p>}
    </React.Fragment>
  );
};

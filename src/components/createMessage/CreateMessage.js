import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { createMessage } from "../../redux/actions/messages";
import { Loader } from "../loader";

import "./CreateMessage.css";
import { Button, Alert, Panel } from "rsuite";

export const CreateMessage = ({ text }) => {
  const { loading, error } = useSelector((state) => ({
    loading: state.auth.loading,
    error: state.auth.error,
  }));

  const dispatch = useDispatch();

  let history = useHistory();

  const [state, setState] = useState({
    text: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createMessage(state));
    // clear out inputs on submit
    setState({
      text: "",
    });
    Alert.success("Post submission successful!");
    history.push("/messagefeed");
  };

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setState((prevState) => ({ ...prevState, [inputName]: inputValue }));
  };

  return (
    <>
      <Panel>
        <form id="createMessage-form" onSubmit={handleSubmit}>
          <label htmlFor="text">I think therefore I am...</label>
          <input
            type="text"
            placeholder="What' on your mind..?"
            name="text"
            value={state.text}
            required
            onChange={handleChange}
          />
          <Button active appearance="primary" type="submit" disabled={loading}>
            Submit Post
          </Button>
        </form>
      </Panel>

      {loading && <Loader />}
      {error && <p style={{ color: "red" }}>{error.message}</p>}
    </>
  );
};

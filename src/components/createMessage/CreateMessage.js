import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createMessage } from "../../redux/actions/messages";
import { Loader } from "../loader";

import "./CreateMessage.css";
import { Button, Alert, Panel, PanelGroup } from "rsuite";

export const CreateMessage = ({ text }) => {
  const { loading, error } = useSelector((state) => ({
    loading: state.auth.loading,
    error: state.auth.error,
  }));

  const dispatch = useDispatch();

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
            <Button
              active
              appearance="primary"
              type="submit"
              disabled={loading}
            >
              Submit Post
            </Button>
          </form>
        </Panel>

        {loading && <Loader />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </PanelGroup>
    </React.Fragment>
  );
};

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createMessage } from "../../redux/actions/messages";
import { Loader } from "../loader";

import "./CreateMessage.css";
import { Button } from "rsuite";

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
    dispatch(createMessage.createMessage(state));
  };

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setState((prevState) => ({ ...prevState, [inputName]: inputValue }));
  };

  return (
    <React.Fragment>
      <form id="createMessage-form" onSubmit={handleSubmit}>
        <label htmlFor="text">Text</label>
        <input
          type="text"
          placeholder="Everything is awesome."
          name="text"
          value={state.text}
          required
          onChange={handleChange}
        />
        <Button active appearance="primary" type="submit" disabled={loading}>
          Submit Post
        </Button>
      </form>

      {loading && <Loader />}
      {error && <p style={{ color: "red" }}>{error.message}</p>}
    </React.Fragment>
  );
};

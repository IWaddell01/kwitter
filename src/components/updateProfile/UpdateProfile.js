import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./UpdateProfile.css";
import { actions } from "../../redux/actions/updateprofile";
import { Loader } from "../loader";
import "rsuite/dist/styles/rsuite-default.css";
import { Button, Alert } from "rsuite";

export const UpdateProfile = () => {
  const { loading, error } = useSelector((state) => ({
    loading: state.auth.loading,
    error: state.auth.error,
  }));

  const dispatch = useDispatch();

  const [state, setState] = useState({
    displayName: "",
    password: "",
    about: "",
  });

  const handleUpdateProfile = (event) => {
    event.preventDefault();
    dispatch(actions.updateProfile(state));
    // clear out inputs on submit
    setState({
      displayName: "",
      password: "",
      about: "",
    });
    Alert.success("Profile Updated!");
  };

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setState((prevState) => ({ ...prevState, [inputName]: inputValue }));
  };

  return (
    <>
      <form id="update-profile" onSubmit={handleUpdateProfile}>
        <label htmlFor="displayName">New Display Name:</label>
        <input
          type="text"
          name="displayName"
          placeholder="John Doe"
          value={state.displayName}
          onChange={handleChange}
        />
        <label htmlFor="password">New Password:</label>
        <input
          type="password"
          name="password"
          placeholder="p@55w0rd"
          value={state.password}
          onChange={handleChange}
        />
        <label htmlFor="about">Set About:</label>
        <input
          type="text"
          name="about"
          placeholder="Set your profile about"
          value={state.about}
          onChange={handleChange}
        />
        
          {/* Still need to connect set profile pic endpoint         */}
        {/*<label htmlFor="fileUpload">Set Profile Picture</label>
        <input type="file" id="fileUpload" /> */}

        <Button appearance="primary" type="submit">
          Submit
        </Button>
      </form>
      {loading && <Loader />}
      {error && <p style={{ color: "red" }}>{error.message}</p>}
    </>
  );
};

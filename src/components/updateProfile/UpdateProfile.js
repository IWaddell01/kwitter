import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
<<<<<<< HEAD
import api from "../../utils/api"
import { username, delUser } from "../../redux/actions/username"
=======
import api from "../../utils/api";
import { username } from "../../redux/actions/username";
>>>>>>> dcf63ba1684a19345775b9f1fad3d298cc35869d
import { updateProfile } from "../../redux/actions/updateProfile";
import { Loader } from "../loader";
import "./UpdateProfile.css";
import "rsuite/dist/styles/rsuite-default.css";
import { Button, Alert, Panel } from "rsuite";

export const UpdateProfile = () => {
  const { user, loading, error } = useSelector((state) => ({
    user: state.auth.username,
    loading: state.updateProfile.loading,
    error: state.updateProfile.error,
  }));

  const dispatch = useDispatch();
  const picture = useRef(null);

  const [state, setState] = useState({
    displayName: "",
    password: "",
    about: "",
  });

  const handleUpdateProfile = (event) => {
    event.preventDefault();
    dispatch(updateProfile(state));
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

  const setPic = async (event) => {
    event.preventDefault();
    const pictureUrl = new FormData(picture.current);
    const results = await api.setProfilePic(user, pictureUrl);
    dispatch(username(user));
    Alert.success("Profile photo updated!");
  };

  const handleDeleteUser = (event) => {
    dispatch(delUser())
  }

  return (
    <>
<<<<<<< HEAD
      <PanelGroup>
        <Panel>
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
            <Button appearance="primary" type="submit">
              Submit
            </Button>
          </form>
          <hr />
          <h4>Set Profile Picture</h4>
          <form ref={picture} onSubmit={setPic}>
            <input className="upload" type="file" name="picture"></input>
            <Button appearance="primary" type="submit" block>Upload My Picture</Button>
          </form>

          <hr />
          <h5>Delete your account</h5>
          <Button appearance="primary" color="red" block onClick={handleDeleteUser}>DELETE ACCOUNT</Button>
        </Panel>

        {loading && <Loader />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </PanelGroup>
=======
      <Panel>
        <form id="updateProfile-form" onSubmit={handleUpdateProfile}>
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
            placeholder="donthackme"
            value={state.password}
            onChange={handleChange}
          />
          <label htmlFor="about">Update About Information:</label>
          <input
            className="aboutInput"
            type="text"
            name="about"
            placeholder="Set your profile about"
            value={state.about}
            onChange={handleChange}
          />
          <Button appearance="primary" type="submit">
            Update Profile
          </Button>
        </form>
        <hr />
        <h4>Set Profile Picture</h4>
        <form ref={picture} onSubmit={setPic}>
          <input className="upload" type="file" name="picture"></input>
          <Button appearance="primary" type="submit" block>
            Upload My Picture
          </Button>
        </form>
      </Panel>
      {loading && <Loader />}
      {error && <p style={{ color: "red" }}>{error.message}</p>}
>>>>>>> dcf63ba1684a19345775b9f1fad3d298cc35869d
    </>
  );
};

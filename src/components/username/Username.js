import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { username } from "../../redux/actions/username";
import "./Username.css";
import "rsuite/dist/styles/rsuite-default.css";
import { Panel, PanelGroup, Button } from "rsuite";

export const Username = () => {
  const userData = useSelector((state) => state.userInfo.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(username());
  }, [dispatch]);

  return (
    <React.Fragment>
      {/* Wrap in conditional render to end null errors */}
      {userData && (
        <PanelGroup>
          <Panel header={"Name: " + userData.user.displayName}>
            <img src={"https://kwitter-api.herokuapp.com" + userData.user.pictureLocation} alt="User Profile Pic"/><br />
            <hr />
            Username/Email: <strong>{userData.user.username}</strong> <br />
            About: <strong>{userData.user.about}</strong> <br />
            Member Since: <strong>{userData.user.createdAt}</strong> <br />
            <hr />
            <Link to="/updateprofile"><Button appearance="ghost" block>Update Profile</Button></Link>
          </Panel>
        </PanelGroup>
      )}
    </React.Fragment>
  );
};

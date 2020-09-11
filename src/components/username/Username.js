import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { username } from "../../redux/actions/username";
import "./Username.css";
import "rsuite/dist/styles/rsuite-default.css";
import { Panel, Button } from "rsuite";

export const Username = () => {
  const userData = useSelector((state) => state.userInfo.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(username());
  }, [dispatch]);

  return (
    <>
      {/* Wrap in conditional render to end null errors */}
      {userData && (
        <Panel header={"Name: " + userData.user.displayName}>
          <img
            src={
              "https://kwitter-api.herokuapp.com" +
              userData.user.pictureLocation
            }
            width="100"
            height="100"
          />
          <br />
          <hr />
          Username/Email: <strong>{userData.user.username}</strong> <br />
          About: <strong>{userData.user.about}</strong> <br />
          Member Since: <strong>{userData.user.createdAt}</strong> <br />
          <hr />
          <Link to="/updateprofile">
            <Button appearance="ghost" block>
              Update Profile
            </Button>
          </Link>
        </Panel>
      )}
    </>
  );
};

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { username } from "../../redux/actions/username";

import "./Username.css";
import "rsuite/dist/styles/rsuite-default.css";
import { Panel, PanelGroup } from "rsuite";

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
            User Image: <strong>{userData.user.pictureLocation}</strong> <br />
            Email: <strong>{userData.user.username}</strong> <br />
            About Member: <strong>{userData.user.about}</strong>
            Member Since: <strong>{userData.user.createdAt}</strong> <br />
            <hr />
          </Panel>
        </PanelGroup>
      )}
    </React.Fragment>
  );
};

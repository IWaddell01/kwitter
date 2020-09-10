import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { username } from "../../redux/actions/username";

import "./Username.css";
import "rsuite/dist/styles/rsuite-default.css";
import { Panel, PanelGroup } from "rsuite";

export const Username = () => {
  const userInfo = useSelector((state) => state.username);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(username(userInfo));
  }, [dispatch, userInfo]);

  // const userList = Array.from(state.users.users);
  console.log(userInfo);
  // TODO: Show userInfo info in console.log -keeps showing undefined.
  return (
    <React.Fragment>
      <PanelGroup>
        <Panel header={"userInfo"}>
          User Image: {"user image"} <br />
          Display Name: {"display name"} <br />
          Member Since: {"created date"} <br />
          About Member: {"about member"}
        </Panel>
      </PanelGroup>
    </React.Fragment>
  );
};

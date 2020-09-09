import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { username } from "../../redux/actions/username";

import "./Username.css";
import "rsuite/dist/styles/rsuite-default.css";
import { Panel, PanelGroup } from "rsuite";

export const Username = () => {
  const user = useSelector((state) => state.username);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(username());
  }, []);

  // const userList = Array.from(state.users.users);
  console.log(user);
  return (
    <React.Fragment>
      <PanelGroup>
        <Panel header="User Name">
          User Image: {"user image"} <br />
          Display Name: {"display name"} <br />
          Member Since: {"created date"} <br />
        </Panel>
      </PanelGroup>
    </React.Fragment>
  );
};

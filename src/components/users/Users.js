import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { users } from "../../redux/actions/users";
import { v4 as uuid } from "uuid";

import "./Users.css";
import "rsuite/dist/styles/rsuite-default.css";
import { Panel, PanelGroup } from "rsuite";

export const Users = () => {
  const userList = useSelector((state) => state.users.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(users());
  }, [dispatch]);

  return (
    <React.Fragment>
      {userList &&
        userList.users.map((data) => (
          <PanelGroup>
            <div key={uuid()} className="usersList">
              <Panel header={"Username: " + data.username}>
                Display Name: {data.displayName} <br />
                Member Since: {data.createdAt} <br />
              </Panel>
            </div>
          </PanelGroup>
        ))}
    </React.Fragment>
  );
};

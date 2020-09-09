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
  }, []);

  // const userList = Array.from(state.users.users);
  console.log(userList);
  return (
    <React.Fragment>
      {userList &&
        userList.users.map((data) => (
          <PanelGroup>
            <div key={uuid()} className="usersList">
              <Panel header="Username">{data.username}</Panel>
              <Panel header="Display Name">{data.displayName}</Panel>
              <Panel header="User Since">{data.createdAt}</Panel>
            </div>
          </PanelGroup>
        ))}
    </React.Fragment>
  );
};

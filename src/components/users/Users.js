import React from "react";
import { useSelector } from "react-redux";
import "./Users.css";
import "rsuite/dist/styles/rsuite-default.css";
import { v4 as uuid } from "uuid";

export const Users = () => {
  const state = useSelector((state) => state.users);

  const userList = Array.from(state.users.users)
  console.log(userList)
  return (
    <React.Fragment>
      {userList.map((data) => (
        <div key={uuid()} className="usersList">
          Username: {data.username}
          <br />
          Name: {data.displayName}
          <br />
          User since: {data.createdAt}
        </div>
      ))}
    </React.Fragment>
  );
};

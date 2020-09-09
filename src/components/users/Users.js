import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../redux/actions/users";
import "./Users.css";
import "rsuite/dist/styles/rsuite-default.css";
import { Loader } from "./../loader/Loader";

export const Users = () => {
  const state = useSelector((state) => state.users);
//   const dispatch = useDispatch();

//   dispatch(actions.users());
  
    // console.log()

  return (
    <React.Fragment>
    {state.users.count}

    {/* {loading && <Loader />} */}
    {/* {error && <p style={{ color: "red" }}>{error.message}</p>} */}
    </React.Fragment>
  );
};

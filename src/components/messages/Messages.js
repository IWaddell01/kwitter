import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../redux/actions/messages";
import "./Messages";

export const Messages = () => {
const state = useSelector((state) => state.messages);

//   const dispatch = useDispatch();

//   dispatch(actions.users());
  
    // console.log()

  return (
    <React.Fragment>
    {state.messages}

    {/* {loading && <Loader />} */}
    {/* {error && <p style={{ color: "red" }}>{error.message}</p>} */}
    </React.Fragment>
  );
};

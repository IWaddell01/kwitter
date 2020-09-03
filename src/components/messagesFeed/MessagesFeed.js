import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../redux/actions/messagesFeed";
import { Loader } from "../loader";
import "./MessagesFeed.css";

export const MessagesFeed = ({ messagesFeed }) => {
  const { loading, error } = useSelector((state) => ({
    loading: state.auth.loading,
    error: state.auth.error,
  }));

  const dispatch = useDispatch();

  const [state, setState] = useState({
    id: 0,
    text: "",
    username: "",
    createdAt: "",
    likes: [],
  });

  //   const messagesFeed = () => {
  //     dispatch(actions.messagesFeed(state));
  //   };

  return (
    <React.Fragment>
      {/* start here */}
      {console.log(messagesFeed)}
      {/* end here */}
      {loading && <Loader />}
      {error && <p style={{ color: "red" }}>{error.message}</p>}
    </React.Fragment>
  );
};

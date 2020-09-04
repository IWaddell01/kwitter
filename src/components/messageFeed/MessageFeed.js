import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { actions } from "../../redux/actions/messageFeed";
import { Loader } from "../loader";
import "./MessageFeed.css";

export const MessageFeed = ({ messageFeed }) => {
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

  //   const messageFeed = () => {
  //     dispatch(actions.messageFeed(state));
  //   };

  return (
    <React.Fragment>
      {/* start here */}
      {console.log(messageFeed)}
      this is the messageFeedContainer
      {/* end here */}
      {loading && <Loader />}
      {error && <p style={{ color: "red" }}>{error.message}</p>}
    </React.Fragment>
  );
};
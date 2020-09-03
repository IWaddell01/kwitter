import api from "../../utils/api";

// AUTH CONSTANTS
export const MESSAGE_FEED = "AUTH/MESSAGE_FEED";
export const MESSAGE_FEED_SUCCESS = "AUTH/MESSAGE_FEED_SUCCESS";
export const MESSAGE_FEED_FAILURE = "AUTH/MESSAGE_FEED_FAILURE";

/*
 AUTH ACTIONS (this is a thunk....)
 THUNKS: --> https://github.com/reduxjs/redux-thunk#whats-a-thunk
 If you need access to your store you may call getState()
*/

// message feed
const messageFeed = (credentials) => async (dispatch, getState) => {
  try {
    dispatch({ type: MESSAGE_FEED });
    const payload = await api.messageFeed(credentials);
    // ℹ️ℹ️This is how you woud debug the response to a requestℹ️ℹ️
    // console.log({ result })
    dispatch({ type: MESSAGE_FEED_SUCCESS, payload });
  } catch (err) {
    dispatch({
      type: MESSAGE_FEED_FAILURE,
      payload: err.message,
    });
  }
};

// END AUTH ACTIONS

export const actions = {
  messageFeed,
};

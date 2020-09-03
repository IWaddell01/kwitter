import api from "../../utils/api";

// AUTH CONSTANTS
export const MESSAGES_FEED = "AUTH/MESSAGES_FEED";
export const MESSAGES_FEED_SUCCESS = "AUTH/MESSAGES_FEED_SUCCESS";
export const MESSAGES_FEED_FAILURE = "AUTH/MESSAGES_FEED_FAILURE";

/*
 AUTH ACTIONS (this is a thunk....)
 THUNKS: --> https://github.com/reduxjs/redux-thunk#whats-a-thunk
 If you need access to your store you may call getState()
*/

// messages feed
const messagesFeed = (credentials) => async (dispatch, getState) => {
  try {
    dispatch({ type: MESSAGES_FEED });
    const payload = await api.messagesFeed(credentials);
    // ℹ️ℹ️This is how you woud debug the response to a requestℹ️ℹ️
    // console.log({ result })
    dispatch({ type: MESSAGES_FEED_SUCCESS, payload });
  } catch (err) {
    dispatch({
      type: MESSAGES_FEED_FAILURE,
      payload: err.message,
    });
  }
};

// END AUTH ACTIONS

export const actions = {
  messagesFeed,
};

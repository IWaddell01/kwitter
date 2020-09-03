import api from "../../utils/api";

// AUTH CONSTANTS
export const MESSAGE_FEED = "MESSAGE_FEED/MESSAGE_FEED";
export const MESSAGE_FEED_SUCCESS = "MESSAGE_FEED/MESSAGE_FEED_SUCCESS";
export const MESSAGE_FEED_FAILURE = "MESSAGE_FEED/MESSAGE_FEED_FAILURE";

// message feed
const messageFeed = (message) => async (dispatch, getState) => {
  try {
    dispatch({ type: MESSAGE_FEED });
    const payload = await api.messageFeed(message);
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

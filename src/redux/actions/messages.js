import api from "../../utils/api";

// AUTH CONSTANTS MESSAGES
export const MESSAGES = "MESSAGES";
export const MESSAGES_SUCCESS = "MESSAGES_SUCCESS";
export const MESSAGES_FAILURE = "MESSAGES_FAILURE";

// AUTH CONSTANTS CREATE MESSAGE
export const CREATE_MESSAGE = "CREATE_MESSAGE";
export const CREATE_MESSAGE_SUCCESS = "CREATE_MESSAGE_SUCCESS";
export const CREATE_MESSAGE_FAILURE = "CREATE_MESSAGE_FAILURE";

// Messages
export const messages = () => async (dispatch, getState) => {
  try {
    dispatch({ type: MESSAGES });
    const payload = await api.messages();
    dispatch({ type: MESSAGES_SUCCESS, payload });
  } catch (err) {
    dispatch({
      type: MESSAGES_FAILURE,
      payload: err.message,
    });
  }
};

// Create Message
export const createMessage = (text) => async (dispatch, getState) => {
  try {
    dispatch({ type: CREATE_MESSAGE });
    const payload = await api.createMessage(text);
    // ℹ️ℹ️This is how you woud debug the response to a requestℹ️ℹ️
    dispatch({ type: CREATE_MESSAGE_SUCCESS, payload });
  } catch (err) {
    dispatch({
      type: CREATE_MESSAGE_FAILURE,
      payload: err.message,
    });
  }
};

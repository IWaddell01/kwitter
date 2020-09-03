// TODO: implement

import { MESSAGES, MESSAGES_SUCCESS, MESSAGES_FAILURE } from "../actions";

// INITIAL STATE
const INITIAL_STATE = {
  isAuthenticated: "",
  username: "",
  loading: false,
  error: "",
};

export const messagesReducer = (state = { ...INITIAL_STATE }, action) => {
  switch (action.type) {
    case MESSAGES:
      return {
        ...INITIAL_STATE,
        loading: true,
      };
    case MESSAGES_SUCCESS:
      const { username, token } = action.payload;
      return {
        ...INITIAL_STATE,
        isAuthenticated: token,
        username,
        loading: false,
      };
    case MESSAGES_FAILURE:
      return {
        ...INITIAL_STATE,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
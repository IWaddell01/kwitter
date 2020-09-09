import { MESSAGES, MESSAGES_SUCCESS, MESSAGES_FAILURE } from "../actions";

const INITIAL_STATE = {
  loading: false,
  message: null,
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
      return {
        ...INITIAL_STATE,
        loading: false,
        message: action.payload,
        error: "",
      };
    case MESSAGES_FAILURE:
      return {
        ...INITIAL_STATE,
        loading: false,
        message: null,
        error: action.payload,
      };

    default:
      return state;
  }
};

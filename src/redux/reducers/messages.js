import {
  MESSAGES,
  MESSAGES_SUCCESS,
  MESSAGES_FAILURE,
  CREATE_MESSAGE,
  CREATE_MESSAGE_SUCCESS,
  CREATE_MESSAGE_FAILURE,
} from "../actions";

const INITIAL_STATE = {
  loading: false,
  message: null,
  text: null,
  error: "",
};

// Message Feed
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

// Create Message
export const createMessage = (state = { ...INITIAL_STATE }, action) => {
  switch (action.type) {
    case CREATE_MESSAGE:
      return {
        ...INITIAL_STATE,
        loading: true,
      };
    case CREATE_MESSAGE_SUCCESS:
      const { text } = action.payload;
      return {
        ...INITIAL_STATE,
        text: text,
        loading: false,
      };
    case CREATE_MESSAGE_FAILURE:
      return {
        ...INITIAL_STATE,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

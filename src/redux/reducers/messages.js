import {
  MESSAGES,
  MESSAGE_FEED_SUCCESS,
  MESSAGE_FEED_FAILURE,
} from "../actions";

const INITIAL_STATE = {
  messages: [],
  count: 0,
  statusCode: 0,
  loading: false,
  errors: "",
};

export const messagesReducer = (state = { ...INITIAL_STATE }, action) => {
  switch (action.type) {
    case MESSAGES:
      return {
        ...INITIAL_STATE,
        loading: true,
      };

    case MESSAGE_FEED_SUCCESS:
      return {
        ...INITIAL_STATE,
        meesages: action.payload,
        count: 0,
        statusCode: 0,
        loading: false,
      };

    case MESSAGE_FEED_FAILURE:
      return {
        ...INITIAL_STATE,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

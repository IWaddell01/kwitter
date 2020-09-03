import {
  MESSAGES_FEED,
  MESSAGES_FEED_SUCCESS,
  MESSAGES_FEED_FAILURE,
} from "../actions";

// INITIAL STATE
const INITIAL_STATE = {
  id: 0,
  text: "",
  username: "",
  createdAt: "",
  likes: [],
  loading: false,
};

export const messagedFeedReducer = (state = { ...INITIAL_STATE }, action) => {
  switch (action.type) {
    case MESSAGES_FEED:
      return {
        ...INITIAL_STATE,
        loading: true,
      };
    case MESSAGES_FEED_SUCCESS:
      const { id, text, username, createdAt, likes } = action.payload;
      return {
        ...INITIAL_STATE,
        id,
        text,
        username,
        createdAt,
        likes,
        loading: false,
      };
    case MESSAGES_FEED_FAILURE:
      return {
        ...INITIAL_STATE,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

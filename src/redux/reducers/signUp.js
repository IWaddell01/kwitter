import { SIGN_UP, SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from "../actions";

// INITIAL STATE
const INITIAL_STATE = {
  isAuthenticated: "",
  username: "",
  loading: false,
  error: "",
};

export const signUpReducer = (state = { ...INITIAL_STATE }, action) => {
  switch (action.type) {
    case SIGN_UP:
      return {
        ...INITIAL_STATE,
        loading: true,
      };
    case SIGN_UP_SUCCESS:
      const { username, token } = action.payload;
      return {
        ...INITIAL_STATE,
        isAuthenticated: token,
        username,
        loading: false,
      };
    case SIGN_UP_FAILURE:
      return {
        ...INITIAL_STATE,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

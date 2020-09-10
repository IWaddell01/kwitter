import { USERNAME, USERNAME_SUCCESS, USERNAME_FAILURE } from "../actions";

const INITIAL_STATE = {
  loading: false,
  user: null,
  error: "",
};

export const usernameReducer = (state = { ...INITIAL_STATE }, action) => {
  switch (action.type) {
    case USERNAME:
      return {
        ...INITIAL_STATE,
        loading: true,
      };
    case USERNAME_SUCCESS:
      return {
        ...INITIAL_STATE,
        loading: false,
        user: action.payload,
        error: "",
      };
    case USERNAME_FAILURE:
      return {
        ...INITIAL_STATE,
        loading: false,
        user: null,
        error: action.payload,
      };

    default:
      return state;
  }
};

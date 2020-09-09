import { USERNAME, USERNAME_SUCCESS, USERNAME_FAILURE } from "../actions";

const INITIAL_STATE = {
  username: "",
  loading: false,
  errors: "",
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
        username: action.payload,
        loading: false,
      };

    case USERNAME_FAILURE:
      return {
        ...INITIAL_STATE,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

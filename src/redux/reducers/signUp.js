// TODO: implement in screens/user view

import {
  CREATE_NEW_USER,
  CREATE_NEW_USER_SUCCESS,
  CREATE_NEW_USER_FAILURE,
} from "../actions";

// INITIAL STATE
const INITIAL_STATE = {
  isAuthenticated: "",
  username: "",
  loading: false,
  error: "",
};

export const signUpReducer = (state = { ...INITIAL_STATE }, action) => {
  switch (action.type) {
    case CREATE_NEW_USER:
      return {
        ...INITIAL_STATE,
        loading: true,
      };
    case CREATE_NEW_USER_SUCCESS:
      const { username, token } = action.payload;
      return {
        ...INITIAL_STATE,
        isAuthenticated: token,
        username,
        loading: false,
      };
    case CREATE_NEW_USER_FAILURE:
      return {
        ...INITIAL_STATE,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

import { USERS, USERS_SUCCESS, USERS_FAILURE } from "../actions";
import { actions } from "./../actions/auth";

const INITIAL_STATE = {
  users: [],
  loading: false,
  errors: "",
};

export const usersReducer = (state = { ...INITIAL_STATE }, action) => {
  switch (action.type) {
    case USERS:
      return {
        ...INITIAL_STATE,
        loading: true,
      };

    case USERS_SUCCESS:
      return {
        ...INITIAL_STATE,
        users: action.payload,
        loading: false,
      };

    case USERS_FAILURE:
      return {
        ...INITIAL_STATE,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

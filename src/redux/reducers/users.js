import { USERS, USERS_SUCCESS, USERS_FAILURE } from "../actions";

const INITIAL_STATE = {
  users: [],
  count: 0,
  statusCode: 0,
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
        count: 0,
        statusCode: 0,
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

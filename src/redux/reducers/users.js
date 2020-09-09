import { USERS, USERS_SUCCESS, USERS_FAILURE } from "../actions";

const INITIAL_STATE = {
  loading: false,
  users: [],
  error: ''
};

export const usersReducer = (state = { ...INITIAL_STATE }, action) => {
  switch (action.type) {
    case USERS:
      return{
          ...INITIAL_STATE,
          loading: true
      }
    case USERS_SUCCESS:
      return {
        ...INITIAL_STATE,
        loading: false,
        users: action.payload,
        error: ''
      };

    case USERS_FAILURE:
      return {
        ...INITIAL_STATE,
        loading: false,
        users: [],
        error: action.payload
      };

    default:
      return state;
  }
};

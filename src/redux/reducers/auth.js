import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_GOOGLE,
  LOGIN_GOOGLE_SUCCESS,
  LOGIN_GOOGLE_FAILURE,
  LOGOUT,
  SIGN_UP,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
} from "../actions";

// INITIAL STATE
const INITIAL_STATE = {
  isAuthenticated: "",
  username: "",
  loading: false,
  error: "",
};

export const authReducer = (state = { ...INITIAL_STATE }, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...INITIAL_STATE,
        loading: true,
      };
    case LOGIN_SUCCESS:
      const { username, token } = action.payload;
      return {
        ...INITIAL_STATE,
        isAuthenticated: token,
        username,
        loading: false,
      };
    case LOGIN_FAILURE:
      return {
        ...INITIAL_STATE,
        error: action.payload,
        loading: false,
      };

    case LOGIN_GOOGLE:
      return {
        ...INITIAL_STATE,
        loading: true,
      };
    case LOGIN_GOOGLE_SUCCESS:
      return {
        ...INITIAL_STATE,
        isAuthenticated: action.payload,
        loading: false,
      };
    case LOGIN_GOOGLE_FAILURE:
      return {
        ...INITIAL_STATE,
        error: action.payload,
        loading: false,
      };

    case LOGOUT:
      return {
        ...INITIAL_STATE,
      };
    default:
      return state;
  }
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

import api from "../../utils/api";

// AUTH CONSTANTS LOGIN / LOGOUT
export const LOGIN = "AUTH/LOGIN";
export const LOGIN_SUCCESS = "AUTH/LOGIN_SUCCESS";
export const LOGIN_FAILURE = "AUTH/LOGIN_FAILURE";
export const LOGOUT = "AUTH/LOGOUT";

// AUTH CONSTANTS SIGNUP
export const SIGN_UP = "AUTH/SIGN_UP";
export const SIGN_UP_SUCCESS = "AUTH/SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "AUTH/SIGN_UP_FAILURE";

/*
 AUTH ACTIONS (this is a thunk....)
 THUNKS: --> https://github.com/reduxjs/redux-thunk#whats-a-thunk
 If you need access to your store you may call getState()
*/
// Login
const login = (credentials) => async (dispatch, getState) => {
  try {
    dispatch({ type: LOGIN });
    const payload = await api.login(credentials);
    // ℹ️ℹ️This is how you woud debug the response to a requestℹ️ℹ️
    dispatch({ type: LOGIN_SUCCESS, payload });
  } catch (err) {
    dispatch({
      type: LOGIN_FAILURE,
      payload: err.message,
    });
  }
};

// Logout
const logout = () => async (dispatch, getState) => {
  try {
    // We do not care about the result of logging out
    // as long as it succeeds
    await api.logout();
  } finally {
    /**
     * Let the reducer know that we are logged out
     */
    dispatch({ type: LOGOUT });
  }
};

// Sign Up
const signUp = (credentials) => async (dispatch, getState) => {
  try {
    dispatch({ type: SIGN_UP });
    const payload = await api.signUp(credentials);
    // ℹ️ℹ️This is how you woud debug the response to a requestℹ️ℹ️
    dispatch({ type: SIGN_UP_SUCCESS, payload });
  } catch (err) {
    dispatch({
      type: SIGN_UP_FAILURE,
      payload: err.message,
    });
  }
};

// END AUTH ACTIONS
export const actions = {
  login,
  logout,
  signUp,
};

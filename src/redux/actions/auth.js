import api from "../../utils/api";

// AUTH CONSTANTS
export const LOGIN = "AUTH/LOGIN";
export const LOGIN_SUCCESS = "AUTH/LOGIN_SUCCESS";
export const LOGIN_FAILURE = "AUTH/LOGIN_FAILURE";
export const LOGOUT = "AUTH/LOGOUT";

export const CREATE_NEW_USER = "AUTH/CREATE_NEW_USER";
export const CREATE_NEW_USER_SUCCESS = "AUTH/CREATE_NEW_USER_SUCCESS";
export const CREATE_NEW_USER_FAILURE = "AUTH/CREATE_NEW_USER_FAILURE";

/*
 AUTH ACTIONS (this is a thunk....)
 THUNKS: --> https://github.com/reduxjs/redux-thunk#whats-a-thunk
 If you need access to your store you may call getState()
*/
// login
const login = (credentials) => async (dispatch, getState) => {
  try {
    dispatch({ type: LOGIN });
    const payload = await api.login(credentials);
    // ℹ️ℹ️This is how you woud debug the response to a requestℹ️ℹ️
    // console.log({ result })
    dispatch({ type: LOGIN_SUCCESS, payload });
  } catch (err) {
    dispatch({
      type: LOGIN_FAILURE,
      payload: err.message,
    });
  }
};

// logout
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

// create new user
const createNewUser = (credentials) => async (dispatch, getState) => {
  try {
    dispatch({ type: CREATE_NEW_USER });
    const payload = await api.createNewUser(credentials);
    // ℹ️ℹ️This is how you woud debug the response to a requestℹ️ℹ️
    // console.log({ result })
    dispatch({ type: CREATE_NEW_USER_SUCCESS, payload });
  } catch (err) {
    dispatch({
      type: CREATE_NEW_USER_FAILURE,
      payload: err.message,
    });
  }
};

// Example Auth Call connection from exampleSomething in api.js

// const exampleSomething = (data) => async (dispatch, getState) => {
//   try {
//     dispatch({ type: LOGIN });
//     const payload = await api.exampleSomething(data);
//     // This is how you woud debug the response to a request
//     // console.log({ result })
//     dispatch({ type: LOGIN_SUCCESS, payload });
//   } catch (err) {
//     dispatch({
//       type: LOGIN_FAILURE,
//       payload: err.message,
//     });
//   }
// };
//
// END AUTH ACTIONS

export const actions = {
  login,
  logout,
};

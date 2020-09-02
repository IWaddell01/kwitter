import api from "../../utils/api";

// AUTH CONSTANTS
export const SIGN_UP = "AUTH/SIGN_UP";
export const SIGN_UP_SUCCESS = "AUTH/SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "AUTH/SIGN_UP_FAILURE";

/*
 AUTH ACTIONS (this is a thunk....)
 THUNKS: --> https://github.com/reduxjs/redux-thunk#whats-a-thunk
 If you need access to your store you may call getState()
*/

// sign up
const signUp = (credentials) => async (dispatch, getState) => {
  try {
    dispatch({ type: SIGN_UP });
    const payload = await api.signUp(credentials);
    // ℹ️ℹ️This is how you woud debug the response to a requestℹ️ℹ️
    // console.log({ result })
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
  signUp,
};

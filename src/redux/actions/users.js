import api from "../../utils/api";

// AUTH CONSTANTS
export const CREATE_NEW_USER = "AUTH/CREATE_NEW_USER";
export const CREATE_NEW_USER_SUCCESS = "AUTH/CREATE_NEW_USER_SUCCESS";
export const CREATE_NEW_USER_FAILURE = "AUTH/CREATE_NEW_USER_FAILURE";

/*
 AUTH ACTIONS (this is a thunk....)
 THUNKS: --> https://github.com/reduxjs/redux-thunk#whats-a-thunk
 If you need access to your store you may call getState()
*/

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

// END AUTH ACTIONS

export const actions = {
  createNewUser,
};

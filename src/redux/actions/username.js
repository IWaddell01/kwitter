import api from "../../utils/api";
import { actions } from "./auth"
export const USERNAME = "USERNAME";
export const USERNAME_SUCCESS = "USERNAME_SUCCESS";
export const USERNAME_FAILURE = "USERNAME_FAILURE";
export const DELETE_USER = "DELETE_USER";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAILURE = "DELETE_USER_FAILURE";

export const username = () => async (dispatch, getState) => {
  // console.log("hello");
  try {
    const username = getState().auth.username;
    // console.log(username);
    dispatch({ type: USERNAME });
    const payload = await api.username(username);
    dispatch({ type: USERNAME_SUCCESS, payload });
  } catch (err) {
    dispatch({
      type: USERNAME_FAILURE,
      payload: err.message,
    });
  }
};

export const delUser = () => async (dispatch, getState) => {
  try {
    const username = getState().auth.username;
    dispatch({ type: DELETE_USER});
    const payload = await api.delUser(username);
    dispatch({ type: DELETE_USER_SUCCESS, payload});
  } catch (err) {
    dispatch({ type: DELETE_USER_FAILURE, payload: err.message})
  }
}
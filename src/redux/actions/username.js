import api from "../../utils/api";

export const USERNAME = "USERNAME";
export const USERNAME_SUCCESS = "USERNAME_SUCCESS";
export const USERNAME_FAILURE = "USERNAME_FAILURE";

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

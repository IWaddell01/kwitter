import api from "../../utils/api";

export const USERNAME = "USERNAME";
export const USERNAME_SUCCESS = "USERNAME_SUCCESS";
export const USERNAME_FAILURE = "USERNAME_FAILURE";

export const messages = () => async (dispatch, getState) => {
  try {
    dispatch({ type: USERNAME });
    const payload = await api.messages();
    dispatch({ type: USERNAME_SUCCESS, payload });
  } catch (err) {
    dispatch({
      type: USERNAME_FAILURE,
      payload: err.message,
    });
  }
};

export const actions = {
  messages,
};

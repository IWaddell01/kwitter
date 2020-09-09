import api from "../../utils/api";

export const MESSAGES = "MESSAGES";
export const MESSAGES_SUCCESS = "MESSAGES_SUCCESS";
export const MESSAGES_FAILURE = "MESSAGES_FAILURE";

export const messages = () => async (dispatch, getState) => {
  try {
    dispatch({ type: MESSAGES });
    const payload = await api.messages();
    dispatch({ type: MESSAGES_SUCCESS, payload });
  } catch (err) {
    dispatch({
      type: MESSAGES_FAILURE,
      payload: err.message,
    });
  }
};

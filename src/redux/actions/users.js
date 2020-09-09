import api from "../../utils/api";

export const USERS = "USERS";
export const USERS_SUCCESS = "USERS_SUCCESS";
export const USERS_FAILURE = "USERS_FAILURE";

export const users = () => async (dispatch, getState) => {
  try {
    dispatch({ type: USERS });
    const payload = await api.users();
    dispatch({ type: USERS_SUCCESS, payload });
  } catch (err) {
    dispatch({
      type: USERS_FAILURE,
      payload: err.message,
    });
  }
};

export const actions = {
  users,
};

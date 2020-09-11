import api from "../../utils/api";

export const UPDATE_PROFILE = "UPDATE_PROFILE";
export const UPDATE_PROFILE_SUCCESS = "UPDATE_PROFILE_SUCCESS";
export const UPDATE_PROFILE_FAILURE = "UPDATE_PROFILE_FAILURE";

export const updateProfile = (credentials) => async (dispatch, getState) => {
  try {
    const username = getState().auth.username;
    dispatch({ type: UPDATE_PROFILE });
    const payload = await api.updateProfile(credentials, username);
    // ℹ️ℹ️This is how you woud debug the response to a requestℹ️ℹ️
    dispatch({ type: UPDATE_PROFILE_SUCCESS, payload });
  } catch (err) {
    dispatch({
      type: UPDATE_PROFILE_FAILURE,
      payload: err.message,
    });
  }
};

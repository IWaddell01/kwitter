import api from "../../utils/api";

export const MESSAGES = 'MESSAGES'
export const MESSAGE_FEED_SUCCESS = 'MESSAGE_FEED_SUCCESS'
export const MESSAGE_FEED_FAILURE = 'MESSAGE_FEED_FAILURE'

export const messages = () => async (dispatch, getState) => {
  try {
    dispatch({type: MESSAGES})
    const payload = await api.messages();
    dispatch({ type: MESSAGE_FEED_SUCCESS, payload });
  } catch (err) {
    dispatch({
      type: MESSAGE_FEED_FAILURE,
      payload: err.message,
    })
  }
};


export const actions = {
  messages,
};

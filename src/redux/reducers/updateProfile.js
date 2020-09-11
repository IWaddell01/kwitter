import {
  UPDATE_PROFILE,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILURE,
} from "../actions";

const INITIAL_STATE = {
  password: "",
  about: "",
  displayname: "",
  loading: false,
  error: "",
};

export const updateProfileReducer = (state = { ...INITIAL_STATE }, action) => {
  switch (action.type) {
    case UPDATE_PROFILE:
      return {
        ...INITIAL_STATE,
        loading: true,
      };
    case UPDATE_PROFILE_SUCCESS:
      const { password, about, displayname } = action.payload;
      return {
        ...INITIAL_STATE,
        password,
        about,
        displayname,
        loading: false,
      };
    case UPDATE_PROFILE_FAILURE:
      return {
        ...INITIAL_STATE,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

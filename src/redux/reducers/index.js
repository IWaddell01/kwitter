import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { usersReducer } from "./users";
import { usernameReducer, delUserReducer } from "./username";
import { messagesReducer } from "./messages";
import { updateProfileReducer } from "./updateProfile";

export default combineReducers({
  auth: authReducer,
  users: usersReducer,
  messages: messagesReducer,
  userInfo: usernameReducer,
  updateProfile: updateProfileReducer,
  deleteUser: delUserReducer,
});

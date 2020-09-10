import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { usersReducer } from "./users";
import { usernameReducer } from "./username";
import { messagesReducer } from "./messages";

export default combineReducers({
  auth: authReducer,
  users: usersReducer,
  messages: messagesReducer,
  userInfo: usernameReducer,
});

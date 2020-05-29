import { combineReducers } from "redux";
import usersReducers from "./userReducers";
import authReucer from "./authReducer";

export default combineReducers({
  users: usersReducers,
  auth: authReucer,
});

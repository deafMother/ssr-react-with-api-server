import { CHECK_USERS_LOGIN } from "../actions";

export default (state = null, action) => {
  switch (action.type) {
    case CHECK_USERS_LOGIN:
      return action.payload;

    default:
      return state;
  }
};

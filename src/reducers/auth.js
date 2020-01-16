import { TOGGLE_AUTH } from "../actions/action-types.js";

const authState = {
  loggedIn: false
};

const AuthReducer = (state = authState, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return { ...state, loggedIn: true };
    case "SIGN_OUT":
      return { ...state, loggedIn: false };
    case TOGGLE_AUTH:
      return { ...state, loggedIn: !state.loggedIn };
    default:
      return { ...state };
  }
};

export default AuthReducer;

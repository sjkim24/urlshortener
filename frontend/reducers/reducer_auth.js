import { SET_AUTH_TOKEN } from "../actions/action_auth";

const INITIAL_STATE = { authToken: "" };

export default function(state = INITIAL_STATE, action) {
  Object.freeze(state);
  switch(action.type) {
    case SET_AUTH_TOKEN:
      return { authToken: action.payload };
    default:
      return state;
  }
};
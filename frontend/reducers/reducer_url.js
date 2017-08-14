import { PROCESS_URL } from "../actions/action_url";

const INITIAL_STATE = { shortenedURL: null };

export default function(state = INITIAL_STATE, action) {
  Object.freeze(state);
  switch(action.type) {
    case PROCESS_URL:
      return { shortenedURL: action.payload };
    default:
      return state;
  }
};
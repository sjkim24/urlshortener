import { PROCESS_URL } from "../actions/action_url";

const INITIAL_STATE = { shortUrl: null };

export default function(state = INITIAL_STATE, action) {
  Object.freeze(state);
  switch(action.type) {
    case PROCESS_URL:
      return { shortUrl: action.payload.data.shortUrl };
    default:
      return state;
  }
};
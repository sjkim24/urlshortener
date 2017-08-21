import { PROCESS_URL, GET_TOP_HUNDRED_URLS } from "../actions/action_url";

const INITIAL_STATE = { shortUrl: null, topHundredUrls: null };

export default function(state = INITIAL_STATE, action) {
  Object.freeze(state);
  switch(action.type) {
    case PROCESS_URL:
      return { ...state, shortUrl: action.payload.data.shortUrl };
    case GET_TOP_HUNDRED_URLS:
      return  {...state, topHundredUrls: action.payload.data }
    default:
      return state;
  }
};
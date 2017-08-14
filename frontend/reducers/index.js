import { combineReducers } from "redux";
import UrlReducer from "./reducer_url";

const rootReducer = combineReducers({
  url: UrlReducer
});

export default rootReducer;
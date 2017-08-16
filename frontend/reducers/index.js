import { combineReducers } from "redux";
import UrlReducer from "./reducer_url";
import AuthReducer from "./reducer_auth";

const rootReducer = combineReducers({
  url: UrlReducer,
  auth: AuthReducer
});

export default rootReducer;
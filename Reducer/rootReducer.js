import { combineReducers } from "redux";
import { nextPageReducer } from "./nextPageReducer";
import { RecommendationReducer } from "./RecommendationReducer";

export default combineReducers({
 
  nextPageReducer,
  RecommendationReducer
});

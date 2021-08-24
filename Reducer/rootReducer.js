import { combineReducers } from "Redux";
import { nextPageReducer } from "./nextPageReducer";
import { RecommendationReducer } from "./RecommendationReducer";

export default combineReducers({
 
  nextPageReducer,
  RecommendationReducer
});

import { SET_MODAL_FLAG } from "../action/actionTypes";
import { SET_NO_PRODUCT_MODAL_FLAG } from "../action/actionTypes";

const initialState = {
  modalFlag: false,
  noProductModalFlag: false,
};

export function RecommendationReducer(state = initialState, action) {
  switch (action.type) {
    case SET_MODAL_FLAG:
      return {
        ...state,
        modalFlag: action.data
      };
      case SET_NO_PRODUCT_MODAL_FLAG:
      return {
        ...state,
        noProductModalFlag: action.data
      };
    default:
      return state;
  }
}
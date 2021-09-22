import { SET_NEXT_PAGE,
         SET_PRODUCT_RESULT,
         SET_ANSWERS_CHOSEN,
         SET_SUB_ANSWER_CHOSEN } from "../action/actionTypes";

const initialState = {
  selectedNextPage: "BusinessType",
  productResult: [],
  answersChosen: [],
  subAnswerChosen: '',
};

export function nextPageReducer(state = initialState, action) {
  switch (action.type) {
    case SET_NEXT_PAGE:
      return {
        ...state,
        selectedNextPage: action.data
      };
    case SET_PRODUCT_RESULT:
      return {
        ...state,
        productResult: action.productResult,
      };
    case SET_ANSWERS_CHOSEN:
      return {
        ...state,
        answersChosen: action.answersChosen,
      };
      case SET_SUB_ANSWER_CHOSEN:
      return {
        ...state,
        subAnswerChosen: action.subAnswerChosen,
      };
    default:
      return state;
  }
}

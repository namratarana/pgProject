
import { SET_NEXT_PAGE,
         SET_PRODUCT_RESULT,
         SET_ANSWERS_CHOSEN,
         SET_SUB_ANSWER_CHOSEN,
         } from "./actionTypes";

export const setNextPage = data => {
  return {
    type: SET_NEXT_PAGE,
    data
  };
};

export const setProductResult = (productResult) => {
  return {
      type: SET_PRODUCT_RESULT,
      productResult
  }
}

export const setAnswersChosen = (answersChosen) => {
  return {
      type: SET_ANSWERS_CHOSEN,
      answersChosen
  }
}

export const setSubAnswerChosen = (subAnswerChosen) => {
  return {
      type: SET_SUB_ANSWER_CHOSEN,
      subAnswerChosen
  }
}

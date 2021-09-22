import { SET_MODAL_FLAG } from "./actionTypes";
import { SET_NO_PRODUCT_MODAL_FLAG } from "./actionTypes";

export const setModalFlag= data => {
  return {
    type: SET_MODAL_FLAG,
    data
  };
};

export const setNoProductModalFlag= data => {
  return {
    type: SET_NO_PRODUCT_MODAL_FLAG,
    data
  };
};
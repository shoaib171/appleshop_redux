/** @format */

export const ADD_ITEM = (Products) => {
  return {
    type: "ADD_ITEM",
    payload: Products,
  };
};
export const DELETE_ITEM = (Products) => {
  return {
    type: "DELETE_ITEM",
    payload: Products,
  };
};

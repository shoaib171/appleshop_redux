/** @format */

const InitialValue = [];
const HandleReducers = (state = InitialValue, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];

    case "DELETE_ITEM":
      return (state = state.filter((x) => {
        return x.id !== action.payload.id;
      }));
    default:
      return state;
  }
};
export default HandleReducers;

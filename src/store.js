/** @format */

import { createStore } from "redux";
import RootReducers from "./Redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "persist-store",
  storage,
};
const persistReducers = persistReducer(persistConfig, RootReducers);

const store = createStore(
  persistReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export const perStore = persistStore(store);
export default store;

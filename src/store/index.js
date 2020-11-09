import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { wordsKeeperReducer } from "../reducers";
import { loadStore, saveStore } from "../storage";

const rootReducer = combineReducers({
  wordsKeeperReducer,
});

const store = createStore(
  rootReducer,
  loadStore(),
  compose(applyMiddleware(thunk))
);

store.subscribe(() => {
  saveStore(store.getState());
});

export default store;

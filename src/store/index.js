import { createStore, applyMiddleware } from "redux";
import allReducers from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

var logger = createLogger();
const store = createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

export default store;

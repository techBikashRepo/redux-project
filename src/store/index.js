import { createStore, applyMiddleware } from "redux";
import allReducers from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import * as actionTypes from "../constants/action-types";
import { v1 as uuid } from "uuid";

var logger = createLogger({
  predicate: (getState, action) => {
    return process.env.REACT_APP_ENVIRONMENT === "development";
  },
});

//Custom Middleware
// const myLogger = (store) => (next) => (action) => {
//   console.log(store);
//   console.log(next);
//   console.log(action);
// if (action.type === actionTypes.CREATE_TASKS_REQUEST) {
//   action.payload.id = uuid();
// }
//   next(action);
// };
const store = createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

export default store;

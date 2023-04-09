import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

// Default State
var defaultState = 0;

// Action_Types
const DEPOSIT = "DEPOSIT";
const WITHDRAW = "WITHDRAW";

// Reducers
const balanceReducer = (state = defaultState, action) => {
  console.log("Reducer Invoked..", action);
  switch (action.type) {
    case DEPOSIT:
      return state + action.payload.amount;

    case WITHDRAW:
      return state - action.payload.amount;

    default:
      return state;
  }
};

// Store
const store = createStore(balanceReducer, composeWithDevTools());
store.subscribe(() => {
  console.log(store.getState());
});

// Dispatch

store.dispatch({ type: DEPOSIT, payload: { amount: 500 } });

store.dispatch({ type: DEPOSIT, payload: { amount: 1000 } });

store.dispatch({ type: WITHDRAW, payload: { amount: 200 } });

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

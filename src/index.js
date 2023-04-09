import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";

// Default State
var defaultState = 0;

// Reducers
const balanceReducer = (state = defaultState, action) => {
  console.log("Reducer Invoked..", action);
  switch (action.type) {
    case "DEPOSIT":
      return state + 100;

    case "WITHDRAW":
      return state - 100;

    default:
      return state;
  }
};

// Store
const store = createStore(balanceReducer);
console.log(store.getState());

// Dispatch
store.dispatch({ type: "abc" });
console.log(store.getState());

store.dispatch({ type: "DEPOSIT" });
console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

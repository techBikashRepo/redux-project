// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import { createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";

// // Default State
// var defaultState = 0;

// // Action_Types
// const DEPOSIT = "DEPOSIT";
// const WITHDRAW = "WITHDRAW";

// // Actions Creators
// const depositAction = (amount) => {
//   return {
//     type: DEPOSIT,
//     payload: { amount: amount },
//   };
// };

// const withdrawAction = (amount) => {
//   return {
//     type: WITHDRAW,
//     payload: { amount: amount },
//   };
// };

// // Reducers
// const balanceReducer = (state = defaultState, action) => {
//   console.log("Reducer Invoked..", action);
//   switch (action.type) {
//     case DEPOSIT:
//       return state + action.payload.amount;

//     case WITHDRAW:
//       return state - action.payload.amount;

//     default:
//       return state;
//   }
// };

// // Store
// const store = createStore(balanceReducer, composeWithDevTools());
// store.subscribe(() => {
//   console.log(store.getState());
// });

// // Dispatch

// store.dispatch(depositAction(1000));

// store.dispatch(depositAction(2000));

// store.dispatch(withdrawAction(500));

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// reportWebVitals();

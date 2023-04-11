import React from "react";
import Tasks from "./components/Tasks/Tasks";
import store from "./store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <Tasks />
    </Provider>
  );
};

export default App;

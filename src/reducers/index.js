import { tasksReducer } from "./task-reducers";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  tasks: tasksReducer,
});

export default allReducers;

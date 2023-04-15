import { initialTasks } from "../data/tasks";
import * as actionTypes from "../constants/action-types";

let initialState = {
  data: initialTasks,
  loading: false,
  error: "",
};
//reducer is a function that receives an action and returns new state.
export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_TASKS_REQUEST:
      return {
        data: [],
        loading: true,
        error: "",
      };

    case actionTypes.FETCH_TASKS_SUCCESS:
      return {
        data: action.payload,
        loading: false,
        error: "",
      };

    case actionTypes.FETCH_TASKS_ERROR:
      return {
        data: state,
        loading: false,
        error: action.payload,
      };

    case actionTypes.CREATE_TASKS_REQUEST:
      return {
        data: state.data,
        loading: true,
        error: "",
      };

    case actionTypes.CREATE_TASKS_SUCCESS:
      return {
        data: [...state.data, action.payload],
        loading: false,
        error: "",
      };

    case actionTypes.CREATE_TASKS_ERROR:
      return {
        data: [...state.data],
        loading: false,
        error: action.payload,
      };

    case actionTypes.DELETE_TASK_REQUEST:
      //return state.filter((task) => task.id !== action.payload);
      return {
        data: [...state.data],
        loading: true,
        error: "",
      };

    case actionTypes.DELETE_TASK_SUCCESS:
      return {
        data: state.data.filter((task) => task.id !== action.payload),
        loading: false,
        error: "",
      };

    case actionTypes.DELETE_TASK_ERROR:
      return {
        data: [...state.data],
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

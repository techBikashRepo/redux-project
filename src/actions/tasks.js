import * as actionTypes from "../constants/action-types";
import axios from "axios";

export const fetchTasks = () => async (dispatch, getState) => {
  var tasksResponse = await axios.get("http://localhost:5000/tasks");
  dispatch({
    type: actionTypes.FETCH_TASKS,
    payload: tasksResponse.data,
  });
};

//Action Creators
export const createTask = (newTask) => {
  return {
    type: actionTypes.CREATE_TASK,
    payload: newTask,
  };
};

export const deleteTask = (taskId) => {
  return {
    type: actionTypes.DELETE_TASK,
    payload: taskId,
  };
};

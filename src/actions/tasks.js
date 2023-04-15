import * as actionTypes from "../constants/action-types";
import axios from "axios";

export const fetchTasks = () => async (dispatch) => {
  dispatch({ type: actionTypes.FETCH_TASKS_REQUEST });

  try {
    var tasksResponse = await axios.get("http://localhost:5000/tasks");
    dispatch({
      type: actionTypes.FETCH_TASKS_SUCCESS,
      payload: tasksResponse.data,
    });
  } catch (err) {
    dispatch({
      type: actionTypes.FETCH_TASKS_ERROR,
      payload: err,
    });
  }
};

export const createTask = (newTask) => async (dispatch) => {
  dispatch({ type: actionTypes.CREATE_TASKS_REQUEST, payload: newTask });

  try {
    var tasksResponse = await axios.post(
      "http://localhost:5000/tasks",
      newTask
    );
    dispatch({
      type: actionTypes.CREATE_TASKS_SUCCESS,
      payload: tasksResponse.data,
    });
  } catch (err) {
    dispatch({
      type: actionTypes.CREATE_TASKS_ERROR,
      payload: err,
    });
  }
};

export const deleteTask = (taskId) => async (dispatch) => {
  dispatch({ type: actionTypes.DELETE_TASK_REQUEST });

  try {
    await axios.delete(`http://localhost:5000/tasks/${taskId}`);
    dispatch({
      type: actionTypes.DELETE_TASK_SUCCESS,
      payload: taskId,
    });
  } catch (err) {
    dispatch({
      type: actionTypes.DELETE_TASK_ERROR,
      payload: err,
    });
  }
};

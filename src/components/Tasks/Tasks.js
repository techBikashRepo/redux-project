import React, { useState, useEffect } from "react";
import "./Tasks.css";
import Collapsible from "../Collapsible/Collapsible";
import actions from "../../actions";
import { useSelector, useDispatch } from "react-redux";
import { toDisplayableDateFormat } from "../../utils";

const Tasks = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDateTime, setTaskDateTime] = useState("");
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchTasks());
  }, [dispatch]);

  const tasks = useSelector((state) => state.tasks);
  let filteredTasks = [];
  if (tasks && tasks.data.length > 0) {
    filteredTasks = tasks.data.filter(
      (task) => task.taskTitle.toLowerCase().indexOf(search.toLowerCase()) >= 0
    );
  }

  let [isNewTaskOpen, setIsNewTaskOpen] = useState(false);

  const onSaveClick = () => {
    dispatch(
      actions.createTask({
        id: Math.floor(Math.random() * 10000000),
        taskTitle: taskTitle,
        taskDateTime: taskDateTime,
      })
    );
    setTaskTitle("");
    setTaskDateTime("");
    setIsNewTaskOpen(!isNewTaskOpen);
  };

  const onDeleteClick = (task) => {
    if (window.confirm("Are you sure to delete the task?")) {
      dispatch(actions.deleteTask(task.id));
    }
  };

  const onCancelClick = () => {
    setIsNewTaskOpen(!isNewTaskOpen);
  };
  return (
    <div className="outer-container">
      <div className="container">
        <div className="app-title-container">
          <div className="app-title">
            <h1>
              Tasks
              {tasks.loading ? <i className="fa fa-spinner fa-spin"></i> : ""}
            </h1>
            {tasks.error ? <h2>{tasks.error.message}</h2> : ""}
          </div>
          <div className="create-button-container">
            {!isNewTaskOpen ? (
              <button
                className="button create-button"
                onClick={() => {
                  setIsNewTaskOpen(!isNewTaskOpen);
                }}
              >
                <i className="fa fa-calendar-plus"></i>
                &nbsp;Create
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
        <Collapsible isOpen={isNewTaskOpen}>
          <div className="new-task-container">
            <h4 className="new-task-title">New Task</h4>
            {/* Form group starts */}

            <div className="form-group">
              <label htmlFor="task-title" className="form-label">
                Title:
              </label>
              <div className="form-input">
                <input
                  type="text"
                  placeholder="Task Title"
                  className="text-box"
                  id="task-title"
                  value={taskTitle}
                  onChange={(event) => {
                    setTaskTitle(event.target.value);
                  }}
                />
              </div>
            </div>

            {/* Form group ends */}

            {/* Form group starts */}

            <div className="form-group">
              <label htmlFor="task-title" className="form-label">
                Task Date and Time:
              </label>
              <div className="form-input">
                <input
                  type="datetime-local"
                  placeholder="Task Date and Time"
                  className="text-box"
                  id="task-date-time"
                  value={taskDateTime}
                  onChange={(event) => {
                    setTaskDateTime(event.target.value);
                  }}
                />
              </div>
            </div>

            {/* Form group ends */}

            <div className="button-group">
              <button
                className="button save-button"
                onClick={() => {
                  onSaveClick();
                }}
              >
                <i className="fa fa-save"></i>
                &nbsp;&nbsp;Save Task
              </button>
              <button
                className="button cancel-button"
                onClick={() => {
                  onCancelClick();
                }}
              >
                <i className="fa fa-window-close"></i>
                &nbsp;&nbsp;Cancel Task
              </button>
            </div>
          </div>
        </Collapsible>
        <div className="search-box">
          <input
            type="search"
            placeholder="Search"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
          <i className="fa fa-search"></i>
        </div>

        <div className="content-body">
          {/* Tasks Starts */}
          {filteredTasks.map((task) => (
            <div className="task" key={task.id}>
              <div className="task-body">
                <div className="task-title">
                  <i className="fa fa-thumbtack"></i>
                  <span className="task-title-text">{task.taskTitle}</span>
                </div>
                <div className="task-subtitle">
                  <i className="fa fa-clock"></i>
                  <span className="task-subtitle-text">
                    {toDisplayableDateFormat(task.taskDateTime)}
                  </span>
                </div>
              </div>

              <div className="task-options">
                <button
                  className="icon-button"
                  title="Delete"
                  onClick={() => {
                    onDeleteClick(task);
                  }}
                >
                  &times;
                </button>
              </div>
            </div>
          ))}

          {/* Tasks Ends */}
        </div>
      </div>
    </div>
  );
};

export default Tasks;

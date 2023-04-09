import React, { useState } from "react";
import "./Tasks.css";
import Collapsible from "../Collapsible/Collapsible";

const Tasks = () => {
  let [isNewTaskOpen, setIsNewTaskOpen] = useState(false);

  const onSaveClick = () => {
    setIsNewTaskOpen(!isNewTaskOpen);
  };

  const onCancelClick = () => {
    setIsNewTaskOpen(!isNewTaskOpen);
  };
  return (
    <div className="outer-container">
      <div className="container">
        <div className="app-title-container">
          <div className="app-title">
            <h1>Tasks</h1>
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
          <input type="search" placeholder="Search" />
          <i className="fa fa-search"></i>
        </div>

        <div className="content-body">
          {/* Tasks Starts */}
          <div className="task">
            <div className="task-body">
              <div className="task-title">
                <i className="fa fa-thumbtack"></i>
                <span className="task-title-text">Doctor's Appointment</span>
              </div>
              <div className="task-subtitle">
                <i className="fa fa-clock"></i>
                <span className="task-subtitle-text">July 16th at 9:30 PM</span>
              </div>
            </div>

            <div className="task-options">
              <button className="icon-button" title="Delete">
                &times;
              </button>
            </div>
          </div>
          {/* Tasks Ends */}

          {/* Tasks Starts */}
          <div className="task">
            <div className="task-body">
              <div className="task-title">
                <i className="fa fa-thumbtack"></i>
                <span className="task-title-text">School's Appointment</span>
              </div>
              <div className="task-subtitle">
                <i className="fa fa-clock"></i>
                <span className="task-subtitle-text">June 17th at 8:30 AM</span>
              </div>
            </div>

            <div className="task-options">
              <button className="icon-button" title="Delete">
                &times;
              </button>
            </div>
          </div>
          {/* Tasks Ends */}
        </div>
      </div>
    </div>
  );
};

export default Tasks;

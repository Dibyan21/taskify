import React from "react";

function TaskDetails({ task }) {
  if (!task) return <p>Loading...</p>;

  return (
    <div className="task-details">
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>Priority: {task.priority}</p>
      <p>Status: {task.status}</p>
      <p>
        Due: {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : "N/A"}
      </p>
    </div>
  );
}

export default TaskDetails;

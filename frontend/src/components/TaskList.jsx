import React from "react";
import { Link } from "react-router-dom";

function TaskList({ tasks, onDelete }) {
  if (!tasks.length) return <p>No tasks found.</p>;

  return (
    <table className="task-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Priority</th>
          <th>Status</th>
          <th>Due Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr key={task._id}>
            <td>{task.title}</td>
            <td>{task.priority}</td>
            <td>{task.status}</td>
            <td>{task.dueDate ? new Date(task.dueDate).toLocaleDateString() : "-"}</td>
            <td>
              <Link to={`/tasks/${task._id}`}>Edit</Link>
              <button onClick={() => onDelete(task._id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TaskList;

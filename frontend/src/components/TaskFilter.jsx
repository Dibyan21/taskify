import React from "react";

function TaskFilter({ filters, onChange }) {
  return (
    <div className="filter">
      <select name="status" value={filters.status} onChange={onChange}>
        <option value="">All Status</option>
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
      </select>

      <select name="priority" value={filters.priority} onChange={onChange}>
        <option value="">All Priority</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
    </div>
  );
}

export default TaskFilter;

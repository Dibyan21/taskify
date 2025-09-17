import React, { useState, useEffect } from "react";

function TaskForm({ onSubmit, initialData }) {
  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "Low",
    status: "Pending",
  });

  useEffect(() => {
    if (initialData) setTask(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(task);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="Title"
        value={task.title}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={task.description}
        onChange={handleChange}
      />
      <input
        type="date"
        name="dueDate"
        value={task.dueDate ? task.dueDate.substring(0, 10) : ""}
        onChange={handleChange}
      />
      <select name="priority" value={task.priority} onChange={handleChange}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <select name="status" value={task.status} onChange={handleChange}>
        <option>Pending</option>
        <option>Completed</option>
      </select>
      <button type="submit">Save Task</button>
    </form>
  );
}

export default TaskForm;

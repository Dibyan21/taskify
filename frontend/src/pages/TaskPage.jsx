import React, { useEffect, useState } from "react";
import { getTasks, deleteTask } from "../api/taskApi";
import TaskList from "../components/TaskList";
import TaskFilter from "../components/TaskFilter";

function TaskPage() {
  const [tasks, setTasks] = useState([]);
  const [filters, setFilters] = useState({ status: "", priority: "" });

  const fetchTasks = async () => {
    const res = await getTasks();
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleDelete = async (id) => {
    await deleteTask(id);
    fetchTasks();
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filteredTasks = tasks.filter(
    (task) =>
      (filters.status === "" || task.status === filters.status) &&
      (filters.priority === "" || task.priority === filters.priority)
  );

  return (
    <div>
      <h1>All Tasks</h1>
      <TaskFilter filters={filters} onChange={handleFilterChange} />
      <TaskList tasks={filteredTasks} onDelete={handleDelete} />
    </div>
  );
}

export default TaskPage;

import React from "react";
import { useNavigate } from "react-router-dom";
import { createTask } from "../api/taskApi";
import TaskForm from "../components/TaskForm";

function NewTaskPage() {
  const navigate = useNavigate();

  const handleSubmit = async (task) => {
    await createTask(task);
    navigate("/");
  };

  return (
    <div>
      <h1>Add New Task</h1>
      <TaskForm onSubmit={handleSubmit} />
    </div>
  );
}

export default NewTaskPage;

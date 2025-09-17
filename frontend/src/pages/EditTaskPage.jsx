import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getTaskById, updateTask } from "../api/taskApi";
import TaskForm from "../components/TaskForm";

function EditTaskPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const fetchTask = async () => {
      const res = await getTaskById(id);
      setTask(res.data);
    };
    fetchTask();
  }, [id]);

  const handleSubmit = async (updatedTask) => {
    await updateTask(id, updatedTask);
    navigate("/");
  };

  return (
    <div>
      <h1>Edit Task</h1>
      {task && <TaskForm onSubmit={handleSubmit} initialData={task} />}
    </div>
  );
}

export default EditTaskPage;

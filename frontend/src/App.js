import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import TaskPage from "./pages/TaskPage";
import NewTaskPage from "./pages/NewTaskPage";
import EditTaskPage from "./pages/EditTaskPage";

function App() {
  return (
    <div className="container">
      <nav className="navbar">
        <Link to="/">All Tasks</Link>
        <Link to="/tasks/new">Add Task</Link>
      </nav>

      <Routes>
        <Route path="/" element={<TaskPage />} />
        <Route path="/tasks/new" element={<NewTaskPage />} />
        <Route path="/tasks/:id" element={<EditTaskPage />} />
      </Routes>
    </div>
  );
}

export default App;

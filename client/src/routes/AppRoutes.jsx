import { Routes, Route } from "react-router-dom";
import { RegisterPage, LoginPage } from "../pages";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home page</h1>} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/tasks" element={<h1>Tasks page</h1>} />
      <Route path="/task/:id" element={<h1>Task page</h1>} />
      <Route path="/add-task" element={<h1>Create task page</h1>} />
    </Routes>
  );
}

export default AppRoutes;

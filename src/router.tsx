import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./error-page";
import ProjectPage from "./pages/project.page";
import TaskPage from "./pages/task.page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/project/:id",
    element: <ProjectPage />,
  },

  {
    path: "/project/:id/task/:taskId",
    element: <TaskPage />,
  },

]);

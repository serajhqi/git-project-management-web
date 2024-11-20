import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./error-page";
import ProjectPage from "./pages/project.page";
import TaskPage from "./pages/task.page";
import ProjectsPage from "./pages/projects.page";
import DashboardPage from "./pages/dashboard.page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "/projects",
        element: <ProjectsPage />,
      },
      {
        path: "/projects/:id",
        element: <ProjectPage />,
      },

      {
        path: "/projects/:id/task/:taskId",
        element: <TaskPage />,
      },
    ]
  },



]);

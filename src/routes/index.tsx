import { createBrowserRouter, Navigate } from "react-router";
import { RouterProvider } from "react-router/dom";
import DashboardLayout from "@/layouts/DashboardLayout";
import ApplyJobOpeningPage from "@/pages/dashboard/ApplyJobOpening";
import DashboardPage from "@/pages/dashboard/Dashboard";
import JobDetails from "@/pages/dashboard/JobDetails";
import LoginPage from "@/pages/Login";
import NotFound from "@/pages/NotFound";
import RegisterPage from "@/pages/Register";
import { IsSignedInRoute } from "./IsSignedInRoute";
import { ProtectedRoute } from "./ProtectedRoutes";

const router = createBrowserRouter([
  { path: "*", element: <NotFound /> },
  { path: "/", element: <Navigate to="/dashboard" replace /> },
  {
    element: <IsSignedInRoute />,
    children: [
      {
        path: "/auth",
        children: [
          { index: true, element: <Navigate to="/login" replace /> },
          { path: "login", element: <LoginPage /> },
          { path: "register", element: <RegisterPage /> },
        ],
      },
    ],
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
          { index: true, element: <DashboardPage /> },
          {
            path: "manage-candidate",
            children: [
              { index: true, element: <Navigate to="/dashboard" replace /> },
              { path: ":jobId", element: <JobDetails /> },
            ],
          },
          {
            path: "apply-job",
            children: [
              { index: true, element: <Navigate to="/dashboard" replace /> },
              { path: ":jobId", element: <ApplyJobOpeningPage /> },
            ],
          },
        ],
      },
    ],
  },
]);

export const AppRoutes = () => <RouterProvider router={router} />;

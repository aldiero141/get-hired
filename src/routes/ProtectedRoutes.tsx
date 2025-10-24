import { Navigate, Outlet, useLocation } from "react-router";

export function ProtectedRoute() {
  const location = useLocation();
  const user = localStorage.getItem("user");
  if (!user)
    return <Navigate to="/auth/login" state={{ from: location }} replace />;

  return <Outlet />;
}

import { Navigate, Outlet, useLocation } from "react-router";

export function IsSignedInRoute() {
  const location = useLocation();
  const user = localStorage.getItem("user");

  if (user)
    return <Navigate to="/dashboard" state={{ from: location }} replace />;
  return <Outlet />;
}

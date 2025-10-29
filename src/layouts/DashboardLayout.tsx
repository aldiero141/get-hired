import { Outlet } from "react-router";
import { SiteHeader } from "./SiteHeader";

export default function DashboardLayout() {
  return (
    <div>
      <SiteHeader />
      <div className="w-full h-full p-6">
        <Outlet />
      </div>
    </div>
  );
}

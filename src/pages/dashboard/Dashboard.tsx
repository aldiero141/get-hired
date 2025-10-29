import AdminDashboard from "@/components/dashboard/admin/admin-dashboard";
import UserDashboard from "@/components/dashboard/user/user-dashboard";
import { Skeleton } from "@/components/ui/skeleton";
import { useUser } from "@/store/user";

export default function DashboardPage() {
  const user = useUser();

  return (
    <div className="flex flex-col gap-4">
      {
        (user?.role !== "admin" && user?.role !== "user")
          ? <Skeleton className="h-[calc(90vh-4rem)]" />
          : user?.role === "admin"
            ? <AdminDashboard />
            : user?.role === "user"
              ? <UserDashboard />
              : null
      }
    </div>
  );
}

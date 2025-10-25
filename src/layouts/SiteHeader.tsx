import { IconLogout } from "@tabler/icons-react";
import { Loader2 } from "lucide-react";
import { useEffect } from "react";
import { Navigate } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import { useLogout } from "@/features/logout/query";
import { useGetMe } from "@/features/me/query";
import { useUserActions } from "@/store/user";

export function SiteHeader() {
  const { mutateAsync: logout, isPending: isLoggingOut } = useLogout();
  const { data: user, isLoading, isError, isSuccess } = useGetMe();
  const { setUser } = useUserActions();

  useEffect(() => {
    if (isSuccess && user) {
      setUser(user);
    }
  }, [isSuccess, user]);

  const handleLogout = () => {
    logout();
    setUser({ username: "", role: "" });
  };

  if (isError)
    return <Navigate to="/auth/login" />;

  return (
    <header className="flex h-14 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      {
        isLoading
          ? (
              <Skeleton className="h-14 w-full" />
            )
          : (
              <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
                {
                  user?.role === "admin"
                    ? (
                        <h1 className="text-lg font-semibold">
                          Job List
                        </h1>
                      )
                    : null
                }
              </div>
            )
      }

      <div className="flex flex-end mx-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="cursor-pointer">
            <Avatar className="h-8 w-8 rounded-lg">
              <AvatarImage src="/image/empty-profile-avatar.svg" alt="avatar-img" />
              <AvatarFallback className="rounded-lg">PP</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            align="end"
            sideOffset={4}
          >
            <DropdownMenuItem onClick={handleLogout} disabled={isLoggingOut}>
              {
                isLoggingOut
                  ? (
                      <Loader2 className="size-4 text-destructive animate-spin" />
                    )
                  : (
                      <>
                        <IconLogout className="size-4 text-destructive" />
                        <span className="text-destructive">
                          Keluar
                        </span>
                      </>
                    )
              }
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}

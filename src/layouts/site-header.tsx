import { IconLogout } from "@tabler/icons-react";
import { Navigate, useNavigate } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetMe } from "@/features/me/query";

export function SiteHeader() {
  const { data: user, isLoading, isError } = useGetMe();
  const navigate = useNavigate();

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
                        <h1>
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
            <DropdownMenuItem onClick={() => navigate("/auth/login")}>
              <IconLogout className="size-4 text-destructive" />
              <span className="text-destructive">
                Keluar
              </span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}

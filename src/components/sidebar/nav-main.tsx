import type { Icon } from "@tabler/icons-react";

import { NavLink, useLocation } from "react-router";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

export function NavMain({
  items,
  roles,
}: {
  items: {
    name: string;
    url: string;
    icon?: Icon;
    roles: string[];
  }[];
  roles: string[];
}) {
  const { pathname } = useLocation();
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          {items.filter(item => roles.some(role => item.roles.includes(role))).map(item => (
            <NavLink to={item.url} key={item.name}>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip={item.name} className={cn("hover:cursor-pointer", pathname === item.url ? "text-primary font-bold" : "")}>
                  {item.icon && <item.icon />}
                  <span className="capitalize">{item.name}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </NavLink>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}

"use client";

import type { Icon } from "@tabler/icons-react";
import { NavLink, useLocation } from "react-router";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

export function NavCompany({
  items,
  roles,
}: {
  items: {
    name: string;
    url: string;
    roles: string[];
    icon: Icon;
  }[];
  roles: string[];
}) {
  const { pathname } = useLocation();

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Company</SidebarGroupLabel>
      <SidebarMenu>
        {items.filter(item => roles.some(role => item.roles.includes(role))).map(item => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild>
              <NavLink to={item.url} className={cn("hover:cursor-pointer", pathname === item.url ? "text-primary font-bold" : "")}>
                <item.icon />
                <span className="capitalize">{item.name}</span>
              </NavLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}

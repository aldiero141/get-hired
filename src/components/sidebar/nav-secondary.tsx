"use client";

import type { Icon } from "@tabler/icons-react";
import * as React from "react";
import { NavLink } from "react-router";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function NavSecondary({
  items,
  roles,
  ...props
}: {
  items: {
    name: string;
    url: string;
    roles: string[];
    icon: Icon;
  }[];
  roles: string[];
} & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.filter(item => roles.some(role => item.roles.includes(role))).map(item => (
            <SidebarMenuItem key={item.name}>
              <SidebarMenuButton asChild>
                <NavLink to={item.url}>
                  <item.icon />
                  <span className="capitalize">{item.name}</span>
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}

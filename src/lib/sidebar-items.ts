import {
  IconBuildings,
  IconCashBanknote,
  IconCashRegister,
  IconDashboard,
  IconListDetails,
  IconSettings,
} from "@tabler/icons-react";

export const data = {
  user: {
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "/assets/avatar.svg",
  },
  navMain: [
    {
      name: "home",
      url: "/dashboard",
      roles: ["super_admin", "support_admin", "finance_admin", "content_admin", "analytics_admin"],
      icon: IconDashboard,
    },
    {
      name: "analytics",
      url: "/dashboard/analytics",
      roles: ["super_admin", "support_admin", "finance_admin", "content_admin", "analytics_admin"],
      icon: IconListDetails,
    },
  ],
  navCompany: [
    {
      name: "management",
      url: "/dashboard/company/management",
      roles: ["super_admin", "support_admin", "finance_admin", "content_admin", "analytics_admin"],
      icon: IconBuildings,
    },
    {
      name: "subscriptions",
      url: "/dashboard/company/subscriptions",
      roles: ["super_admin", "support_admin", "finance_admin", "content_admin", "analytics_admin"],
      icon: IconCashRegister,
    },
    {
      name: "token management",
      url: "/dashboard/company/token-management",
      roles: ["super_admin", "support_admin", "finance_admin", "content_admin", "analytics_admin"],
      icon: IconCashBanknote,
    },
  ],
  navSecondary: [
    {
      name: "users",
      url: "/dashboard/users",
      roles: ["super_admin"],
      icon: IconSettings,
    },
  ],
};

export const protectedPath = [...data.navMain, ...data.navCompany, ...data.navSecondary];


import React from "react";
import { Link, useLocation } from "react-router-dom";
import { BarChart, Home, ShoppingCart, BarChart2, ClipboardList, PieChart, Settings } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";

// Menu items with routes
const menuItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
  },
  {
    title: "Inventory",
    url: "/inventory",
    icon: ShoppingCart,
  },
  {
    title: "Waste Analysis",
    url: "/waste",
    icon: BarChart,
  },
  {
    title: "Menu Optimization",
    url: "/menu",
    icon: ClipboardList,
  },
  {
    title: "Financial Reports",
    url: "/reports",
    icon: PieChart,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

const AppSidebar: React.FC = () => {
  const location = useLocation();
  
  return (
    <Sidebar className="border-r border-border">
      <SidebarHeader className="p-4 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded bg-primary">
            <BarChart2 className="h-5 w-5 text-white" />
          </div>
          <span className="font-bold text-lg">GastroVision</span>
        </div>
        <SidebarTrigger className="absolute right-2 top-4" />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className={location.pathname === item.url ? "bg-primary/10 text-primary" : ""}>
                    <Link to={item.url}>
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;

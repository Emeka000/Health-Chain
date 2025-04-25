"use client";
import { useState } from "react";
import { Heart, Hospital, ShieldCheck, Wallet, Menu } from "lucide-react";
import Link from "next/link";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
} from "@/components/ui/sidebar";

// Navigation menu items
const menuItems = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: Heart,
  },
  {
    title: "My Records",
    path: "/records",
    icon: Hospital,
  },
  {
    title: "Access Control",
    path: "/access",
    icon: ShieldCheck,
  },
  {
    title: "Payment",
    path: "/payment",
    icon: Wallet,
  },
];

export function AppSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Navbar for small screens */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-sidebar-primary text-white flex items-center justify-between p-4 lg:hidden">
        <div className="flex items-center space-x-2">
          <Heart className="h-6 w-6 text-white" />
          <span className="font-bold text-lg">Health-Chain</span>
        </div>
        <button onClick={toggleSidebar} className="cursor-pointer">
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 bg-white left-0 h-full w-64 border border-r border-gray-600 z-40 transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static lg:h-auto lg:flex lg:flex-col`}
      >
        <SidebarHeader className="flex items-center justify-between">
          <div className="flex items-center space-x-2 px-4">
            <Heart className="h-6 w-6 text-sidebar-primary" />
            <span className="font-bold text-lg max-sm:hidden">Health-Chain</span>
          </div>
          <button onClick={toggleSidebar} className="lg:hidden">
            <Menu className="h-6 w-6" />
          </button>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            {/* <SidebarGroupLabel>Main Navigation</SidebarGroupLabel> */}
            <SidebarGroupContent>
              <SidebarMenu>
                {menuItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild className="my-5">
                      <Link
                        href={item.path}
                        className="data-[active=true]"
                      >
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="text-xs max-sm:hidden text-sidebar-foreground/50 p-4">
          Health-Chain Nexus v1.0
        </SidebarFooter>
      </div>

      {/* Overlay for small screens */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-[#000000]/70 bg-opacity-70 z-30 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
}

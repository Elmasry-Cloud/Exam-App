import DashSidebar from "@/features/user-dashboard/components/dash-sidebar";
import React from "react";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="grid grid-cols-[22rem_1fr] min-h-screen">
      <DashSidebar />
      <div className=" bg-gray-50">{children}</div>
    </main>
  );
}

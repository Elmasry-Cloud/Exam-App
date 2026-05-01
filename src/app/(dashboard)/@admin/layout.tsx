import AdminDashSidbar from "@/features/admin-dashboard/components/sidebar/admin-dash-sidbar";
import React from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="grid grid-cols-[22rem_1fr] min-h-screen">
      {/* <DashSidebar /> */}
      <AdminDashSidbar />
      <div className="bg-gray-100 relative overflow-auto">{children}</div>
    </main>
  );
}

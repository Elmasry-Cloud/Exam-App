import SidebarBody from "./diplomas/sidebar-body";
import SidebarFooter from "./diplomas/sidebar-footer";
import SidebarHeader from "./diplomas/sidebar-header";

export default async function DashSidebar() {
  return (
    <aside className="dash-sidebar sticky top-0 shrink-0 z-50 h-screen bg-blue-50 border-r border-blue-600 p-10 flex flex-col">
      <SidebarHeader />
      <div className="body grow flex flex-col">
        <SidebarBody />
        {/* Footer Info */}
        <SidebarFooter />
      </div>
    </aside>
  );
}

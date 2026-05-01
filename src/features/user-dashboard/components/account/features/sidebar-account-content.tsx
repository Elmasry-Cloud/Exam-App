import { CircleUserRound, Lock } from "lucide-react";
import SidebarAccountBodyLine from "./sidebar-account-body-line";
import LogoutButton from "../../logout";

export default function SidebarAccountContent() {
  return (
    <aside className="p-6 bg-white flex flex-col">
      {/* Body Sidebar Account */}
      <div className="sidebar-body grow flex flex-col gap-2.5">
        <SidebarAccountBodyLine
          textInfo={"Profile"}
          active={"bg-blue-50 text-blue-600"}
          href={"Profile"}
        >
          <CircleUserRound size={24} />
        </SidebarAccountBodyLine>
        <SidebarAccountBodyLine
          textInfo={"Change Password"}
          active={"bg-blue-50 text-blue-600"}
          href={"Change Password"}
        >
          <Lock size={24} />
        </SidebarAccountBodyLine>
      </div>
      {/* Logout Sidebar Account */}
      <LogoutButton
        styleButton="cursor-pointer bg-red-50 py-2.5 px-4 text-red-600 border-b border-b-gray-100 p-4 flex items-center gap-2.5"
        styleP={"font-normal text-base"}
      />
    </aside>
  );
}

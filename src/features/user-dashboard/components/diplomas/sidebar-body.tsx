import SidebarBodyLine from "./sidebar-body-line";
import { GraduationCap, UserRound } from "lucide-react";

export default function SidebarBody() {
  return (
    <div className="grow">
      <SidebarBodyLine
        textInfo={"Diplomas"}
        active={"border border-blue-500 bg-blue-100 text-blue-600"}
        href={"/"}
        // ref={ref1}
      >
        <GraduationCap />
      </SidebarBodyLine>
      <SidebarBodyLine
        textInfo={"Account Settings"}
        active={"border border-blue-500 bg-blue-100 text-blue-600"}
        href={"Account"}
      >
        <UserRound />
      </SidebarBodyLine>
    </div>
  );
}

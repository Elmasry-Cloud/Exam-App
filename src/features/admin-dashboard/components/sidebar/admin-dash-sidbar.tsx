import Image from "next/image";
import Logo from "@/images/logo.png";
import { FolderCode } from "lucide-react";
import AdminSideBody from "./admin-side-body";
import AdminSideFooter from "./admin-side-footer";

export default function AdminDashSidbar() {
  return (
    <aside className="bg-gray-800 sticky top-0 bottom-0 left-0 right-0 text-white h-screen p-10 border-r flex flex-col z-50">
      {/* Header */}
      <header className="flex flex-col gap-2.5 mb-15">
        {/* head logo */}
        <Image src={Logo} alt="logo" width={192} height={37} />
        {/* head info */}
        <div className="head flex items-center gap-2.5">
          <FolderCode size={30} strokeWidth={1.5} className="text-white" />
          <h1 className="font-semibold text-xl">Exam App</h1>
        </div>
      </header>

      {/* Body */}
      <AdminSideBody />

      {/* Footer */}
      <AdminSideFooter />
    </aside>
  );
}

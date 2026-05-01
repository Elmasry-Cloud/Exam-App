"use client";
import LogoutButton from "@/features/user-dashboard/components/logout";
import { EllipsisVertical, LayoutGrid, UserRound } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function AdminSideDropdown() {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className="p-1.25 relative">
      <EllipsisVertical
        size={18}
        strokeWidth={0.94}
        className="cursor-pointer"
        onClick={() => setShowDropdown(!showDropdown)}
      />
      {/* Dropdown Setting */}
      {showDropdown && (
        <div className="dropdown w-66 bg-white absolute top-0 -translate-y-1/2 left-10">
          {/* Account Setting */}
          <Link
            href={""}
            className="item cursor-pointer border-b border-b-gray-100 p-4 flex items-center gap-1.5"
          >
            <UserRound size={18} strokeWidth={1.25} className="text-gray-400" />
            <p className="font-normal text-sm text-gray-800">Account</p>
          </Link>

          {/* Application */}
          <Link
            href={"/"}
            className="item cursor-pointer border-b border-b-gray-100 p-4 flex items-center gap-1.5"
          >
            <LayoutGrid
              size={18}
              strokeWidth={1.25}
              className="text-gray-400"
            />
            <p className="font-normal text-sm text-gray-800">Application</p>
          </Link>

          {/* Logout */}
          <LogoutButton
            styleButton="item cursor-pointer text-red-600 border-b border-b-gray-100 p-4 flex items-center gap-1.5"
            styleP={"font-normal text-sm"}
          />
        </div>
      )}
    </div>
  );
}

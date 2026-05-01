import { UserRound } from "lucide-react";
import Link from "next/link";
import LogoutButton from "../logout";

export default function SettingMenue() {
  return (
    <div className="w-64 bg-white">
      {/* Account Setting */}
      <Link
        href={"/account"}
        className="item cursor-pointer border-b border-b-gray-100 p-4 flex items-center gap-1.5"
      >
        <UserRound size={18} />
        <p className="font-normal text-sm text-gray-800">Account</p>
      </Link>
      <LogoutButton
        styleButton="item cursor-pointer text-red-600 border-b border-b-gray-100 p-4 flex items-center gap-1.5"
        styleP={"font-normal text-sm"}
      />
    </div>
  );
}

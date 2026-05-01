"use client";
import { ChevronLeft, UserRound } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AccountHeader({ backHref }: { backHref: string }) {
  const pathname = usePathname();
  return (
    <div className="heading mb-6 flex gap-2.5">
      <Link
        href={pathname == "/account" ? "/" : backHref}
        className="back flex items-center justify-center bg-white px-1.5 border border-blue-600 text-blue-600"
      >
        <ChevronLeft size={24} />
      </Link>
      <header className="grow text-white bg-blue-600 p-4 flex items-center gap-4">
        <UserRound size={45} />
        <h1 className=" font-semibold text-3xl">Account Settings</h1>
      </header>
    </div>
  );
}

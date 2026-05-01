"use client";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

interface ILogout {
  styleButton: string;
  styleP: string;
}

export default function LogoutButton({ styleButton, styleP }: ILogout) {
  return (
    <button
      className={styleButton}
      onClick={() =>
        signOut({
          callbackUrl: "/login",
        })
      }
    >
      <LogOut size={18} className="rotate-180" />
      <p className={styleP}>Logout</p>
    </button>
  );
}

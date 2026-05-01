"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export interface IProps {
  children: React.ReactNode;
  textInfo: string;
  active?: string;
  href?: string;
  //   ref?: React.ForwardedRef<HTMLDivElement>;
}

export default function SidebarBodyLine({
  children,
  textInfo,
  active,
  href,
  //   ref,
}: IProps) {
  const pathname = usePathname();
  //   console.log(pathname);
  return (
    // active : border border-blue-500 bg-blue-100
    <Link
      href={`${href === "/" ? "/" : "/account"}`}
      //   ref={ref}
      className={`flex items-center gap-2.5 p-4 cursor-pointer
        
         ${
           (pathname == "/" || pathname.startsWith("/diplomas/")) &&
           href === "/"
             ? active
             : (pathname == "/account" ||
                   pathname == "/account/change-password") &&
                 href === "Account"
               ? active
               : "text-gray-500"
         }

         `}
    >
      {/* pathname == "/account/change-password" */}
      {children}
      <p className="font-normal text-base">{textInfo}</p>
    </Link>
  );
}

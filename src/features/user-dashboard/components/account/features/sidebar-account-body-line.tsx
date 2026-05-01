"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { IProps } from "../../diplomas/sidebar-body-line";

export default function SidebarAccountBodyLine({
  children,
  textInfo,
  active,
  href,
}: IProps) {
  const pathName = usePathname();
  //   console.log(pathName);
  return (
    <Link
      href={`${href === "Profile" ? "/account" : "/account/change-password"}`}
      //   href={"#"}
      //   ref={ref}
      className={`flex items-center gap-2.5 py-2.5 px-4 cursor-pointer
        ${pathName === "/account" && textInfo === "Profile" ? active : pathName === "/account/change-password" && textInfo === "Change Password" ? active : ""}`}
    >
      {children}
      <p className="font-normal text-base">{textInfo}</p>
    </Link>
  );
}

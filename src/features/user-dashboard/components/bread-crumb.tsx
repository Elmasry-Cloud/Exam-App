"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/shared/components/ui/breadcrumb";
import { usePathname } from "next/navigation";

export function BreadcrumbBasicAccount() {
  const pathName = usePathname();
  // console.log(pathName);
  // /account/change-password
  return (
    <Breadcrumb className="bg-white p-4 text-sm font-normal text-gray-400">
      <BreadcrumbList>
        {pathName == "/account" ? (
          <BreadcrumbItem>
            <BreadcrumbLink>Account</BreadcrumbLink>
          </BreadcrumbItem>
        ) : pathName == "/account/change-password" ? (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink href={"/account"}>Account</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Change Password</BreadcrumbPage>
            </BreadcrumbItem>
          </>
        ) : (
          ""
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

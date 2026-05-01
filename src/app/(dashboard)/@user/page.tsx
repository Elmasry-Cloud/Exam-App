"use client";

import { BreadcrumbBasicDiplomas } from "@/features/user-dashboard/components/diplomas/bread-crumb-diplomas";
import DiplomasInfo from "@/features/user-dashboard/components/diplomas/diploma-info";
import DiplomasHeader from "@/features/user-dashboard/components/diplomas/diplomas-header";
import { GraduationCap } from "lucide-react";

export default function UserPage() {
  return (
    <>
      <BreadcrumbBasicDiplomas href={"/"} />
      <main className="p-6">
        {/* Diplomas Header */}
        <DiplomasHeader text={"Diplomas"}>
          <GraduationCap size={45} />
        </DiplomasHeader>
        <DiplomasInfo />
      </main>
    </>
  );
}

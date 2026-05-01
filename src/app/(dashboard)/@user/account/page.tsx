"use client";
// import getUserData from "./_api/user.api";

import AccountForm from "@/features/user-dashboard/components/account/account-form";
import AccountFormSkeleton from "@/features/user-dashboard/components/account/skiliton-acc-form";
import { useSession } from "next-auth/react";

export default function AccountPage() {
  const { data: session, status, update } = useSession();

  if (status === "loading") return <AccountFormSkeleton />;
  return (
    <>
      <AccountForm session={session} update={update} />
    </>
  );
}

"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Check, CircleX } from "lucide-react";
import useChangePassword from "@/features/user-dashboard/hooks/change-acc-password-hooks/use-change-password";
import EditPassword from "@/features/user-dashboard/components/account/change-password/password-input";
import ErrorMessage from "@/features/auth/components/login/error-message";
import ButtonInput from "@/features/auth/components/login/button-input";

export default function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { data, error, isPending, changePasswordAction } = useChangePassword();

  function handelSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // console.log("hhh");

    if (
      currentPassword !== "" &&
      newPassword !== "" &&
      confirmPassword !== ""
    ) {
      // console.log(currentPassword);
      // console.log(newPassword);
      // console.log(confirmPassword);

      changePasswordAction(
        { currentPassword, newPassword, confirmPassword },
        {
          onSuccess: (data) => {
            /* Success Message */

            if (data.status) {
              /* Success Message */
              toast.custom(() => (
                <div className="p-4 w-full bg-gray-800 text-white text-sm font-medium flex items-center gap-2.5 shadow-custom">
                  <Check size={18} className="text-green-600" />
                  <span>{data?.message}</span>
                </div>
              ));
              // Clear Inputs
              setCurrentPassword("");
              setNewPassword("");
              setConfirmPassword("");
            } else {
              toast.custom(() => (
                <div className="p-4 w-full bg-gray-800 text-white text-sm font-medium flex items-center gap-2.5 shadow-custom">
                  <CircleX size={18} className="text-red-600" />
                  <span>{data?.message}</span>
                </div>
              ));
            }
          },
        },
      );
    }
  }

  return (
    <>
      {/* Form */}
      <form onSubmit={handelSubmit} className="flex flex-col gap-4">
        {/* ChangePassword */}
        <EditPassword
          label="Current Password"
          value={currentPassword}
          editValue={setCurrentPassword}
        />
        <EditPassword
          label="New Password"
          value={newPassword}
          editValue={setNewPassword}
        />
        <EditPassword
          label="Confirm Password"
          value={confirmPassword}
          editValue={setConfirmPassword}
        />

        {/* Error Message */}
        {error && <ErrorMessage message={error.message} />}

        {data?.message && data?.status == false && (
          <ErrorMessage message={data?.message} />
        )}

        <ButtonInput textInfo={"Update Password"} isPending={isPending} />
      </form>
    </>
  );
}

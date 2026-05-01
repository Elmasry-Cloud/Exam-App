import { MoveLeft } from "lucide-react";
import React from "react";
import Link from "next/link";
import Header from "../header";
import { forgotField } from "@/features/auth/types/forgot";

interface IEValue {
  emailValue: forgotField;
  ref: React.ForwardedRef<HTMLButtonElement>;
  setSucces: (value: boolean) => void;
  setFocusInput: (value: boolean) => void;
}

export default function StepTwoForgotPass({
  emailValue,
  ref,
  setSucces,
  setFocusInput,
}: IEValue) {
  function backToForgorPassword() {
    // const router = useRouter()
    // router.push("")
    setSucces(false);
    setFocusInput(true);
    // console.log(ref?.current);
  }
  return (
    <>
      <button
        onClick={backToForgorPassword}
        ref={ref}
        className="p-2 w-fit border-1.5 border-gray-200 hover:bg-gray-50 transition-all mb-10 cursor-pointer"
      >
        <MoveLeft size={24} />
      </button>
      {/* Header Text */}
      <Header headerInfo={"Password Reset Sent"} />
      <div className="info text-base font-normal">
        <p className="text-gray-800">
          We have sent a password reset link to:
          <span className="text-blue-600">{emailValue.email}.</span>
          {/* user@example.com. */}
        </p>
        <br />
        <p>
          Please check your inbox and follow the instructions to reset your
          password.
        </p>
        <br />
        <p className="text-gray-500">
          If you don’t see the email within a few minutes, check your spam or
          junk folder.
        </p>
      </div>
      <p className="font-medium text-sm text-gray-500 mt-10">
        Don’t have an account?
        <Link href={"/register"} className="text-blue-600 ms-2">
          Create yours
        </Link>
      </p>
    </>
  );
}

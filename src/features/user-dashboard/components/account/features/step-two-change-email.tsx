import { Dispatch, SetStateAction, useState } from "react";
import useVerfyCodeOTP from "@/features/auth/hooks/register/use-verify-code";
import { Check } from "lucide-react";
import { toast } from "sonner";
import useConfirmEmail from "@/features/user-dashboard/hooks/account-hooks/use-confirm-change-email";
import OTP_Input from "@/features/auth/components/register/verify-otp";
import ErrorMessage from "@/features/auth/components/login/error-message";
import ButtonInput from "@/features/auth/components/login/button-input";

interface IStepTwoInfo {
  emailValue: string;
  setSteps: Dispatch<SetStateAction<number>>;
  setSuccess?: Dispatch<SetStateAction<boolean>>;
  setFocusInput?: Dispatch<SetStateAction<boolean>>;
  lightbg?: boolean;
  setShowChangeEmail: Dispatch<SetStateAction<boolean>>;
}

export default function StepTwoChangeEmail({
  emailValue,
  setSteps,
  setSuccess,
  setFocusInput,
  lightbg,
  setShowChangeEmail,
}: IStepTwoInfo) {
  const [otpValue, setOtpValue] = useState("");

  // Change Email Hook
  const {
    error,
    isPending: pendingConfirm,
    confirmEmailAPI,
  } = useConfirmEmail();

  function handelSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();

    // Change Email
    confirmEmailAPI(
      { code: otpValue },
      {
        onSuccess: () => {
          // setSuccess(true);
          // setSteps((prev) => prev + 1);
          // setSteps();
          // console.log(emailValue, otpValue);
          console.log(otpValue);
          setShowChangeEmail && setShowChangeEmail(false);
          toast.custom(() => (
            <div className="p-4 w-full bg-gray-800 text-white text-sm font-medium flex items-center gap-2.5 shadow-custom">
              <Check size={18} className="text-green-600" />
              <span>Your Email Updated</span>
            </div>
          ));
          // setInterval(() => {
          //   location.href = "/account";
          // }, 2000);
        },
      },
    );
  }

  // go back fun
  function goBack() {
    setSuccess && setSuccess(false);
    setSteps(0);
    setFocusInput && setFocusInput(true);
  }

  return (
    <>
      <div className="px-9">
        {/* header */}
        <h1 className="font-inter font-bold text-3xl mb-7.5">Change Email</h1>

        {/* desc */}
        <h2 className="font-inter font-bold text-2xl text-blue-600">
          Enter your new email
        </h2>
      </div>

      {/* Step Two form OTP */}
      <form onSubmit={handelSubmit}>
        {/* OTP Code */}
        <OTP_Input value={otpValue} onChange={setOtpValue} />

        {/* Error Message Register*/}
        {error && <ErrorMessage message={error.message} />}

        <div className="btn bg-gray-50 border border-t-gray-200 p-6 mt-10">
          <ButtonInput
            textInfo={"Next"}
            isPending={pendingConfirm}
            lightbg={lightbg ?? true}
          />
        </div>
      </form>
    </>
  );
}

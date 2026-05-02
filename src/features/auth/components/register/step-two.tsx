import { Dispatch, SetStateAction, useState } from "react";
import OTP_Input from "./verify-otp";
import ErrorMessage from "../login/error-message";
import ButtonInput from "../login/button-input";
import useVerfyCodeOTP from "@/features/auth/hooks/register/use-verify-code";
import Header from "../header";
import { Check } from "lucide-react";
import { toast } from "sonner";
import useConfirmEmail from "@/features/user-dashboard/hooks/account-hooks/use-confirm-change-email";

interface IStepTwoInfo {
  emailValue: string;
  setSteps: Dispatch<SetStateAction<number>>;
  setSuccess?: Dispatch<SetStateAction<boolean>>;
  setFocusInput?: Dispatch<SetStateAction<boolean>>;
  lightbg?: boolean;
  change?: string;
  setShowChangeEmail?: Dispatch<SetStateAction<boolean>>;
}

export default function StepTwoRegister({
  emailValue,
  setSteps,
  setSuccess,
  setFocusInput,
  lightbg,
  change,
  setShowChangeEmail,
}: IStepTwoInfo) {
  const [otpValue, setOtpValue] = useState("");

  // Register Email Hook
  const { error, isPending, verifyCodeAPI } = useVerfyCodeOTP();

  // Change Email Hook
  const {
    error: confirmError,
    isPending: pendingConfirm,
    confirmEmailAPI,
  } = useConfirmEmail();

  function handelSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();

    // Register
    if (!change) {
      verifyCodeAPI(
        { email: emailValue, code: otpValue },
        {
          onSuccess: () => {
            // setSuccess(true);
            // setSteps((prev) => prev + 1);
            setSteps(3);
            // console.log(emailValue, otpValue);
          },
        },
      );
      return;
    }

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
      {!change && (
        <>
          {/* header */}
          <Header headerInfo={"Create Account"} />

          {/* desc */}
          <>
            <h2 className="font-inter mt-4 mb-2.5 font-bold text-2xl text-blue-600">
              Verify OTP
            </h2>
            <p className="text-base font-normal text-gray-500 mb-6.5">
              Please enter the 6-digits code we have sent to:{" "}
              <span className="text-base text-gray-800">{emailValue}</span>
              <button
                onClick={goBack}
                className="text-blue-600 font-medium text-base underline cursor-pointer ms-2.5"
              >
                Edit
              </button>
            </p>
          </>
        </>
      )}

      {/* Step Two form OTP */}
      <form onSubmit={handelSubmit}>
        {/* OTP Code */}
        <OTP_Input value={otpValue} onChange={setOtpValue} />

        {/* Error Message Register*/}
        {error && <ErrorMessage message={error.message} />}
        {confirmError && change && (
          <ErrorMessage message={confirmError.message} />
        )}

        {/* Register */}
        {!change && (
          <ButtonInput
            textInfo={"Verify Code"}
            isPending={isPending}
            lightbg={lightbg ?? true}
          />
        )}

        {/* Change Email */}
        {change && (
          <div className="btn bg-gray-50 border border-t-gray-200 p-6 mt-10">
            <ButtonInput
              textInfo={"Next"}
              isPending={pendingConfirm}
              lightbg={lightbg ?? true}
            />
          </div>
        )}
      </form>
    </>
  );
}

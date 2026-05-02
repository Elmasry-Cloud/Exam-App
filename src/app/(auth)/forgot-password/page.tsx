"use client";
import StepTwoForgotPass from "@/features/auth/components/forgot-password/step-two-forgot";
import Header from "@/features/auth/components/header";
import StepOneForgot from "@/features/auth/components/forgot-password/step-one";
import { Suspense, useEffect, useRef, useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  // console.log(email);

  const [Succes, setSucces] = useState(false);
  const [focusInput, setFocusInput] = useState(false);

  const refButtonBack = useRef<HTMLButtonElement>(null);
  const refInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // console.log("renderrrrr");
    setInterval(() => {
      if (focusInput == true) {
        refInput.current?.focus();
        // setEmailValue("");
      }
    });
  }, [focusInput]);

  return (
    <main className="flex flex-col items-center justify-center">
      <div className="w-full max-w-113">
        <Suspense fallback={<div>Loading...</div>}>
          {!Succes ? (
            <>
              {/* Header Text */}
              <Header headerInfo={"Forgot Password"} />

              {/* Forgot Password Step One */}
              <StepOneForgot
                emailValue={email}
                setEmail={setEmail}
                ref={refInput}
                setSucces={setSucces}
              />
            </>
          ) : (
            <>
              {/* Forgot Password Step Two */}
              <StepTwoForgotPass
                ref={refButtonBack}
                emailValue={email}
                setSucces={setSucces}
                setFocusInput={setFocusInput}
              />
            </>
          )}
        </Suspense>
      </div>
    </main>
  );
}

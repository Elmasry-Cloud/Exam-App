"use client";
import { useEffect, useRef, useState } from "react";
import StepOneRegister from "./step-one";
import { registerFields } from "@/features/auth/types/register";
import StepTwoRegister from "./step-two";
import RegisterProgress from "./progress";
import StepThreeRegister from "./step-three";
import StepFourRegister from "./step-four";
import useSubmitAccount from "@/features/auth/hooks/register/use-submit-acc";
import { useRouter } from "next/navigation";

export default function RegisterSteps() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [steps, setSteps] = useState(0);
  const [focusInput, setFocusInput] = useState(false);
  const emailInputRef = useRef<HTMLInputElement>(null);

  const [allAccountData, setAllAccountData] = useState<Partial<registerFields>>(
    {},
  );

  const router = useRouter();

  const { submitError, submitAccData } = useSubmitAccount();

  // console.log(allAccountData);

  //   Effect State
  useEffect(() => {
    if (focusInput == true) {
      emailInputRef.current?.focus();
    }
  }, [focusInput]);

  // create Account
  useEffect(() => {
    if (
      allAccountData.username &&
      allAccountData.email &&
      allAccountData.password &&
      allAccountData.confirmPassword &&
      allAccountData.firstName &&
      allAccountData.lastName
      // &&allAccountData.phone
    ) {
      submitAccData(allAccountData as registerFields, {
        onSuccess: (data) => {
          // console.log(data?.message);
          router.push("/login");
        },
      });
    }
  }, [allAccountData, submitAccData]);

  return (
    <>
      {/* Step 1 */}
      {steps == 0 && (
        <StepOneRegister
          setSuccess={setSuccess}
          setSteps={setSteps}
          setAllAccountData={setAllAccountData}
          setEmailValue={setEmail}
          ref={emailInputRef}
          emailValue={email}
        />
      )}

      {/* progress */}
      {steps !== 0 && <RegisterProgress currentStep={steps} stepCount={4} />}

      {/* step 2 */}
      {steps == 2 && (
        <StepTwoRegister
          emailValue={email}
          setSuccess={setSuccess}
          setSteps={setSteps}
          setFocusInput={setFocusInput}
        />
      )}

      {/* step 3 */}
      {steps == 3 && (
        <StepThreeRegister
          setAllAccountData={setAllAccountData}
          setSteps={setSteps}
        />
      )}

      {/* step 4 */}
      {steps == 4 && (
        <StepFourRegister
          allAccountData={allAccountData}
          setAllAccountData={setAllAccountData}
          submitError={submitError?.message}
        />
      )}
    </>
  );
}

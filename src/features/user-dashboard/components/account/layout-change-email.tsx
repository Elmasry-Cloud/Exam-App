import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import useChangeEmail from "../../hooks/account-hooks/use-change-email";
import RegisterProgress from "@/features/auth/components/register/progress";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/shared/components/ui/field";
import { Controller, useForm } from "react-hook-form";
import { registerFields } from "@/features/auth/types/register";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/features/auth/schemas/register/register-one.schema";
import { Button } from "@/shared/components/ui/button";
import { Spinner } from "@/shared/components/ui/spinner";
import { ChevronRight } from "lucide-react";
import { Input } from "@/shared/components/ui/input";
import ErrorMessage from "@/features/auth/components/login/error-message";
import Header from "@/features/auth/components/header";
import StepTwoRegister from "@/features/auth/components/register/step-two";

interface IProps {
  setShowChangeEmail: Dispatch<SetStateAction<boolean>>;
}

export default function LayoutChangeEmail({ setShowChangeEmail }: IProps) {
  const [steps, setSteps] = useState(0);
  const [emailValue, setEmailValue] = useState("");
  //   const [showChangeEmail, setShowChangeEmail] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  const [successChangeEmail, setSuccessChangeEmail] = useState(false);
  const [focusInput, setFocusInput] = useState(false);
  const emailInputRef = useRef<HTMLInputElement>(null);

  const { error: changeError, isPending, changeEmailAPI } = useChangeEmail();

  // Form
  const form = useForm<registerFields>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: emailValue,
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      phone: "",
    },
  });

  // handleNext Fun
  const handleNext = async () => {
    const isValid = await form.trigger("email");
    if (!isValid) return;
    // console.log(form.getValues("email"));
    const email = form.getValues("email");
    changeEmailAPI(
      { newEmail: email },
      {
        onSuccess() {
          setSteps(2);
          setSuccessChangeEmail(true);
          setEmailValue(email);
        },
      },
    );
  };

  // function sendOTP(e: React.FormEvent<HTMLFormElement>) {
  //   e.preventDefault();
  //   changeEmailAPI(
  //     { newEmail: email },
  //     {
  //       onSuccess() {
  //         setSteps(2);
  //         setSuccessChangeEmail(true);
  //       },
  //     },
  //   );
  // }

  useEffect(() => {
    if (focusInput == true) {
      emailInputRef.current?.focus();
    }
  }, [focusInput]);
  return (
    <>
      <div
        ref={divRef}
        onClick={(e) => divRef.current == e.target && setShowChangeEmail(false)}
        className="layout-change-email bg-black/50 fixed top-0 left-0 bottom-0 right-0 z-50 backdrop-blur-xs p-2.5 flex items-center justify-center"
      >
        {/* Step 0 */}
        {steps == 0 && (
          <form className="w-144.75 bg-white flex flex-col">
            <div className="content p-9">
              <RegisterProgress currentStep={steps} stepCount={2} />

              <h1 className="font-inter mt-2.5 font-bold text-3xl text-gray-800">
                Change Email
              </h1>
              <h2 className="font-inter text-2xl my-7 font-bold text-blue-600">
                Enter your new email
              </h2>

              {/* email input Field */}
              <FieldGroup>
                <Controller
                  name="email"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="email">Email</FieldLabel>
                      <Input
                        {...field}
                        ref={emailInputRef}
                        id="email"
                        aria-invalid={fieldState.invalid}
                        placeholder="user@example.com"
                        autoComplete="email"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              </FieldGroup>

              {/* Error Message */}
              {changeError && (
                <ErrorMessage mt={"mt-5"} message={changeError?.message} />
              )}
            </div>

            {/* Button */}
            <div className="btn bg-gray-50 border border-t-gray-200 p-6">
              {/* Button */}
              <Button
                type="button"
                onClick={handleNext}
                disabled={
                  isPending ||
                  (form.formState.isSubmitted && !form.formState.isValid)
                }
                className={`flex items-center justify-center gap-2.5 w-full font-medium text-sm text-white rounded-none h-11.5 cursor-pointer bg-blue-600 hover:bg-blue-700 border border-blue-600 ${isPending && "disabled:bg-gray-200 cursor-not-allowed text-gray-400"}`}
              >
                {isPending && <Spinner />}
                Next
                <ChevronRight size={16} />
              </Button>
            </div>
          </form>
        )}

        {/* Step 2 */}
        {steps == 2 && (
          <div className="w-144.75 bg-white flex flex-col">
            <div className="content p-9 pb-7">
              <RegisterProgress currentStep={steps} stepCount={2} />

              {/* Step 2 */}
              {steps == 2 && (
                <Header
                  headerInfo={"Change Email"}
                  verify={"Verify OTP"}
                  emailValue={emailValue}
                  setSuccess={setSuccessChangeEmail}
                  steps={steps}
                  // success={successChangeEmail}
                  setSteps={setSteps}
                  setFocusInput={setFocusInput}
                />
              )}
            </div>

            {/* Step 2 */}
            {steps == 2 && (
              <StepTwoRegister
                emailValue={emailValue}
                setSteps={setSteps}
                lightbg={false}
                change={"change"}
                setShowChangeEmail={setShowChangeEmail}
              />
            )}
          </div>
        )}
      </div>
    </>
  );
}

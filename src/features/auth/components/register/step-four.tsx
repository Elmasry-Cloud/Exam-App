import { useState } from "react";
import { IAllData } from "./step-three";
import ErrorMessage from "../login/error-message";
import Header from "../header";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/shared/components/ui/field";
import { EyeOff } from "lucide-react";
import { Input } from "@/shared/components/ui/input";
import { Controller, useForm } from "react-hook-form";
import { registerFields } from "@/features/auth/types/register";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/features/auth/schemas/register/register-one.schema";
import { Button } from "@/shared/components/ui/button";

export default function StepFourRegister({
  allAccountData,
  setAllAccountData,
  submitError,
}: IAllData) {
  // const [newPassword, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  // Form
  const form = useForm<registerFields>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      phone: "",
    },
  });

  // handleNext Step Fun
  const handleNext = async () => {
    const isValid = await form.trigger(["password", "confirmPassword"]);
    if (!isValid) return;
    // console.log(form.getValues("password"), form.getValues("confirmPassword"));
    setAllAccountData((prev) => ({
      ...prev,
      password: form.getValues("password"),
      confirmPassword: form.getValues("confirmPassword"),
    }));
  };

  // const { data, error, isPending, submitAccData } = useSubmitAccount();

  // function handelSubmit(e: { preventDefault: () => void }) {
  //   e.preventDefault();
  //   // console.log(allAccountData)
  //   if (
  //     newPassword !== "" &&
  //     confirmPassword !== "" &&
  //     newPassword == confirmPassword
  //   ) {
  //     setAllAccountData((prev) => ({
  //       ...prev,
  //       password: newPassword,
  //       confirmPassword,
  //     }));
  //     setPasswordMatch(true);
  //   } else {
  //     setPasswordMatch(false);
  //   }
  // }
  return (
    <>
      {/* header 1 */}
      <Header headerInfo={"Create Account"} />

      {/* Header 2 */}
      <h2 className="mt-4 text-blue-600 font-inter font-bold text-2xl">
        Create a strong password
      </h2>

      <form className="flex flex-col gap-4 mt-8">
        {/* password field */}
        <FieldGroup>
          <Controller
            name="password"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                {/* label */}
                <FieldLabel htmlFor="password" className="text-base">
                  Password
                </FieldLabel>

                {/* input field */}
                <div className="relative">
                  <Input
                    {...field}
                    id="password"
                    aria-invalid={fieldState.invalid}
                    type={showPassword ? "text" : "password"}
                    placeholder="********"
                    autoComplete="current-password"
                  />

                  <EyeOff
                    size={18}
                    className="absolute w-fit top-1/2 -translate-y-1/2 right-3.5  cursor-pointer text-gray-400"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                </div>

                {/* error */}
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </FieldGroup>

        {/* Confirm password fild */}
        <FieldGroup>
          <Controller
            name="confirmPassword"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                {/* label */}
                <FieldLabel htmlFor="confirmPassword" className="text-base">
                  Confirm Password
                </FieldLabel>

                {/* input field */}
                <div className="relative">
                  <Input
                    {...field}
                    id="confirmPassword"
                    aria-invalid={fieldState.invalid}
                    type={showPassword ? "text" : "password"}
                    placeholder="********"
                    autoComplete="current-password"
                  />

                  <EyeOff
                    size={18}
                    className="absolute w-fit top-1/2 -translate-y-1/2 right-3.5  cursor-pointer text-gray-400"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                </div>

                {/* error */}
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </FieldGroup>

        {/* Error Message */}
        {submitError && <ErrorMessage message={submitError} />}

        {/* Button */}
        <Button
          type="button"
          onClick={handleNext}
          // disabled={
          //   isPending || (form.formState.isSubmitted && !form.formState.isValid)
          // }
          // ${isPending && "disabled:bg-gray-200 cursor-not-allowed text-gray-400"}
          className={`w-full font-medium text-sm text-white py-5 rounded-none cursor-pointer bg-blue-600 hover:bg-blue-700 `}
        >
          {/* {isPending && <Spinner />} */}
          Create Account
        </Button>
      </form>
    </>
  );
}

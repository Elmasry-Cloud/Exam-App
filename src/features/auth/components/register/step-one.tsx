"use client";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Button } from "@base-ui/react/button";
import { Spinner } from "@/shared/components/ui/spinner";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/shared/components/ui/field";
import { Controller, useForm } from "react-hook-form";
import { Input } from "@/shared/components/ui/input";
import { registerFields } from "@/features/auth/types/register";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/features/auth/schemas/register/register-one.schema";
import useRegister from "@/features/auth/hooks/register/use-register";
import ErrorMessage from "../login/error-message";
import Header from "../header";

interface ITextPinfo {
  setSuccess: (value: boolean) => void;
  setSteps: React.Dispatch<React.SetStateAction<number>>;
  setAllAccountData: React.Dispatch<
    React.SetStateAction<Partial<registerFields>>
  >;
  setEmailValue: (value: string) => void;
  emailValue: string;
  ref?: React.ForwardedRef<HTMLInputElement>;
}

export default function StepOneRegister({
  setSuccess,
  setSteps,
  setAllAccountData,
  setEmailValue,
  emailValue,
  ref,
}: ITextPinfo) {
  // Hook
  const { error, isPending, registerAPI } = useRegister();

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
    console.log(form.getValues("email"));
    registerAPI(
      { email: form.getValues("email") },
      {
        onSuccess: () => {
          setSuccess(true);
          setEmailValue(form.getValues("email"));
          setSteps((prev) => prev + 2);
          setAllAccountData((prev) => ({
            ...prev,
            email: form.getValues("email"),
          }));
        },
      },
    );
  };

  return (
    <>
      {/* header */}
      <Header headerInfo={"Create Account"} />

      {/* step one form */}
      <form className="mt-4">
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
                  ref={ref}
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
        {error && <ErrorMessage message={error.message} mt={"mt-10"} />}

        {/* Button */}
        <Button
          type="button"
          onClick={handleNext}
          disabled={
            isPending || (form.formState.isSubmitted && !form.formState.isValid)
          }
          className={`flex items-center justify-center gap-2.5 w-full mt-10 font-medium text-sm text-black rounded-none h-11.5 cursor-pointer bg-blue-50 hover:bg-blue-100 border border-blue-600 ${isPending && "disabled:bg-gray-200 cursor-not-allowed text-gray-400"}`}
        >
          {isPending && <Spinner />}
          Next
          <ChevronRight size={16} />
        </Button>
      </form>

      {/* Don't have account text */}
      <p className="font-medium text-sm text-gray-500 text-center mt-9">
        Already have an account?{" "}
        <Link href={"/login"} className="text-blue-600">
          Login
        </Link>{" "}
      </p>
    </>
  );
}

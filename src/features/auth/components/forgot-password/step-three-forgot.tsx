"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Header from "../header";
import ButtonInput from "../login/button-input";
import useResetPassword from "@/features/auth/hooks/use-reset-pass";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/shared/components/ui/field";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Input } from "@/shared/components/ui/input";
import { EyeOff } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { resetFields } from "@/features/auth/types/reset";
import { resetSchema } from "@/features/auth/schemas/reset.schema";
import ErrorMessage from "../login/error-message";

export default function StepThreeForgotPass() {
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const searchParams = useSearchParams();
  const token = searchParams.get("token") ?? "";
  // console.log(token);

  const { data, isPending, error, resetPassword } = useResetPassword();

  // Form
  const form = useForm<resetFields>({
    resolver: zodResolver(resetSchema),
    defaultValues: {
      token: token,
      newPassword: "",
      confirmPassword: "",
    },
  });

  // Sub Fun
  const onSubmit: SubmitHandler<resetFields> = (values) => {
    // console.log(values);
    resetPassword(
      { ...values, token },
      {
        onSuccess: () => {
          router.push("/login");
        },
        onError: (err) => {
          console.log(err.message);
        },
      },
    );
  };

  // function handelSubmit(e: { preventDefault: () => void }) {
  //   e.preventDefault();
  //   // console.log(email);
  //   if (newPassword === confirmPassword) {
  //     setPasswordMatch(true);
  //     // if (!token) return;
  //     resetPassword(
  //       { newPassword, confirmPassword, token },
  //       {
  //         onSuccess: () => {
  //           setPassword("");
  //           setConfirmPassword("");
  //           router.push("/login");
  //         },
  //       },
  //     );
  //     // console.log("match");
  //   } else {
  //     setPasswordMatch(false);
  //     // console.log("Notttttttttt");
  //   }
  //   // resetPassword({ newPassword, confirmPassword });
  // }

  return (
    <>
      {/* Header Text */}
      <Header headerInfo={"Create a New Password"} />
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {/* New Password Field */}
        <FieldGroup>
          <Controller
            name="newPassword"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                {/* label */}
                <FieldLabel htmlFor="new-password" className="text-base">
                  New Password
                </FieldLabel>

                {/* input field */}
                <div className="relative">
                  <Input
                    {...field}
                    id="new-password"
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

        {/* Confirm Password Field */}
        <FieldGroup className="mt-4">
          <Controller
            name="confirmPassword"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                {/* label */}
                <FieldLabel
                  htmlFor="confirm-new-password"
                  className="text-base"
                >
                  Confirm New Password
                </FieldLabel>

                {/* input field */}
                <div className="relative">
                  <Input
                    {...field}
                    id="confirm-new-password"
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

        {/* No Token Message */}
        {!token && (
          <p className="text-red-600 text-sm font-normal mt-2.5">
            Reset token is missing. Please open the reset link from your email
            again.
          </p>
        )}

        {/* Error Message */}
        {error && <ErrorMessage message={error?.message} mt={"mt-10"} />}

        {/* Button */}
        <ButtonInput
          textInfo={"Reset Password"}
          linkInfo={"Create yours"}
          isPending={isPending}
        />
      </form>
    </>
  );
}

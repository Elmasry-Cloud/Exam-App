import Link from "next/link";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFields } from "@/features/auth/types/auth";
import { loginSchema } from "@/features/auth/schemas/login.schema";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/shared/components/ui/field";
import { Input } from "@/shared/components/ui/input";
import useLogin from "@/features/auth/hooks/use-login";
import { Button } from "@/shared/components/ui/button";
import { EyeOff } from "lucide-react";
import { useState } from "react";
import { Spinner } from "@/shared/components/ui/spinner";
import ErrorMessage from "./error-message";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const { mutate: login, isPending, error } = useLogin();

  // react-hook-form
  const form = useForm<LoginFields>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  // Submit Fun
  const onSubmit: SubmitHandler<LoginFields> = (values) => {
    // console.log(values);
    login(values);
  };

  return (
    <>
      {/* Login Form */}
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col">
        {/* username field */}
        <FieldGroup className="mb-4">
          <Controller
            name="username"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                {/* label */}
                <FieldLabel htmlFor="username" className="text-base">
                  Username
                </FieldLabel>

                {/* input field */}
                <Input
                  {...field}
                  id="username"
                  aria-invalid={fieldState.invalid}
                  placeholder="user123"
                  autoComplete="username"
                />

                {/* error */}
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </FieldGroup>

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

        {/* side Link */}
        <Link
          href={"/forgot-password"}
          className="text-end mt-2.5 text-blue-600 mb-6"
        >
          Forgot your password?
        </Link>

        {/* Error Message */}
        {error?.message && <ErrorMessage message={error.message} mb={"mb-9"} />}

        {/* Button */}
        <Button
          type="submit"
          disabled={
            isPending || (form.formState.isSubmitted && !form.formState.isValid)
          }
          className={`w-full font-medium text-sm text-white py-5 rounded-none cursor-pointer bg-blue-600 hover:bg-blue-700 ${isPending && "disabled:bg-gray-200 cursor-not-allowed text-gray-400"}`}
        >
          {isPending && <Spinner />}
          Login
        </Button>
      </form>
    </>
  );
}

import Link from "next/link";

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/shared/components/ui/field";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Input } from "@/shared/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/shared/components/ui/button";
import { Spinner } from "@/shared/components/ui/spinner";
import { ChevronRight } from "lucide-react";
import { forgotField } from "../../types/forgot";
import { forgotSchema } from "../../schemas/forgot-password.schema";
import useForgotPassword from "../../hooks/use-forget";

// props type
interface ITextPinfo {
  setEmail: (value: forgotField) => void;
  setSucces: (value: boolean) => void;
  ref: React.ForwardedRef<HTMLInputElement>;
  email: forgotField;
}

export default function StepOneForgot({
  setEmail,
  email,
  ref,
  setSucces,
}: ITextPinfo) {
  const { isPending, forgotPassword } = useForgotPassword();

  // Form
  const form = useForm<forgotField>({
    resolver: zodResolver(forgotSchema),
    defaultValues: {
      email: email.email,
      redirectUrl: `${window.location.origin}/reset-password`,
    },
  });

  // Sub fun
  const onSubmit: SubmitHandler<forgotField> = (value) => {
    // console.log(value);
    // console.log("sub");
    forgotPassword(value, {
      onSuccess: () => {
        // console.log("suc");
        setSucces(true);
        setEmail(value);
      },
      onError: () => {
        setSucces(false);
        // console.log("err");
      },
    });
  };

  return (
    <>
      <form onSubmit={form.handleSubmit(onSubmit)}>
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
                  ref={ref || field.ref}
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

        {/* Button */}
        <Button
          type="submit"
          disabled={
            isPending || (form.formState.isSubmitted && !form.formState.isValid)
          }
          className={`w-full mt-6 font-medium text-sm text-white py-5 rounded-none cursor-pointer bg-blue-600 hover:bg-blue-700 ${isPending && "disabled:bg-gray-200 cursor-not-allowed text-gray-400"}`}
        >
          {isPending && <Spinner />}
          Next
          <ChevronRight />
        </Button>

        {/* side Link */}
        <p className="font-medium text-sm text-gray-500 mt-9 text-center">
          Don’t have an account?
          <Link
            href={"/register"}
            className="text-blue-600 font-medium text-sm ms-2.5"
          >
            Create yours
          </Link>
        </p>
      </form>
    </>
  );
}

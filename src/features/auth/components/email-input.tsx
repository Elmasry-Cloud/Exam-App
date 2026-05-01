"use client";

import { Field, FieldLabel } from "@/shared/components/ui/field";
import { Input } from "@/shared/components/ui/input";

interface IEmailField {
  emailValue?: string;
  setEmailValue?: (value: string) => void;
  ref?: React.ForwardedRef<HTMLInputElement>;
}

export function EmailInput({ emailValue, setEmailValue, ref }: IEmailField) {
  return (
    <>
      <Field className="mb-4">
        <FieldLabel
          htmlFor="input-field-email"
          className="text-gray-800 font-medium text-base"
        >
          Email
        </FieldLabel>
        <Input
          ref={ref}
          value={emailValue}
          onChange={(e) => setEmailValue?.(e.target.value)}
          id="input-field-email"
          type="email"
          required
          placeholder="user@example.com"
          className="border border-gray-200 p-2.5 font-normal text-sm h-11.5 text-gray-400 rounded-none outline-0 focus-visible:ring-1 focus-visible:ring-blue-600"
        />
      </Field>
    </>
  );
}

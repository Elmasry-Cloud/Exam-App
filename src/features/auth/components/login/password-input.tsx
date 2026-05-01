"use client";
import { Field, FieldLabel } from "@/shared/components/ui/field";
import { Input } from "@/shared/components/ui/input";
import { EyeOff } from "lucide-react";
import { useState } from "react";

interface IPassword {
  passwordValue: string;
  updatePasswordValue: (value: string) => void;
  passwordLapel: string;
}

export function PasswordInput({
  passwordValue,
  updatePasswordValue,
  passwordLapel,
}: IPassword) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Field>
      <FieldLabel
        htmlFor="input-field-password"
        className={`text-gray-800 font-medium text-base ${passwordLapel == "Confirm New Password" && "mt-4"}`}
      >
        {passwordLapel}
        {passwordLapel == "New Password" || "Confirm New Password" ? (
          <span className="text-red-600">*</span>
        ) : null}
      </FieldLabel>
      <div className={`relative`}>
        <Input
          value={passwordValue}
          onChange={(e) => updatePasswordValue(e.target.value)}
          id="input-field-password"
          type={showPassword ? "text" : "password"}
          placeholder="********"
          required
          className={`border border-gray-200 p-2.5 font-normal text-sm h-11.5 text-gray-400 rounded-none outline-0 focus-visible:ring-1 focus-visible:ring-blue-600`}
        />
        <EyeOff
          size={18}
          className="absolute top-1/2 -translate-y-1/2 right-3.5 cursor-pointer text-gray-400"
          onClick={() => setShowPassword(!showPassword)}
        />
      </div>
    </Field>
  );
}

"use client";
import { Field, FieldLabel } from "@/shared/components/ui/field";
import { Input } from "@/shared/components/ui/input";
import { EyeOff } from "lucide-react";
import { useState } from "react";

interface IFieldsChangePass {
  label: string;
  value: string;
  // error: string;

  editValue: (value: string) => void;
}

export default function EditPassword({
  label,
  value,
  editValue,
}: IFieldsChangePass) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Field className={`${label === "Current Password" && "mb-6"}`}>
      <FieldLabel
        htmlFor={label}
        className="text-base font-medium text-gray-800"
      >
        {label}
      </FieldLabel>
      <div className={`relative`}>
        <Input
          value={value}
          // Change Value
          onChange={(e) => editValue(e.target.value)}
          id={label}
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

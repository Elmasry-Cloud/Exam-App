import { Field, FieldLabel } from "@/shared/components/ui/field";
import { Input } from "@/shared/components/ui/input";

export interface IUserName {
  usernameValue: string;
  updateUsernameValue: (value: string) => void;
  labelInfo: string;
  placeholderText: string;
}

export function UserNameInput({
  usernameValue,
  updateUsernameValue,
  labelInfo,
  placeholderText,
}: IUserName) {
  return (
    <Field className="mb-4">
      <FieldLabel
        htmlFor={`input-field-${labelInfo.toLocaleLowerCase()}`}
        className="text-gray-800 font-medium text-base"
      >
        {labelInfo}
        {labelInfo == "First name" || "Last name" || "Username" ? (
          <span className="text-red-600">*</span>
        ) : null}
      </FieldLabel>
      <Input
        value={usernameValue}
        onChange={(e) => updateUsernameValue(e.target.value)}
        id={`input-field-${labelInfo.toLocaleLowerCase()}`}
        type="text"
        required
        placeholder={placeholderText}
        className="border border-gray-200 p-2.5 font-normal text-sm h-11.5 text-gray-400 rounded-none outline-0 focus-visible:ring-1 focus-visible:ring-blue-600"
      />
    </Field>
  );
}

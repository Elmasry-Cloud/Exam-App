"use client";
import { registerSchema } from "@/features/auth/schemas/register/register-one.schema";
import { registerFields } from "@/features/auth/types/register";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/shared/components/ui/field";
import { Input } from "@/shared/components/ui/input";
import { Button } from "@base-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Pencil, X } from "lucide-react";
import { Session } from "next-auth";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import LayoutChangeEmail from "./layout-change-email";
import useChangeProfileDataAction from "../../hooks/account-hooks/use-change-profile-data";
import { signOut, useSession } from "next-auth/react";
import { toast } from "sonner";
import deleteAccount from "../../apis/account-apis/delete-acc.api";
import PhoneNumber from "@/features/auth/components/register/phone-input";
import LayoutDeleteAcc from "./layout-delete-acc";
import { isValidPhoneNumber } from "react-phone-number-input";

interface ISessionProps {
  session: Session | null;
  update: ReturnType<typeof useSession>["update"];
}

export default function AccountForm({ session, update }: ISessionProps) {
  const [showChangeEmail, setShowChangeEmail] = useState<boolean>(false);
  const [showDeleteAccount, setShowDeleteAccount] = useState<boolean>(false);
  const [phone, setPhone] = useState(session?.user.phone || "");

  const { error, isPending, changeProfileData } = useChangeProfileDataAction();

  // form
  const form = useForm<registerFields>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: session?.user.username,
      email: session?.user.email,
      password: "",
      confirmPassword: "",
      firstName: session?.user.firstName,
      lastName: session?.user.lastName,
      phone: session?.user.phone || "",
    },
  });

  // Change Email fun sub
  const submitChange = async () => {
    // const isValid = await form.trigger(["firstName", "lastName", "phone"]);

    const formatPhone = (phone: string) => {
      // Converts +201551234567 → 01551234567
      if (phone.startsWith("+20")) {
        return "0" + phone.slice(3);
      }
      return phone;
    };

    const isValid = await form.trigger(["firstName", "lastName"]);
    if (!isValid) return;

    const fieldsUpdated = {
      firstName: form.getValues("firstName"),
      lastName: form.getValues("lastName"),
      // phone: phone,
      // ...(phone && isValidPhoneNumber(phone) && { phone }),
      ...(phone && isValidPhoneNumber(phone) && { phone: formatPhone(phone) }),
      // ...(phone && phone.trim().length > 0 && { phone }),
    };
    changeProfileData(fieldsUpdated, {
      onSuccess(data) {
        // console.log(data);
        // console.log(fieldsUpdated);
        if (data.status) {
          update({
            user: {
              ...data.payload?.user,
              firstName: form.getValues("firstName"),
              lastName: form.getValues("lastName"),
              phone: phone,
            },
          });
          toast.custom(() => (
            <div className="p-4 w-full bg-gray-800 text-white text-sm font-medium flex items-center gap-2.5 shadow-custom">
              <Check size={18} className="text-green-600" />
              <span>Profile Updated</span>
            </div>
          ));
        } else {
          toast.custom(() => (
            <div className="p-4 w-full bg-gray-800 text-white text-sm font-medium flex items-center gap-2.5 shadow-custom">
              <X size={18} className="text-red-600" />
              <span>{data.message} Please Logout and Login Again</span>
            </div>
          ));
        }
      },
    });
  };

  // Cahnge Email Fun layout
  function changeEmail() {
    setShowChangeEmail(true);
  }

  return (
    <>
      {/* Form change account Data*/}
      <form className="flex flex-col gap-4">
        {/* First & Last Name */}
        <div className="first-last-name grid grid-cols-2 gap-2.5">
          {/* First Name */}
          <FieldGroup>
            <Controller
              name="firstName"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel
                    htmlFor="firstName"
                    className="text-gray-800 font-medium text-sm"
                  >
                    First name
                  </FieldLabel>
                  <Input
                    {...field}
                    id="firstName"
                    aria-invalid={fieldState.invalid}
                    placeholder="Ahmed"
                    autoComplete="firstName"
                    className="text-gray-800"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
          {/* Last Name */}
          <FieldGroup>
            <Controller
              name="lastName"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel
                    htmlFor="lastName"
                    className="text-gray-800 font-medium text-sm"
                  >
                    Last name
                  </FieldLabel>
                  <Input
                    {...field}
                    id="lastName"
                    aria-invalid={fieldState.invalid}
                    placeholder="Abdullah "
                    autoComplete="lastName"
                    className="text-gray-800"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </div>

        {/* User Name */}
        <FieldGroup>
          <Controller
            name="username"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel
                  htmlFor="username"
                  className="text-gray-800 font-medium text-sm"
                >
                  Username
                </FieldLabel>
                <Input
                  {...field}
                  id="username"
                  aria-invalid={fieldState.invalid}
                  placeholder="Abdullah "
                  autoComplete="username"
                  className="bg-gray-100 text-gray-600"
                  disabled
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </FieldGroup>

        {/* email input Field */}
        <FieldGroup>
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel
                  htmlFor="email"
                  className="text-gray-800 font-medium text-sm flex items-center justify-between"
                >
                  Email
                  <button
                    type="button"
                    onClick={() => changeEmail()}
                    className="text-blue-600 text-sm font-medium flex items-center gap-1.5 cursor-pointer"
                  >
                    <Pencil size={16} /> Change
                  </button>
                </FieldLabel>
                <Input
                  {...field}
                  id="email"
                  aria-invalid={fieldState.invalid}
                  placeholder="user@example.com"
                  autoComplete="email"
                  className="text-gray-800"
                  readOnly
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </FieldGroup>

        {/* Phone */}
        <PhoneNumber
          phone={phone}
          payload={session?.user.phone ?? ""}
          // setPhone={setPhone}
          setPhone={(value) => setPhone(value ?? "")}
        />

        {/* Buttons */}
        <Field orientation="horizontal" className="flex gap-3.5 mt-4">
          <Button
            type="button"
            // onClick={deleteacc}
            onClick={() => setShowDeleteAccount(true)}
            className="bg-red-50 text-red-600 text-sm font-medium grow cursor-pointer h-11.5 rounded-none"
          >
            Delete My Account
          </Button>
          <Button
            type="button"
            onClick={submitChange}
            className="bg-blue-600 text-white text-sm font-medium grow cursor-pointer h-11.5 rounded-none"
          >
            Save Changes
          </Button>
        </Field>
      </form>

      {/* layout-change-email */}
      {showChangeEmail && (
        <LayoutChangeEmail setShowChangeEmail={setShowChangeEmail} />
      )}

      {/* Layout delete account */}
      {showDeleteAccount && (
        <LayoutDeleteAcc setShowDeleteAccount={setShowDeleteAccount} />
      )}
    </>
  );
}

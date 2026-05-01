"use client";
import { registerSchema } from "@/features/auth/schemas/register/register-one.schema";
import { registerFields } from "@/features/auth/types/register";
import { Button } from "@base-ui/react/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import PhoneNumber from "./phone-input";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/shared/components/ui/field";
import { Input } from "@/shared/components/ui/input";
import Header from "../header";

export interface IAllData {
  allAccountData?: Partial<registerFields>;
  setAllAccountData: React.Dispatch<
    React.SetStateAction<Partial<registerFields>>
  >;
  setSteps?: (value: number) => void;
  submitError?: string;
}

export default function StepThreeRegister({
  setAllAccountData,
  setSteps,
}: IAllData) {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastrstName] = useState("");
  // const [username, setUserName] = useState("");
  const [phone, setPhone] = useState("");

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
    const isValid = await form.trigger([
      "username",
      "firstName",
      "lastName",
      "phone",
    ]);
    if (!isValid) return;
    // console.log(
    //   form.getValues("firstName"),
    //   form.getValues("lastName"),
    //   form.getValues("username"),
    //   phone,
    // );
    setAllAccountData((prev) => ({
      ...prev,
      firstName: form.getValues("firstName"),
      lastName: form.getValues("lastName"),
      username: form.getValues("username"),
      phone,
    }));

    setSteps && setSteps(4);
    // console.log("sa");
  };

  // function handelSubmit(e: { preventDefault: () => void }) {
  //   e.preventDefault();
  //   if (firstName !== "" && lastName !== "" && username !== "") {
  //     // setAllAccountData({ firstName, lastName, username, phone });
  //     setAllAccountData((prev) => ({
  //       ...prev,
  //       firstName,
  //       lastName,
  //       username,
  //       phone,
  //     }));

  //     setSteps && setSteps(4);
  //   }
  // }

  return (
    <>
      {/* header 1 */}
      <Header headerInfo={"Create Account"} />

      {/* Header 2 */}
      <h2 className="mt-4 text-blue-600 font-inter font-bold text-2xl">
        Tell us more about you
      </h2>

      {/* Form Step 3 */}
      <form className="mt-8 flex flex-col gap-4">
        {/* First & Last Name */}
        <div className="first-last-name grid grid-cols-2 gap-2.5">
          {/* Sirst Name */}
          <FieldGroup>
            <Controller
              name="firstName"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="firstName">First name</FieldLabel>
                  <Input
                    {...field}
                    id="firstName"
                    aria-invalid={fieldState.invalid}
                    placeholder="Ahmed"
                    autoComplete="firstName"
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
                  <FieldLabel htmlFor="lastName">Last name</FieldLabel>
                  <Input
                    {...field}
                    id="lastName"
                    aria-invalid={fieldState.invalid}
                    placeholder="Abdullah "
                    autoComplete="lastName"
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
                <FieldLabel htmlFor="username">Username</FieldLabel>
                <Input
                  {...field}
                  id="username"
                  aria-invalid={fieldState.invalid}
                  placeholder="Abdullah "
                  autoComplete="username"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </FieldGroup>

        {/* Phone */}
        <PhoneNumber phone={phone} setPhone={setPhone} />

        {/* Button */}
        <Button
          type="button"
          onClick={handleNext}
          // disabled={
          //   isPending || (form.formState.isSubmitted && !form.formState.isValid)
          // }
          className={`flex items-center justify-center gap-2.5 w-full mt-10 font-medium text-sm text-black rounded-none h-11.5 cursor-pointer bg-blue-50 hover:bg-blue-100 border border-blue-600`}
        >
          {/* {isPending && <Spinner />} */}
          Next
          <ChevronRight size={16} />
        </Button>
      </form>
    </>
  );
}

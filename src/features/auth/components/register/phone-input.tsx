"use client";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { isValidPhoneNumber } from "react-phone-number-input";
import { z } from "zod";
import { PhoneInput } from "@/shared/components/ui/phone-input";

// Zod schema for phone validation
const FormSchema = z.object({
  phone: z
    .string()
    .min(1, "Phone number is required")
    .refine((value) => value && isValidPhoneNumber(value), {
      message: "Invalid phone number",
    }),
});
type FormData = z.infer<typeof FormSchema>;

interface IPhone {
  phone?: string;
  // setPhone?: (value: string) => void;
  setPhone?: (value: string | undefined) => void;
  // updatePhone?: (value: string) => void;
  accountLabelSize?: string;
  payload?: string;
}

export default function PhoneNumber({
  phone,
  setPhone,
  accountLabelSize,
  payload,
  // updatePhone
}: IPhone) {
  // console.log(phone);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(FormSchema),
    // defaultValues: { phone: payload ? payload : "" },
    defaultValues: { phone: payload ?? "" },
    // defaultValues: { phone: "+201012345678" },
  });

  const onSubmit = (data: FormData) => {
    alert(`You submitted the following values: ${JSON.stringify(data)}`);
  };

  return (
    <div className={`relative`}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-3"
      >
        {/* Phone Input Field */}
        <div className="flex flex-col">
          <label
            htmlFor="phone"
            className={`text-gray-800 font-medium ${accountLabelSize ? "text-sm mb-1.5" : "text-base"}`}
          >
            Phone
          </label>
          <Controller
            name="phone"
            control={control}
            defaultValue="egypt"
            render={({ field }) => (
              <PhoneInput
                {...field}
                id="phone"
                // defaultValue={payload && payload?.user.phone}
                // defaultValue={payload?.user.phone}
                value={field.value}
                // value={phone}
                // onChange={field.onChange}
                suppressHydrationWarning
                // onChange={(value) => setPhone && setPhone(value)}
                onChange={(value) => {
                  field.onChange(value ?? "");
                  setPhone?.(value ?? "");
                }}
                placeholder="1012345678"
                defaultCountry="EG"
                international
                className="w-full"
              />
            )}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>
      </form>
    </div>
  );
}

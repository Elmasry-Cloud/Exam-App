import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/shared/components/ui/input-otp";

type OTPInputProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function OTP_Input({ value, onChange }: OTPInputProps) {
  return (
    <div className="mb-4 py-2.5 flex flex-col items-center">
      <InputOTP maxLength={6} value={value} onChange={onChange}>
        <InputOTPGroup className="gap-4">
          <InputOTPSlot
            index={0}
            className="border border-gray-200 text-sm rounded-none focus-visible:ring-1 focus-visible:ring-blue-600"
          />
          <InputOTPSlot
            index={1}
            className="border border-gray-200 text-sm rounded-none focus-visible:ring-1 focus-visible:ring-blue-600"
          />
          <InputOTPSlot
            index={2}
            className="border border-gray-200 text-sm rounded-none focus-visible:ring-1 focus-visible:ring-blue-600"
          />
          <InputOTPSlot
            index={3}
            className="border border-gray-200 text-sm rounded-none focus-visible:ring-1 focus-visible:ring-blue-600"
          />
          <InputOTPSlot
            index={4}
            className="border border-gray-200 text-sm rounded-none focus-visible:ring-1 focus-visible:ring-blue-600"
          />
          <InputOTPSlot
            index={5}
            className="border border-gray-200 text-sm rounded-none focus-visible:ring-1 focus-visible:ring-blue-600"
          />
        </InputOTPGroup>
      </InputOTP>
      <p className="mt-6 font-medium text-sm text-gray-500">
        You can request another code in: 60s
      </p>
      {/* <p className="mt-6 font-medium text-sm text-gray-500">
          Didn’t receive the code?{" "}
          <span className="text-blue-600 cursor-pointer">Resend</span>
        </p> */}
    </div>
  );
}

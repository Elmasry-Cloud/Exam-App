import StepThreeForgotPass from "@/features/auth/components/forgot-password/step-three-forgot";
import Link from "next/link";

export default function ResetPasswordPage() {
  return (
    <main className="flex flex-col items-center justify-center">
      <div className="w-full max-w-113">
        <StepThreeForgotPass />

        {/* side Link */}
        <p className="font-medium text-sm text-gray-500 text-center mt-9">
          Don’t have an account?
          <Link href={"/register"} className="text-blue-600 ms-2">
            Create yours
          </Link>
        </p>
      </div>
    </main>
  );
}

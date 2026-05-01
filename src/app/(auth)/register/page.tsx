import RegisterSteps from "@/features/auth/components/register/register-steps";

export default function RegisterPage() {
  return (
    <main className="flex items-center justify-center">
      <div className="flex flex-col w-full max-w-113">
        {/* register form */}
        <RegisterSteps />
      </div>
    </main>
  );
}

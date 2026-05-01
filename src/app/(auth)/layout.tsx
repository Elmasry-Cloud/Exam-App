import AuthSide from "@/features/auth/components/auth-side";

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="grid grid-cols-2 min-h-screen">
      <AuthSide />
      {children}
    </main>
  );
}

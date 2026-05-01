"use client";
import Header from "@/features/auth/components/header";
import LoginForm from "@/features/auth/components/login/login-form";
// import { useState } from "react";
// import { signIn } from "next-auth/react";
import Link from "next/link";

export default function LoginPage() {
  // // Khaled_Ali
  // const [username, setUserName] = useState("Khaled_Ali");
  // // 01007085234@Khaled
  // const [password, setPassword] = useState("01007085234@Ali");
  // // const [token, setToken] = useState<string>("");

  // const [errorMessage, setErrorMessage] = useState<string | undefined>();

  // async function handelSubmit(e: { preventDefault: () => void }) {
  //   e.preventDefault();
  //   // const res = await signIn("credentials", {
  //   //   username,
  //   //   password,
  //   //   redirect: false,
  //   // });
  //   // if (!res?.ok) {
  //   //   setErrorMessage(res?.error || "errorrrrrr");
  //   //   return;
  //   // }
  //   // location.href = "/diplomas";

  //   const req = await signIn("credentials", {
  //     username,
  //     password,
  //     redirect: false,
  //   });

  //   if (!req?.ok) {
  //     setErrorMessage(req?.error || "Something went wrong");
  //     return null;
  //   }
  //   location.href = "/";

  //   // console.log(req);

  //   // { username, password }
  // }
  return (
    <main className="flex flex-col items-center justify-center">
      <div className="flex flex-col w-full max-w-113 gap-10">
        {/* header */}
        <Header headerInfo={"Login"} />

        {/* login form */}
        <LoginForm />

        {/* Don't have account text */}
        <p className="font-medium text-sm text-gray-500 text-center">
          Don’t have an account?{" "}
          <Link href={"/register"} className="text-blue-600">
            Create yours
          </Link>{" "}
        </p>
      </div>
    </main>
  );
}

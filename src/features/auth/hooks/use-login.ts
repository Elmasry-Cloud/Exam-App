import { useMutation } from "@tanstack/react-query";
import { getSession, signIn } from "next-auth/react";
import { LoginFields } from "../types/auth";

export default function useLogin() {
  return useMutation({
    mutationFn: async (fields: LoginFields) => {
      const res = await signIn("credentials", {
        username: fields.username,
        password: fields.password,
        redirect: false,
      });
      if (!res?.ok) throw new Error(res?.error || "Faild to login");
      return res;
    },
    async onSuccess() {
      // const callbackUrl =
      //   new URLSearchParams(location.search).get("callbackUrl") || "/";
      // location.href = callbackUrl;
      const session = await getSession();
      const role = session?.user?.role;

      if (role === "ADMIN") {
        location.href = "/dashboard";
      } else {
        location.href = "/";
      }
    },
  });
}

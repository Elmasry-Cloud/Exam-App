import { HEADERS } from "@/shared/constant/header-api.constant";
import { ApiRes } from "@/shared/types/api-res";

interface IVerifyCode {
  email: string;
  code: string;
}

interface IVerifyCodeSuccess {
  message: string;
}

export default async function verifyCodeAPI({ email, code }: IVerifyCode) {
  const response = await fetch(
    "https://exam-app.elevate-bootcamp.cloud/api/auth/confirm-email-verification",
    {
      method: "POST",
      body: JSON.stringify({ email, code }),
      headers: {
        ...HEADERS.header,
      },
    },
  );
  const data: ApiRes<IVerifyCodeSuccess> = await response.json();

  if (data?.status !== true) {
    throw new Error(data?.message);
  }

  //   if (data?.payload) {
  //     const cookiStore = await cookies();
  //     const token = cookiStore.set("token", data?.payload.token, {
  //       httpOnly: true,
  //       secure: process.env.NODE_ENV === "production",
  //       maxAge: 60 * 60 * 24 * 7,
  //       sameSite: "lax",
  //     });
  //   }

  // console.log(data);
  return data;
}

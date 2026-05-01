import { HEADERS } from "@/shared/constant/header-api.constant";
import { ApiRes } from "@/shared/types/api-res";
import { forgotField, IforgotRes } from "../../types/forgot";

export default async function forgotPassword(email: forgotField) {
  const response = await fetch(
    "https://exam-app.elevate-bootcamp.cloud/api/auth/forgot-password",
    {
      method: "POST",
      body: JSON.stringify(email),
      headers: {
        ...HEADERS.header,
      },
    },
  );
  const data: ApiRes<IforgotRes> = await response.json();
  // console.log(data);
  if (data.status !== true) {
    // console.log(data.message);
    throw new Error(data.message);
  }
  return data;
}

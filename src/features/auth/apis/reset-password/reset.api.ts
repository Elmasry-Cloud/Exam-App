import { HEADERS } from "@/shared/constant/header-api.constant";
import { ApiRes } from "@/shared/types/api-res";
import { IResetRes, resetFields } from "../../types/reset";

// interface IResetFields {
//   // token: string;
//   // newPassword: string;
//   // confirmPassword: string;
// }

export default async function resetPassword(fields: resetFields) {
  const response = await fetch(
    "https://exam-app.elevate-bootcamp.cloud/api/auth/reset-password",
    {
      method: "POST",
      body: JSON.stringify(fields),
      headers: {
        ...HEADERS.header,
      },
    },
  );
  const data: ApiRes<IResetRes> = await response.json();

  if (data.status !== true) {
    // console.log(data.message);
    throw new Error(data.message);
  }
  return data;
}

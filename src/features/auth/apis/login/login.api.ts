import "server-only";
import { HEADERS } from "@/shared/constant/header-api.constant";
import { ApiRes } from "@/shared/types/api-res";
import { ILoginRes, LoginFields } from "../../types/auth";

export default async function loginApi(LoginFields: LoginFields) {
  console.log(process.env.API, "ssssssssss");
  const res = await fetch(
    `https://exam-app.elevate-bootcamp.cloud/api/auth/login`,
    {
      method: "POST",
      body: JSON.stringify(LoginFields),
      headers: {
        ...HEADERS.header,
      },
    },
  );
  const data: ApiRes<ILoginRes> = await res.json();

  return data;
}

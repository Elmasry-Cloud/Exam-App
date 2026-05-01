"use server";
import { IUser } from "../../types/user";
import { ApiRes } from "@/shared/types/api-res";
import { registerFields } from "../../types/register";
import { HEADERS } from "@/shared/constant/header-api.constant";

interface ISubmitFieldsDataSuccess {
  user: IUser;
  token: string;
}

export default async function submitAccData(fields: registerFields) {
  const response = await fetch(
    "https://exam-app.elevate-bootcamp.cloud/api/auth/register",
    {
      method: "POST",
      body: JSON.stringify(fields),
      headers: {
        ...HEADERS.header,
      },
    },
  );
  const data: ApiRes<ISubmitFieldsDataSuccess> = await response.json();

  if (data?.status !== true) {
    throw new Error(data?.message);
  }

  // if (data?.payload) {
  //   const cookiStore = await cookies();
  //   const token = cookiStore.set("token", data?.payload.token, {
  //     httpOnly: true,
  //     secure: process.env.NODE_ENV === "production",
  //     maxAge: 60 * 60 * 24 * 7,
  //     sameSite: "lax",
  //   });
  // }

  // console.log(data);
  return data;
}

"use server";
import { IUser } from "@/features/auth/types/user";
import getNextAuthToken from "@/shared/lib/utils/get-next-auth-token";
import { ApiRes } from "@/shared/types/api-res";
import { redirect } from "next/navigation";

export default async function getUserData() {
  const jwtToken = await getNextAuthToken();
  const token = jwtToken?.token;
  // console.log(token);
  const response = await fetch(`${process.env.API}users/profile`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const userProfileData: ApiRes<IUser> = await response.json();
  // console.log(userProfileData);

  if (userProfileData?.status !== true) {
    // throw new Error(userProfileData?.message);
    redirect("/");
  }
  return userProfileData.payload;
}

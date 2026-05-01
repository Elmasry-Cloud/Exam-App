"use server";

import { IUser } from "@/features/auth/types/user";
import getNextAuthToken from "@/shared/lib/utils/get-next-auth-token";
import { ApiRes } from "@/shared/types/api-res";

export interface IProfileData {
  firstName?: string;
  lastName?: string;
  profilePhoto?: string;
  phone?: string;
}
export default async function changeProfileData(fields: IProfileData) {
  const jwtToken = await getNextAuthToken();
  const token = jwtToken?.token;

  console.log(fields);
  const res = await fetch(`${process.env.API}users/profile`, {
    method: "PATCH",
    body: JSON.stringify(fields),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data: ApiRes<{ user: IUser }> = await res.json();
  return data;
}

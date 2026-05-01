"use server";

import getNextAuthToken from "@/shared/lib/utils/get-next-auth-token";

interface IFields {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export default async function changePasswordAction(fields: IFields) {
  const jwtToken = await getNextAuthToken();
  const token = jwtToken?.token;

  if (!token) {
    throw new Error("No Token Found");
  }

  const res = await fetch(`${process.env.API}users/change-password`, {
    method: "POST",
    body: JSON.stringify(fields),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  // 01007085234@Khaled
  // 01007085234@Ali
  const data = res.json();
  //   console.log(data);
  // if (!data.status) {
  //   //   throw new Error("Something went wrong");
  //   throw new Error("Validation failed");
  // }
  // console.log(data);
  return data;
}

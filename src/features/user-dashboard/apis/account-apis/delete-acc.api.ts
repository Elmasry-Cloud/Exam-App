"use server";
import getNextAuthToken from "@/shared/lib/utils/get-next-auth-token";
import { ApiRes } from "@/shared/types/api-res";

export default async function deleteAccount() {
  const jwtToken = await getNextAuthToken();
  const token = jwtToken?.token;

  // console.log("token:", token);

  const res = await fetch(
    `https://exam-app.elevate-bootcamp.cloud/api/users/account`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    },
  );
  if (!res.ok) {
    throw new Error("Faild to fetch data");
  }

  const data: ApiRes<{ message: string }> = await res.json();
  if (!data.status) {
    throw new Error(data.message);
    // console.log("error");
  }
  // console.log(data);
  return data;
}

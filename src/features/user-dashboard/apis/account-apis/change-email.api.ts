import getNextAuthToken from "@/shared/lib/utils/get-next-auth-token";
import { ApiRes } from "@/shared/types/api-res";

interface IChangeEmail {
  newEmail: string;
}
export default async function changeEmailAPI(field: IChangeEmail) {
  const jwtToken = await getNextAuthToken();
  const token = jwtToken?.token;

  const res = await fetch(
    `https://exam-app.elevate-bootcamp.cloud/api/users/email/request`,
    {
      method: "POST",
      body: JSON.stringify(field),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    },
  );

  const data: ApiRes<{ message: string; code: string }> = await res.json();
  if (!data.status) {
    throw new Error(data.message);
    // console.log("error");
  }
  return data;
}

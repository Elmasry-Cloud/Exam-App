import getNextAuthToken from "@/shared/lib/utils/get-next-auth-token";
import { ApiRes } from "@/shared/types/api-res";

export default async function deleteDiploma(diplomaId: string) {
  const jwtToken = await getNextAuthToken();
  const token = jwtToken?.token;
  //   console.log(token, "ssssssssssssssssssssssssssssssssss");

  const res = await fetch(
    `https://exam-app.elevate-bootcamp.cloud/api/diplomas/${diplomaId}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  const payload: ApiRes<{
    message: "string";
  }> = await res.json();

  if (payload.status !== true) {
    throw new Error(payload.message);
  }
  // console.log(payload);
  return payload;
}

import { IDiplomaData } from "@/features/user-dashboard/types/diplomas";
import getNextAuthToken from "@/shared/lib/utils/get-next-auth-token";
import { ApiRes } from "@/shared/types/api-res";

interface IFieldsData {
  title?: string;
  description?: string;
  image?: string;
}

export default async function addDiploma(fields: IFieldsData) {
  const jwtToken = await getNextAuthToken();
  const token = jwtToken?.token;

  // console.log(fields);

  const res = await fetch(
    `https://exam-app.elevate-bootcamp.cloud/api/diplomas`,
    {
      method: "POST",
      body: JSON.stringify(fields),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    },
  );

  const payload: ApiRes<IDiplomaData> = await res.json();

  if (payload.status !== true) {
    throw new Error(payload.message);
  }
  // console.log(payload);
  return payload;
}

import { IDiplomaData } from "@/features/user-dashboard/types/diplomas";
import getNextAuthToken from "@/shared/lib/utils/get-next-auth-token";
import { ApiRes } from "@/shared/types/api-res";
import { editDiplomaFields } from "../../types/diplomas-page/edit-diploma";

export default async function updateDiploma({
  fields,
  id,
}: {
  fields: editDiplomaFields;
  id: string;
}) {
  const jwtToken = await getNextAuthToken();
  const token = jwtToken?.token;

  // console.log(fields);
  // console.log(id);

  const res = await fetch(
    `https://exam-app.elevate-bootcamp.cloud/api/diplomas/${id}`,
    {
      method: "PUT",
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

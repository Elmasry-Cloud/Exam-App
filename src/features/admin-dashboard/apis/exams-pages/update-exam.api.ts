import getNextAuthToken from "@/shared/lib/utils/get-next-auth-token";
import { ApiRes } from "@/shared/types/api-res";
import { editExamFields } from "../../types/exams-pages/add-edit-exam";
import { IExamData } from "@/features/user-dashboard/types/exams";

export default async function updateExam({
  fields,
  id,
}: {
  fields: editExamFields;
  id: string;
}) {
  const jwtToken = await getNextAuthToken();
  const token = jwtToken?.token;

  //   console.log(fields);
  //   console.log(id);

  const res = await fetch(
    `https://exam-app.elevate-bootcamp.cloud/api/exams/${id}`,
    {
      method: "PUT",
      body: JSON.stringify(fields),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    },
  );

  const payload: ApiRes<IExamData> = await res.json();

  if (payload.status !== true) {
    throw new Error(payload.message);
  }
  //   console.log(payload);
  return payload;
}

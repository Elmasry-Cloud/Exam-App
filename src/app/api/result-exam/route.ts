import { IExamSubmissionResponse } from "@/features/user-dashboard/types/results";
import getNextAuthToken from "@/shared/lib/utils/get-next-auth-token";
import { ApiRes } from "@/shared/types/api-res";

export async function GET() {
  const jwtToken = await getNextAuthToken();
  const token = jwtToken?.token;
  const res = await fetch(
    `https://exam-app.elevate-bootcamp.cloud/api/submissions`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    },
  );
  const data: ApiRes<IExamSubmissionResponse> = await res.json();

  if (!data.status) {
    console.log(data.message);
    throw new Error(data?.message);
  }
  console.log(data);
  return Response.json(data);
}
// export async function GET() {
//   const jwtToken = await getNextAuthToken();
//   const token = jwtToken?.token;
//   const res = await fetch(
//     `https://exam-app.elevate-bootcamp.cloud/api/submissions`,
//     {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     },
//   );
//   const data: ApiResponse<IExamSubmissionResponse> = await res.json();

//   if (!data.status) {
//     console.log(data.message);
//     throw new Error(data?.message);
//   }
//   console.log(data);
//   return Response.json(data);
// }

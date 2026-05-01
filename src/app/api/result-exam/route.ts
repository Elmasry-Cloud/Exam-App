import { IExamSubmissionResponse } from "@/lib/types/schemas/exam-submission";
import { ApiResponse } from "@/lib/types/schemas/success-error-response";
import getNextAuthToken from "@/lib/utils/get-next-auth-token";

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
  const data: ApiResponse<IExamSubmissionResponse> = await res.json();

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

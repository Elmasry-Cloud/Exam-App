import { IExamSubmissionResponse } from "@/features/user-dashboard/types/results";
import getNextAuthToken from "@/shared/lib/utils/get-next-auth-token";
import { ApiRes } from "@/shared/types/api-res";
import { NextRequest } from "next/server";

// export async function GET(
//   req: NextRequest,
//   { params }: { params: { id: string } },
// ) {
//   const { id } = params;
//   const jwtToken = await getNextAuthToken();
//   const token = jwtToken?.token;
//   const res = await fetch(
//     `https://exam-app.elevate-bootcamp.cloud/api/submissions/${id}`,
//     {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     },
//   );
//   if (!res.ok) {
//     console.error("في مشكلة في الـ API");
//     return;
//   }
//   const data: ApiResponse<IExamSubmissionResponse> = await res.json();

//   if (!data.status) {
//     console.log(data.message);
//     return Response.json(
//       { status: false, message: data?.message },
//       { status: 400 },
//     );
//   }
//   console.log(data);
//   return Response.json(data);
// }

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  console.log(params);

  const { id } = await params;
  const jwtToken = await getNextAuthToken();
  const token = jwtToken?.token;

  const res = await fetch(`${process.env.API}submissions/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error("External API error:", res.status, errorText); // هتشوف السبب الحقيقي هنا في الـ terminal
    return Response.json(
      { status: false, message: "فشل في جلب البيانات" },
      { status: res.status },
    );
  }

  const data: ApiRes<IExamSubmissionResponse> = await res.json();

  if (!data.status) {
    return Response.json(
      { status: false, message: data?.message },
      { status: 400 },
    );
  }

  return Response.json(data);
}

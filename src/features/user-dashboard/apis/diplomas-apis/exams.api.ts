"use server";

import { ApiRes } from "@/shared/types/api-res";
import getNextAuthToken from "@/shared/lib/utils/get-next-auth-token";
import { IDiplomaRes } from "../../types/diplomas";

export default async function GetExams(id: { id: string }) {
  const jwtToken = await getNextAuthToken();
  const token = jwtToken?.token;
  const res = await fetch(`${process.env.API}questions/exam/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data: ApiRes<IDiplomaRes> = await res.json();
  if (!res.ok) {
    throw new Error(data.message || "Failed to fetch diploma data");
  }
  console.log(data);
  return data;
}

// "use server";

// import { ApiResponse } from "@/lib/schemas/success-error-response";
// import { cookies } from "next/headers";
// import { IDiploma } from "../_type/diplomas";

// export default async function GetExamQuestions({ id }: { id: number }) {
//   const token = (await cookies()).get("token")?.value;
//   const res = await fetch(
//     `https://exam-app.elevate-bootcamp.cloud/api/questions/exam/${id}`,
//     {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     },
//   );
//   const data: ApiResponse<IDiploma> = await res.json();
//   if (!res.ok) {
//     throw new Error(data.message || "Failed to fetch diploma data");
//   }
//   console.log(data);
//   return data;
// }

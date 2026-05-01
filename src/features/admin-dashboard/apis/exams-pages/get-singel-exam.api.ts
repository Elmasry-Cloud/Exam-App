"use server";
import { IExamData } from "@/features/user-dashboard/types/exams";
import getNextAuthToken from "@/shared/lib/utils/get-next-auth-token";
import { ApiRes } from "@/shared/types/api-res";

export default async function GetSingelExam({ id }: { id: string }) {
  const jwtToken = await getNextAuthToken();
  const token = jwtToken?.token;
  const res = await fetch(`${process.env.API}exams/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data: ApiRes<{ exam: IExamData }> = await res.json();
  if (!res.ok || data.status !== true) {
    throw new Error(data.message || "Failed to fetch exam data");
  }
  // console.log(data);
  return data;
}

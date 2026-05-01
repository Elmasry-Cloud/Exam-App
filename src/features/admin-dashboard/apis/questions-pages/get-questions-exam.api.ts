"use server";
import { IQuestion } from "@/features/user-dashboard/types/questions-exam";
import getNextAuthToken from "@/shared/lib/utils/get-next-auth-token";
import { ApiRes } from "@/shared/types/api-res";

export default async function getQuestionsSingelExam({
  examId,
  sortBy,
  sortOrder,
}: {
  examId: string;
  sortBy?: string;
  sortOrder?: string;
}) {
  const jwtToken = await getNextAuthToken();
  const token = jwtToken?.token;
  const res = await fetch(
    `${process.env.API}questions/exam/${examId}?sortBy=${sortBy}&sortOrder=${sortOrder}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    },
  );
  const data: ApiRes<{ questions: IQuestion[] }> = await res.json();
  if (!res.ok || data.status !== true) {
    throw new Error(data.message || "Failed to fetch exam data");
  }
  // console.log(data);
  return data;
}

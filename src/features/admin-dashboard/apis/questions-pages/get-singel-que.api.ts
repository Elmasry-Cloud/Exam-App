"use server";
import { IQuestion } from "@/features/user-dashboard/types/questions-exam";
import getNextAuthToken from "@/shared/lib/utils/get-next-auth-token";
import { ApiRes } from "@/shared/types/api-res";

export default async function getSingelQuestion({
  questionId,
}: {
  questionId: string;
}) {
  const jwtToken = await getNextAuthToken();
  const token = jwtToken?.token;
  const res = await fetch(`${process.env.API}questions/${questionId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data: ApiRes<{ question: IQuestion }> = await res.json();
  if (!res.ok || data.status !== true) {
    throw new Error(data.message || "Failed to fetch exam data");
  }
  // console.log(data);
  return data;
}

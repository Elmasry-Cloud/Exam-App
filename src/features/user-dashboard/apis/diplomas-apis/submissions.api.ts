"use server";
import getNextAuthToken from "@/shared/lib/utils/get-next-auth-token";

interface IAnswers {
  answerId: string;
  questionId: string;
  examId: string;
  answers: string;
  startedAt: string;
}

export default async function submissionsAnswers(answers: IAnswers[]) {
  const jwtToken = await getNextAuthToken();
  const token = jwtToken?.token;

  const res = await fetch(`${process.env.API}submissions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(answers),
  });
  const data = await res.json();

  if (!data.status) {
    // console.log(data.message);
    throw new Error(data?.message);
  }
  return data;
}

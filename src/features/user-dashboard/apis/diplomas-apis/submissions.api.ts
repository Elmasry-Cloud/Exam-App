"use server";
import getNextAuthToken from "@/shared/lib/utils/get-next-auth-token";

interface IAnswer {
  questionId: string;
  answerId: string;
}

interface ISubmission {
  examId: string;
  answers: IAnswer[];
  startedAt: string;
}

export default async function submissionsAnswers(answers: ISubmission) {
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

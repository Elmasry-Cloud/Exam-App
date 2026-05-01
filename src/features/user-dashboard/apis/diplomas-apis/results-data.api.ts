import getNextAuthToken from "@/shared/lib/utils/get-next-auth-token";

interface IAnswers {
  answerId: string;
  questionId: string;
  examId: string;
  answers: string;
  startedAt: string;
}

export default async function resultsData() {
  const jwtToken = await getNextAuthToken();
  const token = jwtToken?.token;

  const res = await fetch(`${process.env.API}submissions`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();

  if (!data.status) {
    console.log(data.message);
    throw new Error(data?.message);
  }
  console.log(data);
  return data;
}

// By id
export async function resultsDataById(id: string) {
  const jwtToken = await getNextAuthToken();
  const token = jwtToken?.token;

  const res = await fetch(`${process.env.API}submissions/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();

  if (!data.status) {
    console.log(data.message);
    throw new Error(data?.message);
  }
  console.log(data);
  return data;
}

"use server";

import getNextAuthToken from "@/shared/lib/utils/get-next-auth-token";

export default async function GetQuestions(examId: string) {
  const jwtToken = await getNextAuthToken();
  const token = jwtToken?.token;
  const res = await fetch(`${process.env.API}questions/exam/${examId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  // if (!res.ok) {
  //   throw new Error("Failed to fetch questions");
  // }
  const data = await res.json();
  // if (data.status !== "success") {
  //   throw new Error("Failed to fetch questions");
  // }
  console.log(data);
  return data;
}

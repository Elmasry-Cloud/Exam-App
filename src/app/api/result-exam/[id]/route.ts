import { IExamSubmissionResponse } from "@/features/user-dashboard/types/results";
import getNextAuthToken from "@/shared/lib/utils/get-next-auth-token";
import { ApiRes } from "@/shared/types/api-res";
import { NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
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
    console.error("External API error:", res.status, errorText);
    return Response.json(
      { status: false, message: "Faild" },
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

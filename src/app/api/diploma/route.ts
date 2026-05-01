// Not used

import { IDiplomaRes } from "@/features/user-dashboard/types/diplomas";
import getNextAuthToken from "@/shared/lib/utils/get-next-auth-token";
import { ApiRes } from "@/shared/types/api-res";

export async function GET() {
  const jwtToken = await getNextAuthToken();
  const token = jwtToken?.token;

  const res = await fetch(`${process.env.API}diplomas?limit=100`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error("Faild to fetch data");
  }

  const data: ApiRes<IDiplomaRes> = await res.json();
  // console.log(data);
  if (!data.status) {
    return Response.json(
      { status: false, message: data?.message },
      { status: 400 },
    );
  }
  return Response.json(data);
}

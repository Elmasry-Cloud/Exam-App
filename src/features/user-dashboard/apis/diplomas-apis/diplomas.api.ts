"use server";

import getNextAuthToken from "@/shared/lib/utils/get-next-auth-token";
import { ApiRes } from "@/shared/types/api-res";
import { IDiplomaRes } from "../../types/diplomas";

export default async function getDeplomas({
  pageParam,
  limit,
  search,
  sortBy,
  sortOrder,
}: {
  pageParam: number;
  limit: number;
  search?: string;
  sortBy?: string;
  sortOrder?: string;
}) {
  // const token = (await cookies()).get(process.env.NEXT_AUTH_TOKEN!)?.value;
  const jwtToken = await getNextAuthToken();
  const token = jwtToken?.token;
  // console.log(token);
  const params = new URLSearchParams({
    limit: String(limit),
    page: String(pageParam),
    ...(search && { search }),
    ...(sortBy && { sortBy }),
    ...(sortOrder && { sortOrder }),
  });

  const res = await fetch(`${process.env.API}diplomas?${params}`, {
    method: "GET",
    headers: {
      // "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  // const res = await fetch(
  //   `${process.env.API}diplomas?limit=${limit}&page=${pageParam}&search=${search}&sortBy=${sortBy}&sortOrder=${sortOrder}`,
  //   {
  //     method: "GET",
  //     headers: {
  //       // "Content-Type": "application/json",
  //       Authorization: `Bearer ${token}`,
  //     },
  //   },
  // );
  const payload: ApiRes<IDiplomaRes> = await res.json();
  if (payload.status !== true) {
    throw new Error(payload.message);
  }
  // console.log(payload);
  return payload;
}

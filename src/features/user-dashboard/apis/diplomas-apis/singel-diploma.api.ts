"use server";
import getNextAuthToken from "@/shared/lib/utils/get-next-auth-token";
import { ApiRes } from "@/shared/types/api-res";
import { ISingelDiplomaIdRes } from "../../types/diploma-id";

export default async function GetSingelDiploma({ id }: { id: string }) {
  const jwtToken = await getNextAuthToken();
  const token = jwtToken?.token;
  const res = await fetch(`${process.env.API}diplomas/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data: ApiRes<ISingelDiplomaIdRes> = await res.json();
  if (!res.ok || data.status !== true) {
    throw new Error(data.message || "Failed to fetch diploma data");
  }
  // console.log(data);
  return data;
}

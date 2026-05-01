"use server";
import { IExamsRes } from "@/features/user-dashboard/types/exams";
import { HEADERS } from "@/shared/constant/header-api.constant";
import getNextAuthToken from "@/shared/lib/utils/get-next-auth-token";
import { ApiRes } from "@/shared/types/api-res";

export default async function getAllExams({
  pageParam,
  limit,
  search,
  sortBy,
  sortOrder,
  diplomaId,
}: {
  pageParam: number;
  limit: number;
  search?: string;
  sortBy?: string;
  sortOrder?: string;
  diplomaId?: string;
}) {
  const jwtToken = await getNextAuthToken();
  const token = jwtToken?.token;

  const res = await fetch(
    // `${process.env.API}exams?page=${pageParam}&limit=${limit}&search=${search}&sortBy=${sortBy}&sortOrder=${sortOrder}&diplomaId=${diplomaId}`,
    `${process.env.API}exams?page=${pageParam}&limit=${limit}${search ? `&search=${search}` : ""}${sortBy ? `&sortBy=${sortBy}` : ""}${sortOrder ? `&sortOrder=${sortOrder}` : ""}${diplomaId ? `&diplomaId=${diplomaId}` : ""}`,
    {
      method: "GET",
      headers: {
        ...HEADERS.header,
        Authorization: `Bearer ${token}`,
      },
    },
  );

  if (!res.ok) throw new Error("Faild to fetch");

  const data: ApiRes<IExamsRes> = await res.json();

  if (!data.status) throw new Error(data.message);

  return data;
}

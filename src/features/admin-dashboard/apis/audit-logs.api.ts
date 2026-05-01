import { HEADERS } from "@/shared/constant/header-api.constant";
import getNextAuthToken from "@/shared/lib/utils/get-next-auth-token";

export default async function getAuditLogs() {
  const jwt = await getNextAuthToken();

  const token = await jwt?.token;
  //   console.log(token);
  const res = await fetch(`${process.env.API}admin/audit-logs`, {
    headers: {
      ...HEADERS.header,
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) console.log("err");

  const data = await res.json();

  if (data.status !== true) {
    console.log("data invalid");
  }

  console.log(data);
  return data;
}

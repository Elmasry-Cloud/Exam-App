import { imageSchema } from "@/features/admin-dashboard/schema/diplomas-schema/edit-diploma.schema";
import getNextAuthToken from "@/shared/lib/utils/get-next-auth-token";
import { IErrorRes } from "@/shared/types/api-res";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  // const token = await getToken({ req });
  const jwtToken = await getNextAuthToken();
  const token = jwtToken?.token;

  console.log(token);

  if (!token) {
    return NextResponse.json(
      { status: false, message: "Unauthorized" },
      { status: 401 },
    );
  }

  const formData = await req.formData();
  const result = imageSchema.safeParse({ image: formData.get("image") });

  if (!result.success) {
    return NextResponse.json(
      {
        code: 400,
        message: result.error.message,
        status: false,
      } satisfies IErrorRes,
      {
        status: 400,
      },
    );
  }

  const res = await fetch(
    `https://exam-app.elevate-bootcamp.cloud/api/upload`,
    {
      method: "POST",
      body: formData,
      headers: {
        // ...HEADERS.header,
        Authorization: `Bearer ${token}`,
      },
    },
  );

  const data = await res.json();

  return NextResponse.json(data);
}

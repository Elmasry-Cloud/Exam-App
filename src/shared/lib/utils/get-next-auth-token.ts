"use server";
import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export default async function getNextAuthToken() {
  const cookiesStore = await cookies();
  const token = cookiesStore.get(process.env.NEXT_AUTH_TOKEN!)?.value;

  try {
    const jwtToken = await decode({
      token,
      secret: process.env.NEXTAUTH_SECRET!,
    });
    return jwtToken;
  } catch (error) {
    void error;
    return null;
  }
}

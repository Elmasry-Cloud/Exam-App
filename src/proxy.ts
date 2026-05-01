import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

// Pages Regex
const authRoutesRegex = /^\/(login|register|forgot-password|reset-password.*)/;
const privateRoutesRegex = /^\//; // matches everything

export default async function proxy(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const pathName = request.nextUrl.pathname;

  // console.log(pathName);

  //   Pages Regex Condition
  if (authRoutesRegex.test(pathName)) {
    if (!token) return NextResponse.next();
    // const redirectUrl = new URL("/", request.nextUrl.origin);
    // return NextResponse.redirect(redirectUrl);
    const role = token.user?.role;
    const redirectPath = role === "ADMIN" ? "/dashboard" : "/";
    return NextResponse.redirect(new URL(redirectPath, request.nextUrl.origin));
  }

  if (privateRoutesRegex.test(pathName)) {
    if (token) return NextResponse.next();
    const redirectUrl = new URL("/login", request.nextUrl.origin);
    return NextResponse.redirect(redirectUrl);
  }

  // const headers = new Headers(request.headers)
  // headers.set("x-pathname",request.nextUrl.pathname)

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};

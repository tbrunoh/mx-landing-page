import { NextResponse } from "next/server";

export const config = {
  matcher: "/integrations/:path*",
};

export function middleware(request) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-createxyz-project-id", "235b0989-5dce-4648-b30b-347333e7bb76");
  requestHeaders.set("x-createxyz-project-group-id", "ef90ed6a-3199-4085-ac2c-fb2f2a87db2b");


  request.nextUrl.href = `https://www.create.xyz/${request.nextUrl.pathname}`;

  return NextResponse.rewrite(request.nextUrl, {
    request: {
      headers: requestHeaders,
    },
  });
}
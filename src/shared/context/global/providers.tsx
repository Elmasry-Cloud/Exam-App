"use client";
import React from "react";
import ReactQueryProviders from "./providers/react-query.provider";
import NextAuthProvider from "./providers/next-auth.provider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ReactQueryProviders>
        <NextAuthProvider>{children}</NextAuthProvider>
      </ReactQueryProviders>
    </>
  );
}

import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import loginApi from "./features/auth/apis/login/login.api";
import { loginSchema } from "./features/auth/schemas/login.schema";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
  },
  providers: [
    Credentials({
      name: "credential",
      credentials: {
        username: {},
        password: {},
      },
      authorize: async (credentials) => {
        const result = loginSchema.safeParse({
          username: credentials?.username,
          password: credentials?.password,
        });
        if (!result.success) throw new Error("Invalid username or password");
        const data = await loginApi(result.data);
        if (!data.status) throw new Error(data.message);
        console.log(data, "sssssssssssssss");
        return {
          id: data.payload.user.id,
          user: data.payload.user,

          // user: {
          //   ...data.payload.user,
          //   role: "ADMIN",
          // },
          token: data.payload.token,
        };
      },
    }),
  ],
  callbacks: {
    jwt({ token, user, trigger, session }) {
      if (user) {
        token.token = user.token;
        token.user = user.user;
      }
      if (trigger === "update" && session) {
        console.log(session, "sessionsssssssssssssss");
        console.log(user, "user");
        token.user = session.user;
        token.token = session.token;
      }

      return token;
    },
    session({ session, token }) {
      session.user = token.user;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

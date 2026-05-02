import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";
import { User } from "next-auth";
import { IUserData } from "./user";

declare module "next-auth" {
  /**
   * The shape of the user object returned in the OAuth providers' `profile` callback,
   * or the second parameter of the `session` callback, when using a database.
   */
  interface User {
    user: IUserData;
    token: string;
  }
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  // type Session = IUser;
  interface Session {
    user: IUserData;
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  // type JWT = User;
  interface JWT {
    user: IUserData;
    token: string;
  }
}

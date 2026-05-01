import { loginSchema } from "../schemas/login.schema";
import { IUser } from "./user";
import { z } from "zod";

export type LoginFields = z.Infer<typeof loginSchema>;

export interface ILoginRes {
  user: IUser;
  token: string;
}

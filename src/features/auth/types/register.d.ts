import { z } from "zod";
import { registerSchema } from "../schemas/register/register-one.schema";
import { IUser } from "./user";

export type registerFields = z.infer<typeof registerSchema>;

export interface IRegisterRes {
  user: IUser;
  token: string;
}

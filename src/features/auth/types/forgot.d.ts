import { forgotSchema } from "../schemas/forgot-password.schema";
import { z } from "zod";

export type forgotField = z.Infer<typeof forgotSchema>;

export interface IforgotRes {
  message: string;
  resetToken: string;
}

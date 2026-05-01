import { z } from "zod";
import { resetSchema } from "../schemas/reset.schema";

export type resetFields = z.infer<typeof resetSchema>;

export interface IResetRes {
  message: string;
}

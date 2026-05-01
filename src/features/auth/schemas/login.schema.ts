import { z } from "zod";
export const loginSchema = z
  .object({
    // in Login should be required only
    username: z
      .string("Invalid username")
      .nonempty("Your username is required"),
    password: z
      .string("Invalid password")
      .nonempty("Your password is required"),
  })
  .strict();

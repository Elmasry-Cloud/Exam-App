import { z } from "zod";
export const forgotSchema = z.object({
  email: z.string("Invalid email address").email("Invalid email address"),
  redirectUrl: z.string().url(),
});

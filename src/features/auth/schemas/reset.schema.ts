import { z } from "zod";
export const resetSchema = z
  .object({
    token: z.string(),
    newPassword: z
      .string("Invalid Password")
      .min(8, "Password must be at least 8 characters")
      .refine((pw) => /[A-Z]/.test(pw), "Must contain an uppercase letter")
      .refine((pw) => /[a-z]/.test(pw), "Must contain a lowercase letter")
      .refine((pw) => /[0-9]/.test(pw), "Must contain a number")
      .refine((pw) => /[@$!%*?&]/.test(pw), "Must contain a special character"),
    confirmPassword: z.string("Invalid Password"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

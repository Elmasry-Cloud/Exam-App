import { z } from "zod";

export const registerSchema = z
  .object({
    username: z
      .string("Invalid username")
      .nonempty("Your username is required"),
    email: z.string("Invalid email address").email("Invalid email address"),
    password: z
      .string("Invalid password")
      .nonempty("Your password is required")
      .min(8, "Password must be at least 8 characters")
      .refine((pw) => /[A-Z]/.test(pw), "Must contain an uppercase letter")
      .refine((pw) => /[a-z]/.test(pw), "Must contain a lowercase letter")
      .refine((pw) => /[0-9]/.test(pw), "Must contain a number")
      .refine((pw) => /[@$!%*?&]/.test(pw), "Must contain a special character"),
    confirmPassword: z.string("Invalid Password"),
    firstName: z
      .string()
      .min(3, "must be more than 3 char")
      .nonempty("firstName is required"),
    lastName: z
      .string()
      .min(3, "must be more than 3 char")
      .nonempty("lastName is required"),
    phone: z.string().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

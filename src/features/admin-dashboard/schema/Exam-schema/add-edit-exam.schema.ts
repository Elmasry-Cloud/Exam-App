import { z } from "zod";

// Add Exam Schema
export const addExamSchema = z
  .object({
    title: z.string().nonempty("Title is required"),
    description: z.string().nonempty("Description is required"),
    image: z.string().nonempty("Image is required"),
    // duration: z
    //   .string()
    //   .nonempty("Duration is required")
    //   .transform((val) => Number(val)),
    duration: z.number().min(1, "Duration is required"),
    diplomaId: z.string().nonempty("Diploma is required"),
  })
  .strict();

// Edit Exam Schema
export const editExamSchema = z
  .object({
    title: z.string().nonempty("Title is required"),
    description: z.string().nonempty("Description is required"),
    image: z.string().nonempty("Image is required"),
    // duration: z
    //   .string()
    //   .nonempty("Duration is required")
    //   .transform((val) => Number(val)),
    duration: z.number(),
    diplomaId: z.string().nonempty("Diploma is required"),
  })
  .strict()
  .partial();

export const diplomaIdSchema = z
  .object({
    diplomaId: z.string().nonempty("Diploma is required"),
  })
  .strict()
  .partial();

import { z } from "zod";
export const editDiplomaSchema = z
  .object({
    title: z.string().nonempty("Title is required"),
    description: z.string().nonempty("Description is required"),
    image: z.string().nonempty("Image is required"),
  })
  .strict()
  .partial();

export const imageSchema = z
  .object({
    image: z
      .file()
      .min(1)
      .max(1024 * 1024),
  })
  .strict();

import { z } from "zod";

export const editQuestionsSchema = z
  .object({
    text: z.string().nonempty("Question is required"),
    answers: z.array(
      z.object({
        text: z.string().nonempty("Answer text is required"),
        isCorrect: z.boolean(),
      }),
    ),
  })
  .strict()
  .partial();

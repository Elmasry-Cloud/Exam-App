import { z } from "zod";
import { editQuestionsSchema } from "../../schema/questions-schema/edit-question.schema";

export type editQuestionsFields = z.Infer<typeof editQuestionsSchema>;

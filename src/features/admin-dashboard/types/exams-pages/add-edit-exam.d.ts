import { z } from "zod";
import {
  addExamSchema,
  diplomaIdSchema,
  editExamSchema,
} from "./../../schema/Exam-schema/add-edit-exam.schema";

// Add Exam Type
export type addExamFields = z.Infer<typeof addExamSchema>;

// Edit Exam Type
export type editExamFields = z.Infer<typeof editExamSchema>;

// Edit Exam Type Diploma id
export type editDiplomaIdExamField = z.Infer<typeof diplomaIdSchema>;

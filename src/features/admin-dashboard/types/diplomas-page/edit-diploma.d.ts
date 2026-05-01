import { z } from "zod";
import {
  editDiplomaSchema,
  imageSchema,
} from "../../schema/diplomas-schema/edit-diploma.schema";

export type editDiplomaFields = z.Infer<typeof editDiplomaSchema>;

export type ImageFields = z.Infer<typeof imageSchema>;

export interface IUploadImage {
  url: string;
}

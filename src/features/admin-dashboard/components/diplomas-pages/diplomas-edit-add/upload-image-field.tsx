"use client";
import {
  editDiplomaSchema,
  imageSchema,
} from "@/features/admin-dashboard/schema/diplomas-schema/edit-diploma.schema";
import {
  editDiplomaFields,
  ImageFields,
} from "@/features/admin-dashboard/types/diplomas-page/edit-diploma";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/shared/components/ui/field";
import { Input } from "@/shared/components/ui/input";
import useUploadImage from "@/shared/hooks/use-upload-image";
import { zodResolver } from "@hookform/resolvers/zod";
import { CloudUpload, FileImage } from "lucide-react";
import { useEffect, useState } from "react";
import { Controller, useForm, useFormContext } from "react-hook-form";
import { ImageComponent } from "../../exams-pages/exams-edit/exam-image";

export default function UploadImageField({
  height,
  image,
}: {
  height?: string;
  image?: string | null;
}) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);

  console.log(imageUrl);

  // hook Upload image
  const { mutate: uploadImage, uploadProgress, isPending } = useUploadImage();

  // Context
  const imageForm = useFormContext<editDiplomaFields>();

  // Form
  const form = useForm<ImageFields>({
    resolver: zodResolver(imageSchema),
    mode: "onChange",
  });

  // Effect state
  useEffect(() => {
    const unssubscripe = form.subscribe({
      formState: {
        values: true,
        errors: true,
        isValid: true,
      },
      name: "image",
      callback: ({ values, errors, isValid }) => {
        // Get image
        const file = values.image as File;

        // Show image after upload
        if (file instanceof File) {
          const objectUrl = URL.createObjectURL(file);
          setImageUrl(objectUrl);
          setImageFile(file);
        }
        // console.log(values);
        // console.log(errors);
        // console.log(isValid);
        if (isValid) {
          // hook fun
          uploadImage(values.image, {
            onSuccess(data) {
              // console.log(data, "data");
              imageForm.setValue("image", data.url);
            },
            // onError(error) {
            //   console.log("error", error);
            // },
          });
        }
      },
    });

    return () => {
      unssubscripe();
      if (imageUrl) URL.revokeObjectURL(imageUrl);
    };
  }, [form, uploadImage]);

  // console.log(form.formState.errors);

  return (
    <>
      {/* line 1 Image */}

      <FieldGroup>
        <Controller
          name="image"
          control={form.control}
          render={({ field: { value, onChange, ...field }, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              {/* Label field */}
              <FieldLabel
                htmlFor="image"
                className="font-medium text-base text-gray-800 flex flex-col gap-1 items-start"
              >
                Image
                {/* Input file conatiner */}
                <div className={`w-full ${height}`}>
                  <Input
                    // {...field}
                    type="file"
                    onChange={(e) => onChange(e.target.files?.[0])}
                    name="image"
                    id="image"
                    className="w-full p-6 border border-gray-200 hidden"
                    aria-invalid={fieldState.invalid}
                    autoComplete="image"
                  />
                  {/* if no image uploaded */}
                  {/* add file */}
                  {imageUrl || image ? (
                    <ImageComponent
                      file={imageFile}
                      image={imageUrl ?? image!}
                    />
                  ) : (
                    <div className="add-file p-6 h-full border border-gray-200 flex items-center cursor-pointer">
                      <FileImage
                        size={40}
                        strokeWidth={1.5}
                        className="text-gray-200"
                      />

                      <p className="grow flex items-center justify-center gap-2.5 text-gray-600 font-normal text-xs">
                        <CloudUpload
                          size={24}
                          strokeWidth={0.94}
                          className="text-gray-600"
                        />
                        Drop an image here or{" "}
                        <span className="text-blue-600">
                          select from your computer
                        </span>
                      </p>
                    </div>
                  )}
                  {/* {!image && (
                    <div className="add-file p-6 h-full border border-gray-200 flex items-center cursor-pointer">
                      <FileImage
                        size={40}
                        strokeWidth={1.5}
                        className="text-gray-200"
                      />

                      <p className="grow flex items-center justify-center gap-2.5 text-gray-600 font-normal text-xs">
                        <CloudUpload
                          size={24}
                          strokeWidth={0.94}
                          className="text-gray-600"
                        />
                        Drop an image here or{" "}
                        <span className="text-blue-600">
                          select from your computer
                        </span>
                      </p>
                    </div>
                  )} */}
                </div>
              </FieldLabel>

              {isPending && (
                <FieldDescription>
                  Upload Progress: {uploadProgress}%
                </FieldDescription>
              )}

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>
    </>
  );
}

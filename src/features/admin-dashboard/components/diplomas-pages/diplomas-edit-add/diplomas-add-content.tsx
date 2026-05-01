"use client";
import useAddDiploma from "@/features/admin-dashboard/hooks/use-add-diploma";
import { editDiplomaSchema } from "@/features/admin-dashboard/schema/diplomas-schema/edit-diploma.schema";
import { editDiplomaFields } from "@/features/admin-dashboard/types/diplomas-page/edit-diploma";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Controller,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import UploadImageField from "./upload-image-field";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/shared/components/ui/field";
import { Input } from "@/shared/components/ui/input";
import { Textarea } from "@/shared/components/ui/textarea";
import { useQueryClient } from "@tanstack/react-query";

interface IProps {
  formId: string;
}

export default function DiplomasAddContent({ formId }: IProps) {
  // Hook Add Diploma
  const { data, isPending, error, addDiploma } = useAddDiploma();

  // Get new data after Add
  const queryClient = useQueryClient();

  // console.log(data);

  // Form
  const form = useForm<editDiplomaFields>({
    resolver: zodResolver(editDiplomaSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  // Submit Edit Data
  const onSubmit: SubmitHandler<editDiplomaFields> = (values) => {
    // console.log(values);

    addDiploma(values, {
      onSuccess() {
        form.reset();
        // location.href = "/dashboard";
        queryClient.invalidateQueries({ queryKey: ["Diplomas"] });
      },
    });

    return;
  };

  return (
    // Form Context
    <FormProvider {...form}>
      {/* Form box */}
      <div className="p-6">
        {/* Main Content Header */}
        <header className="p-2.5 bg-blue-600 text-base text-white font-semibold">
          Diploma Information
        </header>

        {/* Start Form */}
        <form
          id={formId}
          onSubmit={form.handleSubmit(onSubmit)}
          className="content bg-white p-4 flex flex-col gap-4"
        >
          {/* line 1 Image */}
          <UploadImageField />

          {/* Title line */}
          <FieldGroup>
            <Controller
              name="title"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel
                    htmlFor="title"
                    className="font-medium text-base text-gray-800"
                  >
                    Title
                  </FieldLabel>
                  <Input
                    {...field}
                    id="title"
                    className="h-11.5 w-full p-2.5 border border-gray-200"
                    aria-invalid={fieldState.invalid}
                    // placeholder="shadcn"
                    autoComplete="title"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>

          {/* Description line */}
          <FieldGroup>
            <Controller
              name="description"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel
                    htmlFor="description"
                    className="font-medium text-base text-gray-800"
                  >
                    Description
                  </FieldLabel>
                  <Textarea
                    {...field}
                    id="description"
                    className="h-32.25 w-full p-2.5 border border-gray-200 resize-none"
                    aria-invalid={fieldState.invalid}
                    autoComplete="description"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </div>
    </FormProvider>
  );
}

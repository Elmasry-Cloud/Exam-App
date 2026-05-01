"use client";
import { Input } from "@/shared/components/ui/input";
import { Textarea } from "@/shared/components/ui/textarea";
import {
  Controller,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { editExamFields } from "@/features/admin-dashboard/types/exams-pages/add-edit-exam";
import { zodResolver } from "@hookform/resolvers/zod";
import { editExamSchema } from "@/features/admin-dashboard/schema/Exam-schema/add-edit-exam.schema";
import { IExamData } from "@/features/user-dashboard/types/exams";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/shared/components/ui/field";
import UploadImageField from "../../diplomas-pages/diplomas-edit-add/upload-image-field";
import ExamSelectDiploma from "../exam-select-diploma";
import useUpdateExam from "@/features/admin-dashboard/hooks/use-update-exam";
import { redirect } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";

export default function ExamsEditContent({
  exam,
  formId,
}: {
  exam: IExamData;
  formId: string;
}) {
  // Hook update diploma
  const { updateExam } = useUpdateExam();

  const queryClient = useQueryClient();

  const form = useForm<editExamFields>({
    resolver: zodResolver(editExamSchema),
    defaultValues: {
      title: exam.title,
      description: exam.description,
      image: exam.image ?? "",
      duration: Number(exam.duration),
      diplomaId: exam.diploma.id,
    },
  });

  // Submit Edit Data
  const onSubmit: SubmitHandler<editExamFields> = (values) => {
    // console.log(values);
    // console.log("Edited");
    if (exam) {
      updateExam(
        { fields: values, id: exam.id },
        {
          onSuccess(data) {
            // route back when update success
            if (data.status) {
              form.reset();
              queryClient.invalidateQueries({ queryKey: ["All Exams"] });
              redirect("/dashboard/exam-list");
            }
          },
        },
      );
    }

    return;
  };

  return (
    <>
      <FormProvider {...form}>
        {/* Header */}
        <header className="p-2.5 bg-blue-600 text-base text-white font-semibold">
          Exam Information
        </header>

        {/* content information */}
        <form
          id={formId}
          onSubmit={form.handleSubmit(onSubmit)}
          className="content grid grid-cols-2 gap-4 bg-white p-4"
        >
          {/* Title Field */}
          <FieldGroup>
            <Controller
              name="title"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="gap-1">
                  <FieldLabel
                    className="font-medium text-base text-gray-800"
                    htmlFor="title"
                  >
                    Title
                  </FieldLabel>
                  <Input
                    {...field}
                    id="title"
                    aria-invalid={fieldState.invalid}
                    autoComplete="title"
                    className="text-gray-800"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>

          {/* Diploma Field */}
          {/* <FieldGroup>
          <Controller
            name="diplomaId"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="gap-1">
                <FieldLabel
                  className="font-medium text-base text-gray-800"
                  htmlFor="diplomaId"
                >
                  Diploma
                </FieldLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger
                    id="diplomaId"
                    className="text-gray-800 w-full"
                  >
                    <SelectValue placeholder="Select a diploma">
                      {diplomas?.find((d) => d.id === field.value)?.title}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {diplomas?.map((diploma) => (
                      <SelectItem key={diploma.id} value={diploma.id}>
                        {diploma.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </FieldGroup> */}

          <ExamSelectDiploma />

          {/* Image Field */}
          <UploadImageField height={`h-25`} image={exam.image} />

          {/* {exam.image && <ExamImage image={exam.image} />} */}

          {/* Description Field */}
          <FieldGroup>
            <Controller
              name="description"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="gap-1">
                  <FieldLabel
                    className="font-medium text-base text-gray-800"
                    htmlFor="description"
                  >
                    Description
                  </FieldLabel>
                  <Textarea
                    {...field}
                    id="description"
                    aria-invalid={fieldState.invalid}
                    autoComplete="description"
                    className="text-gray-800 resize-none"
                  />
                  {/* <Input
                  {...field}
                  id="title"
                  aria-invalid={fieldState.invalid}
                  autoComplete="title"
                  className="text-gray-800"
                /> */}
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>

          {/* Duration Field */}
          <FieldGroup>
            <Controller
              name="duration"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="gap-1">
                  <FieldLabel
                    className="font-medium text-base text-gray-800"
                    htmlFor="duration"
                  >
                    Duration (min)
                  </FieldLabel>
                  <Input
                    {...field}
                    id="duration"
                    type="number"
                    onChange={(e) => field.onChange(Number(e.target.value))}
                    aria-invalid={fieldState.invalid}
                    autoComplete="duration"
                    className="text-gray-800"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </FormProvider>
    </>
  );
}

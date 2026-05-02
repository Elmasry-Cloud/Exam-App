"use client";
import { Input } from "@/shared/components/ui/input";
import { Textarea } from "@/shared/components/ui/textarea";
import {
  Controller,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { addExamFields } from "@/features/admin-dashboard/types/exams-pages/add-edit-exam";
import { zodResolver } from "@hookform/resolvers/zod";
import { addExamSchema } from "./../../../schema/Exam-schema/add-edit-exam.schema";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/shared/components/ui/field";
import UploadImageField from "../../diplomas-pages/diplomas-edit-add/upload-image-field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";
import { useEffect, useMemo, useState } from "react";
import {
  IDiplomaData,
  IDiplomaRes,
} from "@/features/user-dashboard/types/diplomas";
import { ApiRes } from "@/shared/types/api-res";
import useAddExam from "@/features/admin-dashboard/hooks/use-add-exam";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";

export default function ExamsAddContent({ formId }: { formId: string }) {
  // State for set Diploma
  const [data, setData] = useState<IDiplomaData[] | null>(null);

  const queryClient = useQueryClient();

  // Router
  const router = useRouter();

  // Hook add exam
  const { addExam } = useAddExam();

  // diplomas
  const diplomas = useMemo(() => data, [data]);

  // console.log(diplomas);

  // Form
  const form = useForm<addExamFields>({
    resolver: zodResolver(addExamSchema),
    defaultValues: {
      title: "",
      description: "",
      image: "",
      duration: 0,
      diplomaId: "",
    },
  });

  // Submit Edit Data
  const onSubmit: SubmitHandler<addExamFields> = (values) => {
    // console.log(values);
    // console.log("submited");
    addExam(values, {
      onSuccess: () => {
        form.reset();
        queryClient.invalidateQueries({ queryKey: ["All Exams"] });
        router.push("/dashboard/exam-list");
      },
    });

    return;
  };

  // Effect State
  useEffect(() => {
    // Get Diplomas
    const getData = async () => {
      const res = await fetch("/api/diploma");
      const data: ApiRes<IDiplomaRes> = await res.json();
      if (!data.status) return;
      setData(data?.payload.data);
    };
    getData();
  }, []);
  return (
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
        <FieldGroup>
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
        </FieldGroup>

        {/* Image Field */}
        <UploadImageField height={`h-25`} />

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
                  aria-invalid={fieldState.invalid}
                  autoComplete="duration"
                  className="text-gray-800"
                  onChange={(e) => field.onChange(e.target.valueAsNumber)}
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
  );
}

// <div className="image">
//   <label className="font-medium text-base text-gray-800 flex flex-col gap-1 cursor-pointer">
//     Image
//     <Input type="file" className="text-gray-800 h-25 hidden" />
//     {/* Image */}
//     <div className="p-1.5 bg-gray-50 border border-gray-200 flex items-center justify-between gap-2.5">
//       {/* img */}
//       <div className="image w-21.5 h-21.5 ">
//         <Image
//           src={Img}
//           alt="image"
//           width={86}
//           height={86}
//           className="object-cover w-full h-full"
//         />
//       </div>

//       {/* image info */}
//       <div className="info text-gray-600 font-normal text-sm">
//         <h2>Image_wlb9jmwlb9jmwlb9.png</h2>
//       </div>

//       {/* action */}
//       <div className="action p-2.5 font-normal text-xs text-gray-400 flex items-center gap-2.5">
//         <p>1.42 MB</p>

//         <div className="line w-4.5 border border-gray-200 -rotate-90"></div>

//         {/* icons */}
//         <div className="flex items-center gap-1.5">
//           <Download
//             size={18}
//             strokeWidth={1.25}
//             className="text-blue-500"
//           />
//           <Trash2
//             size={18}
//             strokeWidth={1.25}
//             className="text-red-500"
//           />
//         </div>
//       </div>
//     </div>
//   </label>
// </div>

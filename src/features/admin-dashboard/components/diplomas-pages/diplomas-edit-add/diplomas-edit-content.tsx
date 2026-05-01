"use client";
import { editDiplomaSchema } from "@/features/admin-dashboard/schema/diplomas-schema/edit-diploma.schema";
import { editDiplomaFields } from "@/features/admin-dashboard/types/diplomas-page/edit-diploma";
import { ISingelDiplomaIdRes } from "@/features/user-dashboard/types/diploma-id";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/shared/components/ui/field";
import { Input } from "@/shared/components/ui/input";
import { Textarea } from "@/shared/components/ui/textarea";
import { ISuccessRes } from "@/shared/types/api-res";
import { zodResolver } from "@hookform/resolvers/zod";
import { use } from "react";
import {
  Controller,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import UploadImageField from "./upload-image-field";
import useUpdateDiploma from "@/features/admin-dashboard/hooks/use-update-diploma";
import { redirect } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";

interface IProps {
  formId: string;
  diplomaId?: string;
  diplomaData: Promise<ISuccessRes<ISingelDiplomaIdRes>>;
}

export default function DiplomasEditContent({
  formId,
  diplomaId,
  diplomaData,
}: IProps) {
  // Get diploma Data
  const data = use(diplomaData);
  const payload = data?.payload?.diploma;
  // console.log(data?.payload?.diploma);

  // Hook update diploma
  const {
    data: updateData,
    isPending,
    error,
    updateDiploma,
  } = useUpdateDiploma();

  // Get new data after Edit
  const queryClient = useQueryClient();

  // console.log(updateData);

  // Form
  const form = useForm<editDiplomaFields>({
    resolver: zodResolver(editDiplomaSchema),
    defaultValues: {
      title: payload?.title,
      description: payload?.description,
    },
  });

  // Submit Edit Data
  const onSubmit: SubmitHandler<editDiplomaFields> = (values) => {
    // console.log(values);
    if (diplomaId) {
      updateDiploma(
        { fields: values, id: diplomaId },
        {
          onSuccess(data) {
            // route back when update success
            form.reset();
            queryClient.invalidateQueries({ queryKey: ["Diplomas"] });
            if (data.status) redirect("/dashboard");
          },
        },
      );
    }
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
{
  /* Content */
}
// <form
//   id={formId}
//   // onSubmit={onSubmit}
//   className="content bg-white p-4 flex flex-col gap-4"
// >
// {/* line 1 Image */}
// <div className="line-image">
//   <label
//     htmlFor="image"
//     className="font-medium text-base text-gray-800"
//   >
//     Image
//     <input
//       //   accept="image/jpg"
//       // onChange={(e) => getImage(e)}
//       type="file"
//       name="image"
//       id="image"
//       className="w-full p-6 border border-gray-200 hidden"
//     />
//     {/* if image uploaded */}
//     {/* {image && (
//       <Image
//         src={image}
//         alt="diploma"
//         width={40}
//         height={40}
//         className="mt-2 h-40 w-full object-cover border border-gray-200"
//       />
//     )} */}
//     {/* if no image uploaded */}
//     {/* add file */}
//     <div className="add-file p-6 border border-gray-200 flex items-center cursor-pointer">
//       <FileImage
//         size={40}
//         strokeWidth={1.5}
//         className="text-gray-200"
//       />
//       <p className="grow flex items-center justify-center gap-2.5 text-gray-600 font-normal text-xs">
//         <CloudUpload
//           size={24}
//           strokeWidth={0.94}
//           className="text-gray-600"
//         />
//         Drop an image here or{" "}
//         <span className="text-blue-600">select from your computer</span>
//       </p>
//     </div>
//   </label>
// </div>

//   {/* line 2 Title */}
//   {/* <div className="line-title">
//     <label className="font-medium text-base text-gray-800">Title</label>
//     <input
//       // value={title}
//       // onChange={(e) => setTitle && setTitle(e.target.value)}
//       type="text"
//       name="title"
//       id="title"
//       className="h-11.5 w-full p-2.5 border border-gray-200"
//     />
//   </div> */}

//   {/* line 3 Des */}
//   {/* <div className="line-des">
//     <label className="font-medium text-base text-gray-800">
//       Description
//     </label>
//     <textarea
//       // value={description}
//       // onChange={(e) => setDescription && setDescription(e.target.value)}
//       name="description"
//       id="description"
//       className="h-32.25 w-full p-2.5 border border-gray-200 resize-none"
//     ></textarea>
//   </div> */}
// </form>

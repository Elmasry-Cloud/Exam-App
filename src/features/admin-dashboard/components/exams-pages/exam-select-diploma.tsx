"use client";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/shared/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";
import { Controller, useFormContext } from "react-hook-form";
import { useEffect, useMemo, useState } from "react";
import { ApiRes } from "@/shared/types/api-res";
import {
  IDiplomaData,
  IDiplomaRes,
} from "@/features/user-dashboard/types/diplomas";
import { editExamFields } from "../../types/exams-pages/add-edit-exam";

export default function ExamSelectDiploma() {
  const [data, setData] = useState<IDiplomaData[] | null>(null);
  // console.log(data);
  // diplomas
  const diplomas = useMemo(() => data, [data]);

  // Form
  const form = useFormContext<editExamFields>();

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
    <>
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
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger id="diplomaId" className="text-gray-800 w-full">
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
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>
    </>
  );
}

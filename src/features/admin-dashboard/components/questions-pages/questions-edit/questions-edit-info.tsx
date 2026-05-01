"use client";
import { IQuestion } from "@/features/user-dashboard/types/questions-exam";
import { Input } from "@/shared/components/ui/input";
import { SelectExamQuestionsCombobox } from "./que-edit-select";
import { IExamData } from "@/features/user-dashboard/types/exams";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { editQuestionsFields } from "@/features/admin-dashboard/types/questions-pages/edit-question";
import { zodResolver } from "@hookform/resolvers/zod";
import { editQuestionsSchema } from "@/features/admin-dashboard/schema/questions-schema/edit-question.schema";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/shared/components/ui/field";
import QuestionsEditAnswers from "./questions-edit-answers";

export default function QuestionsEditInfo({
  question,
  exam,
  questionId,
}: {
  question: IQuestion;
  exam: IExamData[];
  questionId: string;
}) {
  // console.log(question);

  // Form
  const form = useForm<editQuestionsFields>({
    resolver: zodResolver(editQuestionsSchema),
    defaultValues: {
      text: question.text,
      answers: question.answers.map((answer) => ({
        text: answer.text,
        isCorrect: answer.isCorrect,
      })),
      // answers: [
      //   // { text: "", isCorrect: false },
      //   // { text: "", isCorrect: false },
      //   // { text: "", isCorrect: false },
      //   // { text: "", isCorrect: false },
      // ],
    },
  });

  return (
    <>
      {/* Header */}
      <header className="p-2.5 bg-blue-600 text-white text-base font-semibold">
        Question Information
      </header>

      {/* Questions Information */}
      <FormProvider {...form}>
        <form className="info-content">
          <div className="flex flex-col gap-4 bg-white p-4">
            {/* Select */}
            <div>
              {/* Label */}
              <label
                htmlFor=""
                className="font-medium text-base text-gray-800 mb-1"
              >
                Exam
              </label>

              {/* Select Exam */}
              <SelectExamQuestionsCombobox
                questionExamTitle={question.exam.title}
                exam={exam}
              />
            </div>

            {/* Input Question Text */}
            <FieldGroup>
              <Controller
                name="text"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    {/* Questions Headline */}
                    <FieldLabel
                      htmlFor="question-headline"
                      className="font-medium text-base text-gray-800"
                    >
                      Question Headline
                    </FieldLabel>
                    <Input
                      {...field}
                      id="question-headline"
                      aria-invalid={fieldState.invalid}
                      autoComplete="text"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </FieldGroup>
          </div>
          {/* Questions Answers */}
          <QuestionsEditAnswers />
        </form>
      </FormProvider>
    </>
  );
}

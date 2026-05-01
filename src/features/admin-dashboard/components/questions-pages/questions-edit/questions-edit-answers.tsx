import { editQuestionsFields } from "@/features/admin-dashboard/types/questions-pages/edit-question";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Check, CheckCheck, Plus, Trash2 } from "lucide-react";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import { Field, FieldError, FieldGroup } from "@/shared/components/ui/field";
import { useState } from "react";

export default function QuestionsEditAnswers() {
  const { control, formState } = useFormContext<editQuestionsFields>();

  const { fields, append, remove, update } = useFieldArray({
    control,
    name: "answers",
  });

  const [newAnswerText, setNewAnswerText] = useState("");

  const handleAdd = () => {
    if (!newAnswerText.trim()) return;
    append({ text: newAnswerText.trim(), isCorrect: false });
    setNewAnswerText("");
  };
  const handleMarkCorrect = (index: number) => {
    // Only one correct answer at a time
    fields.forEach((_, i) => {
      update(i, { ...fields[i], isCorrect: i === index });
    });
  };
  return (
    <>
      <div className="mt-6">
        {/* Header */}
        <header className="p-2.5 bg-blue-600 text-white text-base font-semibold">
          Question Answers
        </header>

        {/* Questions Information */}
        <div className="answers-content bg-white flex flex-col">
          {/* Heading */}
          <div className="row border-b bg-gray-200 flex justify-between">
            <h2 className="py-2.5 px-4 ml-10 font-medium text-sm text-gray-800">
              Body
            </h2>

            {/* Button */}
            <Button
              className={`bg-emerald-500 hover:bg-emerald-600 h-10 py-2.5 px-4 text-white flex items-center gap-2.5 cursor-pointer`}
            >
              <Plus size={18} />
              Add Answer
            </Button>
          </div>

          {/* Answers row */}
          {fields.map((field, index) => (
            <div
              key={field.id}
              className="answers flex items-center border-b border-b-gray-200"
            >
              {/* Delete */}
              <div
                onClick={() => remove(index)}
                className="icon-delete w-12.5 h-12.5 bg-red-50 flex items-center justify-center cursor-pointer"
              >
                <Trash2 size={18} className="text-red-600" />
              </div>

              {/* Answer text input */}
              <FieldGroup className="grow">
                <Controller
                  name={`answers.${index}.text`}
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <Input
                        {...field}
                        aria-invalid={fieldState.invalid}
                        placeholder={`Answer ${index + 1}`}
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              </FieldGroup>

              {/* Mark correct toggle */}
              <div className="correct-answer p-2.5">
                {field.isCorrect ? (
                  <Button
                    type="button"
                    onClick={() => handleMarkCorrect(index)}
                    className="flex items-center gap-1.5 h-7.5 px-1.5 bg-transparent hover:bg-transparent text-emerald-500"
                  >
                    <CheckCheck size={14} />
                    Correct Answer
                  </Button>
                ) : (
                  <Button
                    type="button"
                    onClick={() => handleMarkCorrect(index)}
                    className="flex items-center gap-1.5 h-7.5 px-2.5 bg-gray-200 hover:bg-gray-300 cursor-pointer text-gray-800"
                  >
                    <Check size={14} className="text-black" />
                    Mark Correct
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Answer */}
      <div className="border-t bg-emerald-50 flex">
        <div className="input-field py-2.5 pl-2.5 grow ml-12.5">
          <Input
            value={newAnswerText}
            onChange={(e) => setNewAnswerText(e.target.value)}
            onKeyDown={(e) =>
              e.key === "Enter" && (e.preventDefault(), handleAdd())
            }
            className="p-2.5 border border-emerald-500 bg-white"
            placeholder="Enter answer body"
          />
        </div>
        <div className="p-2.5 w-37.5">
          <Button
            type="button"
            onClick={handleAdd}
            className="flex items-center gap-1.5 w-full h-10 text-white bg-emerald-500 hover:bg-emerald-600 px-4 cursor-pointer"
          >
            <Plus size={18} />
            Add
          </Button>
        </div>
      </div>
    </>
  );
}

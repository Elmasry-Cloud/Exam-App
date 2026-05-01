import { Plus } from "lucide-react";
import ExamsQueTaple from "../exams-view/exams-que-taple";

export default function ExamsAddQuestions() {
  return (
    <>
      {/* Header */}
      <header className="p-2.5 bg-blue-600 text-white flex items-center justify-between mt-6">
        <h1 className="font-semibold text-base">Exam Questions</h1>

        <button
          className={`flex items-center gap-1.5 font-medium text-base cursor-pointer`}
        >
          <Plus size={18} />
          Add Questions
        </button>
      </header>

      {/* Questions Taple */}
      <ExamsQueTaple />
    </>
  );
}

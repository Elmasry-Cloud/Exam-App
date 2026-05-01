import { Plus } from "lucide-react";
import ExamsQueTaple from "../exams-view/exams-que-taple";
import Link from "next/link";

export default function ExamsEditQuestions({ examId }: { examId: string }) {
  return (
    <>
      {/* Header */}
      <header className="p-2.5 bg-blue-600 text-white flex items-center justify-between mt-6">
        <h1 className="font-semibold text-base">Exam Questions</h1>

        <Link
          href={`/dashboard/add-questions`}
          className={`flex items-center gap-1.5 font-medium text-base cursor-pointer`}
        >
          <Plus size={18} />
          Add Questions
        </Link>
      </header>

      {/* Questions Taple */}
      <ExamsQueTaple examId={examId} />
    </>
  );
}

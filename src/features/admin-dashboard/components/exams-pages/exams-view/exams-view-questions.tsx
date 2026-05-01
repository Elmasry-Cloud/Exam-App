import { Plus } from "lucide-react";
import ExamsQueTaple from "./exams-que-taple";
import Link from "next/link";

export default function ExamsViewQuestions({ examId }: { examId: string }) {
  // console.log(questions[0]);
  return (
    <div className="p-6">
      {/* Header */}
      <header className="p-2.5 bg-blue-600 text-white flex items-center justify-between">
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
    </div>
  );
}

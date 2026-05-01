import { IQuestion } from "@/features/user-dashboard/types/questions-exam";
import { Button } from "@/shared/components/ui/button";
import { Ban, ExternalLink, PenLine, Trash2 } from "lucide-react";
import Link from "next/link";

export default function QuestionsViewHeader2({
  questionData,
}: {
  questionData: IQuestion;
}) {
  return (
    <div className="bg-white border-t border-t-gray-100 py-1.5 px-6 flex items-center justify-between">
      {/* Title Info */}
      <div>
        <h1 className="title-info font-inter font-semibold text-lg text-black">
          {questionData?.text}
        </h1>
        <h2 className="font-normal text-sm text-gray-400 font-inter flex items-center gap-1">
          Exam:
          <Link href={""} className="flex items-center gap-0.5">
            {questionData?.exam.title}{" "}
            <ExternalLink
              size={14}
              strokeWidth={0.94}
              className="text-gray-400"
            />
          </Link>
        </h2>
      </div>

      {/* Buttons */}
      <div className="buttons p-2.5 flex items-center gap-2.5">
        {/* Btn 1 */}
        <Button
          className={`bg-gray-200 hover:bg-gray-300 cursor-pointer px-4 h-10 font-medium text-sm text-gray-800 flex items-center gap-2.5`}
        >
          <Ban size={18} strokeWidth={1.5} className="text-gray-800" />
          Immutable
        </Button>

        {/* Btn 2 */}
        <Link
          href={`/dashboard/edit-questions/${questionData?.id}`}
          className={`bg-blue-600 hover:bg-blue-700 cursor-pointer px-4 h-10 font-medium text-sm text-white flex items-center gap-2.5`}
        >
          <PenLine size={18} strokeWidth={1.5} className="text-white" />
          Edit
        </Link>

        {/* Btn 3 */}
        <Button
          className={`bg-red-600 hover:bg-red-700 cursor-pointer px-4 h-10 font-medium text-sm text-white flex items-center gap-2.5`}
        >
          <Trash2 size={18} strokeWidth={1.5} className="text-white" />
          Delete
        </Button>
      </div>
    </div>
  );
}

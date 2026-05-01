import { IQuestion } from "@/features/user-dashboard/types/questions-exam";

export default function QuestionsViewContent({
  questionData,
}: {
  questionData: IQuestion;
}) {
  return (
    <div className="p-6">
      <div className="content bg-white p-4 flex flex-col gap-4">
        {/* Headline */}
        <div className="flex flex-col gap-1 font-normal text-sm">
          <h2 className="text-gray-400">Headline</h2>
          <h3 className="text-black">{questionData?.text}</h3>
        </div>

        {/* Exam */}
        <div className="flex flex-col gap-1 font-normal text-sm">
          <h2 className="text-gray-400">Exam</h2>
          <p className="text-gray-800">{questionData?.exam.title}</p>
        </div>

        {/* Answers */}
        <div className="flex flex-col gap-1 font-normal text-sm">
          <h2 className="text-gray-400">Answers</h2>
          <p className="text-gray-800">{questionData.answers.length}</p>
        </div>
      </div>
    </div>
  );
}

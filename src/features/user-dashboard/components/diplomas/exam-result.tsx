// import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { ResultChart } from "./result-chart";
import { Button } from "@/shared/components/ui/button";
import { FolderSearch, RotateCcw } from "lucide-react";
import Link from "next/link";
import SkilitonResults from "./skiliton-results";

interface IProps {
  resultId: string;
  restart: () => void;
  diplomaId?: string;
}

export default function ExamResult({ resultId, restart, diplomaId }: IProps) {
  const [resultData, setResultData] = useState();
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [worngAnswer, setWorngAnswer] = useState(0);
  // console.log(resultId);
  // const { data } = useSession();
  // console.log(data?.user.id);
  async function fetchData(resultId: string) {
    // console.log(resultId);
    const res = await fetch(`/api/result-exam/${resultId}`);
    const data = await res.json();
    // console.log(data);
    setCorrectAnswer(data?.payload?.submission.correctAnswers);
    setWorngAnswer(data?.payload?.submission.wrongAnswers);

    setResultData(data);
  }
  useEffect(() => {
    fetchData(resultId);
  }, [resultId]);

  return (
    <>
      <header className="pt-6 text-blue-600 text-2xl font font-semibold mb-4">
        Results:
      </header>
      {!resultData && <SkilitonResults />}
      {resultData && (
        <>
          <div className="result-container grid grid-cols-[275px_1fr] gap-4">
            <div className="chart bg-blue-50 border border-blue-200 p-9 flex flex-col items-center justify-center">
              <div className="chart w-50.75 h-50.75">
                <ResultChart
                  correctAnswer={correctAnswer}
                  worngAnswer={worngAnswer}
                />
              </div>
              {/* Chart Info */}
              <div className="chart-info p-2.5 flex flex-col gap-2.5">
                <div className="correct font-medium text-sm text-black flex items-center gap-2.5">
                  <div className="box w-4 h-4 bg-emerald-500"></div>
                  Correct: {correctAnswer}
                </div>
                <div className="incorrect font-medium text-sm text-black flex items-center gap-2.5">
                  <div className="box w-4 h-4 bg-red-500"></div>
                  Incorrect: {worngAnswer}
                </div>
              </div>
            </div>
            <div className="answers result-border p-1.5 h-128.5 w-full overflow-y-scroll flex flex-col gap-2.5">
              <div className="que-items p-2.5 flex flex-col gap-5">
                {resultData?.payload?.analytics
                  .filter((item) => item.isCorrect !== true)
                  .map((item) => (
                    <div
                      key={item.questionId}
                      className="flex flex-col gap-2.5"
                    >
                      {/* Questions */}
                      <h2 className="text-blue-600 text-xl font-semibold">
                        {/* What does CSS stand for? */}
                        {item?.questionText}
                      </h2>
                      {/* wrong answer */}
                      <div className="uncorr flex items-center gap-2.5 bg-red-50 p-4 font-normal text-sm text-gray-800">
                        <input
                          type="radio"
                          // name="uncorrect-ans"
                          // id="uncorrect-ans"
                          className="appearance-none
          w-4 h-4
          rounded-full
          border-2 border-white
          outline-2
          outline-red-600
          checked:bg-red-600"
                          checked
                          readOnly
                        />
                        {/* Computer Style Sheets */}
                        {item?.selectedAnswer.text}
                      </div>
                      {/* correct answer */}
                      <div className="corr flex items-center gap-2.5 bg-emerald-50 p-4 font-normal text-sm text-gray-800">
                        <input
                          type="radio"
                          // name="correct-ans"
                          // id="correct-ans"
                          className="appearance-none
          w-4 h-4
          rounded-full
          border-2 border-white
          outline-2
          outline-emerald-600"
                          checked
                          readOnly
                        />
                        {/* Computer Style Sheets */}
                        {item?.correctAnswer.text}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="buttons mt-10 flex items-center gap-4 w-full">
            <Button
              onClick={() => restart()}
              className="restart flex grow items-center gap-2.5 bg-gray-200 hover:bg-gray-300 rounded-none cursor-pointer h-11.5 font-medium text-sm text-gray-800"
            >
              <RotateCcw size={18} />
              Restart
            </Button>
            <Link
              href={`/diplomas/${diplomaId}`}
              className="explore flex grow justify-center items-center gap-2.5 bg-blue-600 hover:bg-blue-700 rounded-none cursor-pointer h-11.5 font-medium text-sm text-white"
            >
              <FolderSearch size={18} />
              Explore
            </Link>
          </div>
        </>
      )}
    </>
  );
}

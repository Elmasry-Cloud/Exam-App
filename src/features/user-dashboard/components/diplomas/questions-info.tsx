"use client";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Progress } from "@/shared/components/ui/progress";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SkilitonQuestions from "./skiliton-questions";
import { TimerChart } from "./timer-chart";
// import ErrorMessage from "@/app/(auth)/_share-component/error-message";
import ExamResult from "./exam-result";
import useSubmissionsAction from "../../hooks/diplomas-hooks/use-submissions";
import GetQuestions from "../../apis/diplomas-apis/questions.api";
import ErrorMessage from "@/features/auth/components/login/error-message";
import { IAnswer, IQuestion } from "../../types/questions-exam";

interface IQuestionsInfo {
  id: string;
  title?: string;
  titleExam?: string;
  examDuration?: string;
  diplomaId?: string;
}

interface IQuAnswer {
  questionId: string;
  answerId: string;
}

export default function QuestionsInfo({
  id,
  title,
  titleExam,
  examDuration,
  diplomaId,
}: IQuestionsInfo) {
  // State
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setcurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<IQuAnswer>({
    questionId: "",
    answerId: "",
  });
  const [allAnswers, setAllAnswers] = useState<Record<string, string>>({});

  // Hook
  const { data, error, submissionsAnswers, isPending } = useSubmissionsAction();
  // console.log(error?.message);
  // const data = use(questionsData);

  // Query fun
  const { data: questions, isLoading } = useQuery({
    queryKey: ["questions", id],
    queryFn: () => GetQuestions(id),
  });
  // console.log(data, "data");

  // Step 1: Create a state to hold the answers
  function selectAnswer(questionId: string, answerId: string) {
    setAllAnswers((prev) => ({
      ...prev,
      [questionId]: answerId,
    }));
  }
  // console.log(answers, "answers");

  // Submit Answers
  function handleAnswerSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (currentQuestion === questions?.payload.questions.length - 1) {
      const formattedAnswers = {
        examId: id,
        answers: questions?.payload.questions.map((q: IQuestion) => ({
          questionId: q.id,
          answerId: allAnswers[q.id] || "",
        })),
        // answers: questions?.payload.questions
        //   .filter((q) => allAnswers[q.id]) // ← شيل اللي معندهوش إجابة
        //   .map((q) => ({
        //     questionId: q.id,
        //     answerId: allAnswers[q.id],
        //   })),
        startedAt: new Date().toISOString(),
      };

      console.log(formattedAnswers, "formattedAnswers");

      // Send Answers
      submissionsAnswers(formattedAnswers, {
        onSuccess(data) {
          if (data.status) {
            setShowResults(true);
          } else {
            setShowResults(false);
          }
        },
      });
      return;
    }

    // Move To Next Que
    setcurrentQuestion((prev) => prev + 1);
  }

  // Reset Exam
  function resetExam() {
    setcurrentQuestion(0);
    setShowResults(false);
    setAllAnswers({});
  }

  // when time finsh redirct to result page
  function handleTimeUp() {
    const formattedAnswers = {
      examId: id,
      answers: questions?.payload.questions.map((q: IQuestion) => ({
        questionId: q.id,
        answerId: allAnswers[q.id] || "",
        // answerId: questions?.payload.questions
        //   .filter((q) => allAnswers[q.id])
        //   .map((q) => ({
        //     questionId: q.id,
        //     answerId: allAnswers[q.id],
        //   })),
      })),
      startedAt: new Date().toISOString(),
    };

    submissionsAnswers(formattedAnswers, {
      onSuccess(data) {
        if (data.status) {
          setShowResults(true);
        }
      },
    });
  }

  return (
    <>
      {isLoading ? (
        <SkilitonQuestions />
      ) : (
        <div className="p-6 bg-white overflow-hidden">
          <div className="header flex  items-center gap-6 mb-10">
            <div className="info grow flex flex-col gap-1.5 pe-6 border-e border-gray-200 py-3">
              <div className="title flex items-center justify-between">
                <h2 className="text-base text-gray-800 font-normal">
                  {title} - {titleExam}
                </h2>
                <p className="font-normal text-sm text-gray-500">
                  Question{" "}
                  <span className="text-blue-600 font-bold text-sm">
                    {currentQuestion + 1}
                  </span>{" "}
                  of {questions?.payload?.questions.length}
                </p>
              </div>
              <Progress
                value={
                  ((currentQuestion + 1) /
                    questions?.payload?.questions.length) *
                  100
                }
                className="h-4 rounded-none"
              />
            </div>
            {/* Chart */}
            <div className="chart w-16 h-16 flex items-center justify-center">
              {/* <ChartPieDonut /> */}
              <TimerChart examDuration={examDuration} onTimeUp={handleTimeUp} />
              {/* <ChartPieDonutText /> */}
            </div>
          </div>
          {/* Form */}
          {showResults && (
            <ExamResult
              resultId={data?.payload?.submission.id}
              restart={resetExam}
              diplomaId={diplomaId}
            />
          )}
          {!showResults && (
            <form onSubmit={handleAnswerSubmit}>
              {/* Questions */}
              <div className="questions-header">
                <h2 className="font-semibold text-2xl text-blue-600 mb-4">
                  {/* What does CSS stand for? */}
                  {questions?.payload?.questions[currentQuestion].text}
                </h2>
              </div>
              {/* Answer */}
              <div className="answers flex flex-col gap-2.5 mb-10">
                {questions?.payload?.questions[currentQuestion].answers.map(
                  (answer: IAnswer) => (
                    <div
                      key={answer.id}
                      onClick={() =>
                        selectAnswer(
                          questions?.payload?.questions[currentQuestion].id,
                          answer.id,
                        )
                      }
                      className="item flex items-center gap-2.5 p-4 has-[input:checked]:bg-gray-50 hover:bg-gray-100 tran"
                    >
                      <input
                        type="radio"
                        name={`answer-${answer.id}`}
                        id={`answer-${answer.id}`}
                        // onChange={}
                        // checked={allAnswers.some(
                        //   (ans) => ans.answerId === answer.id,
                        // )}
                        checked={
                          allAnswers[
                            questions?.payload?.questions[currentQuestion].id
                          ] === answer.id
                        }
                        onChange={() =>
                          selectAnswer(
                            questions?.payload?.questions[currentQuestion].id,
                            answer.id,
                          )
                        }
                        // onChange={() =>
                        //   selectAnswer(
                        //     questions?.payload.questions[currentQuestion].id,
                        //     answer.id,
                        //   )
                        // }
                        className={`w-4 h-4 checked:bg-blue-600`}
                      />
                      <label
                        htmlFor={`answer-${answer.id}`}
                        className="font-normal grow text-sm text-gray-800"
                      >
                        {/* Computer Style Sheets */}
                        {answer.text}
                      </label>
                    </div>
                  ),
                )}
              </div>
              {/* Buttons */}
              {error && <ErrorMessage message={error?.message} mb={"mb-10"} />}
              <div className="buttons flex items-center gap-4">
                <button
                  type="button"
                  disabled={currentQuestion === 0}
                  onClick={() => setcurrentQuestion(currentQuestion - 1)}
                  className=" grow px-4 py-2 bg-gray-200 text-gray-800 cursor-pointer hover:bg-gray-300 tran flex items-center justify-center disabled:cursor-not-allowed gap-2.5 text-sm font-medium disabled:text-gray-400 disabled:hover:bg-gray-200"
                >
                  <ChevronLeft size={18} />
                  Previous
                </button>
                <button
                  // disabled={
                  //   currentQuestion === questions?.payload.questions.length - 1
                  // }
                  type="submit"
                  className=" grow px-4 py-2 bg-blue-600 hover:bg-blue-700 tran flex items-center justify-center cursor-pointer gap-2.5 text-sm font-medium text-white"
                >
                  {currentQuestion === questions?.payload?.questions.length - 1
                    ? "Submit"
                    : "Next"}
                  {/* Next */}
                  <ChevronRight size={18} />
                </button>
              </div>
            </form>
          )}
        </div>
      )}
    </>
  );
}

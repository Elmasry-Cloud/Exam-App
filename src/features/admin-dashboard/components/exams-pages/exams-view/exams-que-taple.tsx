"use client";
import SortDropdownExams from "../exams-list/exams-sort-dropdown";
import ExamsEllipsisDropdown from "../exams-list/exams-ellipsis-dropdown";
import { useQuery } from "@tanstack/react-query";
import getQuestionsSingelExam from "@/features/admin-dashboard/apis/questions-pages/get-questions-exam.api";
import { useMemo, useState } from "react";
import SkilitonViewExamQue from "./skiliton-view-exam-que";

export default function ExamsQueTaple({ examId }: { examId?: string }) {
  // State For Diploma Taple Sort
  const [sortBy, setSortBy] = useState<"title" | "createdAt" | "questions">(
    "createdAt",
  );
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["Exam Questions", examId, sortBy, sortOrder],
    queryFn: () =>
      getQuestionsSingelExam({ examId: examId!, sortBy, sortOrder }),
  });

  const questions = useMemo(() => data?.payload.questions, [data]);
  // console.log(questions);

  return (
    <>
      {!isLoading && (
        <table className="w-full text-left">
          {/* Taple Head */}
          <thead className="bg-gray-200 border-b text-gray-800">
            <tr>
              <th className="w-full px-4 font-medium text-sm">Title</th>
              <SortDropdownExams
                setSortBy={setSortBy}
                setSortOrder={setSortOrder}
              />
            </tr>
          </thead>

          {/* Skiliton */}
          {isFetching && <SkilitonViewExamQue />}

          {/* Taple Body */}
          {!isFetching && questions && (
            <tbody className="bg-white">
              {/* Questions items */}

              {questions.map((question) => (
                <tr key={question.id} className="border-b border-b-gray-100">
                  <td className="py-2.5 px-4 font-medium text-sm text-gray-800">
                    {question.text}
                  </td>
                  <td className="py-2.5 px-4">
                    <ExamsEllipsisDropdown
                      questionId={question.id}
                      viewlink={`view-questions`}
                      editlink={`edit-questions`}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      )}
    </>
  );
}

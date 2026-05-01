"use client";
import deleteExam from "@/features/admin-dashboard/apis/exams-pages/delete-exam";
import { useQueryClient } from "@tanstack/react-query";
import { Ellipsis, Eye, PenLine, Plus, Trash2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ExamsEllipsisDropdown({
  examId,
  viewlink,
  questionId,
  editlink,
}: {
  examId?: string;
  viewlink: string;
  editlink: string;
  questionId?: string;
}) {
  //  State for dropdown
  const [showdropdown, setShowdropdown] = useState(false);

  // Get new data after Delete
  const queryClient = useQueryClient();

  async function deleteExamItem() {
    // console.log("delete");
    if (examId) {
      const data = await deleteExam(examId);
    }
    queryClient.invalidateQueries({ queryKey: ["All Exams"] });
    // console.log(data);
  }

  return (
    <>
      <div
        onClick={() => setShowdropdown(!showdropdown)}
        className="item relative mx-auto w-7.5 h-7.5 bg-gray-200 flex items-center justify-center cursor-pointer"
      >
        <Ellipsis size={18} strokeWidth={1.5} className="text-gray-800" />

        {/* Ellipsis Diploma Dropdown */}
        {showdropdown && (
          <div className="bg-white border z-10 border-gray-200 absolute top-full right-0 shadow-[0px_4px_10px_0px_#0000000D] w-50">
            {/* Item View */}
            {/* /view-exam/${examId} */}
            <Link
              href={`/dashboard/${viewlink}/${examId || questionId}`}
              className="item group tran p-3.5 flex items-center gap-2.5 cursor-pointer hover:bg-blue-50"
            >
              <Eye size={18} strokeWidth={1.25} className="text-emerald-500" />
              <h2 className="font-normal group-hover:font-semibold text-sm text-black flex items-center">
                View
              </h2>
            </Link>

            {/* Item Edit */}
            <Link
              // href={`/edit-exam/${examId}`}
              href={`/dashboard/${editlink}/${examId || questionId}`}
              className="item group tran p-3.5 flex items-center gap-2.5 cursor-pointer hover:bg-blue-50"
            >
              <PenLine size={18} strokeWidth={1.25} className="text-blue-600" />
              <h2 className="font-normal group-hover:font-semibold text-sm text-black flex items-center">
                Edit
              </h2>
            </Link>

            {/* Item Delete */}
            <button
              onClick={deleteExamItem}
              className="item group tran p-3.5 w-full flex items-center gap-2.5 cursor-pointer hover:bg-blue-50"
            >
              <Trash2 size={18} strokeWidth={1.25} className="text-red-500" />
              <h2 className="font-normal group-hover:font-semibold text-sm text-black flex items-center">
                Delete
              </h2>
            </button>

            {/* Item Add Questions */}
            <Link
              href={`/dashboard/add-questions`}
              className="item group tran p-3.5 flex items-center gap-2.5 cursor-pointer hover:bg-blue-50"
            >
              <Plus size={18} strokeWidth={1.25} className="text-emerald-500" />
              <h2 className="font-normal group-hover:font-semibold text-sm text-black flex items-center">
                Add Questions
              </h2>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

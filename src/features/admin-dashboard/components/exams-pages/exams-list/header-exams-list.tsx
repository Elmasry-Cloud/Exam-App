import { Button } from "@/shared/components/ui/button";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { IHeaderProps } from "./../../diplomas-pages/diplomas-list-page/header-diplomas-list";
import Link from "next/link";

export default function HeaderExamsList({
  metadata,
  page,
  setPage,
  isLoading,
}: IHeaderProps) {
  // console.log(metadata);
  return (
    <div className="bg-white border-t border-t-gray-100 py-1.5 px-6 flex items-center justify-between">
      {/* pagination */}
      <div className="pagination py-2.5 min-w-85 flex items-center gap-4">
        {/* item */}
        <div className="item font-normal text-sm text-gray-800">
          1 - {metadata?.limit} of {metadata?.total}
        </div>

        {/* page */}
        <div className="page flex items-center">
          {/* Arrow Left */}
          <Button
            onClick={() => setPage(page - 1)}
            disabled={page === 1 || isLoading}
            className="left w-10 h-10 bg-gray-200 hover:bg-gray-300 flex items-center justify-center cursor-pointer"
          >
            <ChevronLeft
              size={18}
              strokeWidth={1.5}
              className="text-gray-400"
            />
          </Button>

          {/* number of page */}
          <div className="num-page px-4 min-w-33.25 font-normal text-sm text-gray-400">
            Page {page} of {metadata?.totalPages}
          </div>

          {/* Arrow Right */}
          <Button
            onClick={() => setPage(page + 1)}
            disabled={page === metadata?.totalPages || isLoading}
            className="right w-10 h-10 bg-gray-200 hover:bg-gray-300 flex items-center justify-center cursor-pointer"
          >
            <ChevronRight
              size={18}
              strokeWidth={1.5}
              className="text-gray-400"
            />
          </Button>
        </div>
      </div>

      {/* Add Exam */}
      <Link
        href={`/dashboard/add-exam`}
        className={`bg-emerald-500 hover:bg-emerald-600 cursor-pointer px-4 h-10 flex items-center gap-2.5 text-white`}
      >
        <Plus size={18} strokeWidth={1.5} />
        <h2 className="text-sm font-medium">Create New Exam</h2>
      </Link>
    </div>
  );
}

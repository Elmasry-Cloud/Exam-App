import { Button } from "@/shared/components/ui/button";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import Link from "next/link";

// Set Interface
export interface IHeaderProps {
  metadata?: { page: number; totalPages: number; total: number; limit: number };
  page: number;
  setPage: (page: number) => void;
  isLoading: boolean;
}

export default function HeaderDiplomasList({
  metadata,
  page,
  setPage,
  isLoading,
}: IHeaderProps) {
  return (
    <div className="bg-white border-t border-t-gray-100 py-1.5 px-6 flex items-center justify-between">
      {/* pagination */}
      <div className="pagination py-2.5 w-85 flex items-center gap-4">
        {/* item */}
        <div className="item font-normal text-sm text-gray-800">
          1 - {metadata?.limit ?? 20} of {metadata?.total ?? 548}
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
          <div className="num-page px-4 w-33.25 font-normal text-sm text-gray-400">
            Page {metadata?.page ?? 1} of {metadata?.totalPages ?? 28}
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

      {/* Add Diploma */}
      <Link
        href={"/dashboard/add-diploma"}
        className={`bg-emerald-500 hover:bg-emerald-600 cursor-pointer px-4 h-10 flex items-center gap-2.5 text-white`}
      >
        <Plus size={18} strokeWidth={1.5} />
        <h2 className="text-sm font-medium">Add New Diploma</h2>
      </Link>
    </div>
  );
}

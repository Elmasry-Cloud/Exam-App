"use client";

import {
  ArrowDownAZ,
  ArrowDownWideNarrow,
  ArrowUpAZ,
  CalendarArrowDown,
  CalendarArrowUp,
} from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";

export interface IDiplomasFilterProps {
  sortBy?: "title" | "createdAt" | "questions";
  sortOrder?: "asc" | "desc";
  setSortBy?: Dispatch<SetStateAction<"title" | "createdAt" | "questions">>;
  setSortOrder?: Dispatch<SetStateAction<"asc" | "desc">>;
  examsList?: boolean;
}

export default function DiplomasSortDropdown({
  setSortBy,
  setSortOrder,
}: IDiplomasFilterProps) {
  // State For Sort
  const [showSort, setShowSort] = useState(false);

  // Handle Sort Fun
  const handleSort = (sortBy: "title" | "createdAt", order: "asc" | "desc") => {
    setSortBy && setSortBy(sortBy);
    setSortOrder && setSortOrder(order);
    setShowSort(false);
  };

  return (
    <>
      <th
        onClick={() => setShowSort(!showSort)}
        className="px-4 font-medium text-sm flex items-center gap-1.5 h-9 relative cursor-pointer"
      >
        Sort
        <ArrowDownWideNarrow size={18} strokeWidth={1.25} />
        {/* dropdown Sort */}
        {showSort && (
          // Container Div
          <div className="bg-white w-49.75 z-20 border border-gray-200 absolute top-full right-0 shadow-[0px_4px_10px_0px_#0000000D]">
            {/* Item Sort Title descending */}
            <div
              onClick={() => handleSort("title", "desc")}
              className="item group tran p-3.5 flex items-center gap-2.5 cursor-pointer hover:bg-blue-50"
            >
              <ArrowDownAZ
                size={18}
                strokeWidth={1.25}
                className="text-gray-500"
              />
              <h2 className="font-normal group-hover:font-semibold text-sm text-black flex items-center">
                Title
                <span className="ms-1 font-normal text-[10px] text-gray-500">
                  (descending)
                </span>
              </h2>
            </div>

            {/* Item  Sort Title ascending*/}
            <div
              onClick={() => handleSort("title", "asc")}
              className="item group tran p-3.5 flex items-center gap-2.5 cursor-pointer hover:bg-blue-50 hover:font-semibold"
            >
              <ArrowUpAZ
                size={18}
                strokeWidth={1.25}
                className="text-gray-500"
              />
              <h2 className="font-normal group-hover:font-semibold text-sm text-black flex items-center">
                Title
                <span className="ms-1 font-normal text-[10px] text-gray-500">
                  (ascending)
                </span>
              </h2>
            </div>

            {/*  Item Sort Newest descending */}
            <div
              onClick={() => handleSort("createdAt", "desc")}
              className="item group tran p-3.5 flex items-center gap-2.5 cursor-pointer hover:bg-blue-50 hover:font-semibold"
            >
              <CalendarArrowDown
                size={18}
                strokeWidth={1.25}
                className="text-gray-500"
              />
              <h2 className="font-normal group-hover:font-semibold text-sm text-black flex items-center">
                Newest
                <span className="ms-1 font-normal text-[10px] text-gray-500">
                  (descending)
                </span>
              </h2>
            </div>

            {/*  Item Sort Newest ascending */}
            <div
              onClick={() => handleSort("createdAt", "asc")}
              className="item group tran p-3.5 flex items-center gap-2.5 cursor-pointer hover:bg-blue-50 hover:font-semibold"
            >
              <CalendarArrowUp
                size={18}
                strokeWidth={1.25}
                className="text-gray-500"
              />
              <h2 className="font-normal group-hover:font-semibold text-sm text-black flex items-center">
                Newest
                <span className="ms-1 font-normal text-[10px] text-gray-500">
                  (ascending)
                </span>
              </h2>
            </div>
          </div>
        )}
      </th>
    </>
  );
}

"use client";
import deleteDiploma from "@/features/admin-dashboard/apis/diplomas-pages/delete-diploma";
import { useQueryClient } from "@tanstack/react-query";
import { Ellipsis, Eye, PenLine, Trash2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function DiplomaEllipsisDropdown({
  diplomaId,
}: {
  diplomaId: string;
}) {
  //  State for dropdown
  const [showdropdown, setShowdropdown] = useState(false);
  // console.log(diplomaId);

  // Get new data after Delete
  const queryClient = useQueryClient();

  async function deleteDiplomaItem() {
    const data = await deleteDiploma(diplomaId);
    queryClient.invalidateQueries({ queryKey: ["Diplomas"] });
    // console.log(data);
    // if (data.status) {
    //   location.href = "/dashboard";
    // }
    // console.log(data);
  }

  return (
    <>
      <div
        onClick={() => setShowdropdown(!showdropdown)}
        className="item relative mx-auto w-7.5 h-7.5 bg-gray-200 flex items-center justify-center cursor-pointer"
      >
        {/* icon */}
        <Ellipsis size={18} strokeWidth={1.5} className="text-gray-800" />

        {/* Ellipsis Diploma Dropdown */}
        {showdropdown && (
          <div className="bg-white border z-10 border-gray-200 absolute top-full right-0 shadow-[0px_4px_10px_0px_#0000000D] w-34">
            {/* Item View */}
            <Link
              href={`/dashboard/view-diploma/${diplomaId}`}
              className="item group tran p-3.5 flex items-center gap-2.5 cursor-pointer hover:bg-blue-50"
            >
              <Eye size={18} strokeWidth={1.25} className="text-emerald-500" />
              <h2 className="font-normal group-hover:font-semibold text-sm text-black flex items-center">
                View
              </h2>
            </Link>

            {/* Item Edit */}
            <Link
              href={`/dashboard/edit-diploma/${diplomaId}`}
              className="item group tran p-3.5 flex items-center gap-2.5 cursor-pointer hover:bg-blue-50"
            >
              <PenLine size={18} strokeWidth={1.25} className="text-blue-600" />
              <h2 className="font-normal group-hover:font-semibold text-sm text-black flex items-center">
                Edit
              </h2>
            </Link>

            {/* Item Delete */}
            <button
              onClick={deleteDiplomaItem}
              className="item group w-full tran p-3.5 flex items-center gap-2.5 cursor-pointer hover:bg-blue-50"
            >
              <Trash2 size={18} strokeWidth={1.25} className="text-red-500" />
              <h2 className="font-normal group-hover:font-semibold text-sm text-black flex items-center">
                Delete
              </h2>
            </button>
          </div>
        )}
      </div>
    </>
  );
}

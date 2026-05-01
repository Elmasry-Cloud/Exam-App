"use client";
import deleteDiploma from "@/features/admin-dashboard/apis/diplomas-pages/delete-diploma";
import { Button } from "@/shared/components/ui/button";
import { useQueryClient } from "@tanstack/react-query";
import { Ban, PenLine, Trash2 } from "lucide-react";
import Link from "next/link";

export default function DiplomasViewHeader2({
  diplomaTitle,
  diplomaId,
}: {
  diplomaTitle: string;
  diplomaId: string;
}) {
  const queryClient = useQueryClient();

  async function deleteDiplomaItem() {
    const data = await deleteDiploma(diplomaId);

    if (data.status) {
      queryClient.invalidateQueries({ queryKey: ["Diplomas"] });
    }
  }

  return (
    <div className="bg-white border-t border-t-gray-100 py-1.5 px-6 flex items-center justify-between">
      {/* Title Info */}
      <h1 className="title-info font-inter font-semibold text-lg text-black">
        {diplomaTitle}
      </h1>

      {/* Buttons */}
      <div className="buttons p-2.5 flex items-center gap-2.5">
        {/* Btn 1 */}
        <Button
          className={`bg-gray-200 hover:bg-gray-300 cursor-pointer px-4 h-10 font-medium text-sm text-gray-800 flex items-center gap-2.5`}
        >
          <Ban size={18} strokeWidth={1.5} className="text-gray-800" />
          Immutable
        </Button>

        {/* Btn 2 Edit */}
        <Link
          href={`/dashboard/edit-diploma/${diplomaId}`}
          className={`bg-blue-600 hover:bg-blue-700 cursor-pointer px-4 h-10 font-medium text-sm text-white flex items-center gap-2.5`}
        >
          <PenLine size={18} strokeWidth={1.5} className="text-white" />
          Edit
        </Link>

        {/* Btn 3 Delete */}
        <Button
          onClick={deleteDiplomaItem}
          className={`bg-red-600 hover:bg-red-700 cursor-pointer px-4 h-10 font-medium text-sm text-white flex items-center gap-2.5`}
        >
          <Trash2 size={18} strokeWidth={1.5} className="text-white" />
          Delete
        </Button>
      </div>
    </div>
  );
}

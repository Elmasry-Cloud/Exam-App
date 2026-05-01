"use client";
import { IExamData } from "@/features/user-dashboard/types/exams";
import { Button } from "@/shared/components/ui/button";
import { ExternalLink, Save, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ExamsEditHeader2({
  exam,
  formId,
}: {
  exam: IExamData;
  formId: string;
}) {
  const router = useRouter();
  return (
    <div className="bg-white border-t border-t-gray-100 py-1.5 px-6 flex items-center justify-between">
      {/* Title Info */}
      <div>
        {/* Exam Title */}
        <h1 className="title-info font-inter font-semibold text-lg text-black">
          {exam.title}
        </h1>

        {/* Diploma Title */}
        <h2 className="font-normal text-sm text-gray-400 font-inter flex items-center gap-1">
          Diploma:
          <Link href={""} className="flex items-center gap-0.5">
            {exam.diploma.title}{" "}
            <ExternalLink
              size={14}
              strokeWidth={0.94}
              className="text-gray-400"
            />
          </Link>
        </h2>
      </div>

      {/* Buttons */}
      <div className="buttons p-2.5 flex items-center gap-2.5">
        {/* Button 1 */}
        <Button
          type="button"
          onClick={() => router.back()}
          className={`bg-gray-200 hover:bg-gray-300 px-4 cursor-pointer h-10 flex items-center gap-2.5 text-gray-800`}
        >
          <X size={18} strokeWidth={1.5} className="text-black" />
          Cancle
        </Button>

        {/* Button 2 */}
        <Button
          type="submit"
          form={formId}
          className={`bg-emerald-500 hover:bg-emerald-600 px-4 cursor-pointer h-10 flex items-center gap-2.5 text-white`}
        >
          <Save size={18} strokeWidth={1.5} className="text-white" />
          Save
        </Button>
      </div>
    </div>
  );
}

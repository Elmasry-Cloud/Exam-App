"use client";
import { Button } from "@/shared/components/ui/button";
import { Save, X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ExamsAddHeader2({ formId }: { formId: string }) {
  const router = useRouter();
  return (
    <div className="bg-white border-t border-t-gray-100 py-1.5 px-6 flex items-center justify-end">
      {/* Title Info */}
      {/* No Title in Add */}
      {/* <div>
        <h1 className="title-info font-inter font-semibold text-lg text-black">
          Final Full Stack Development Certification Exam
        </h1>
        <h2 className="font-normal text-sm text-gray-400 font-inter flex items-center gap-1">
          Diploma:
          <Link href={""} className="flex items-center gap-0.5">
            Full Stack Development{" "}
            <ExternalLink
              size={14}
              strokeWidth={0.94}
              className="text-gray-400"
            />
          </Link>
        </h2>
      </div> */}

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
          form={formId}
          type="submit"
          className={`bg-emerald-500 hover:bg-emerald-600 px-4 cursor-pointer h-10 flex items-center gap-2.5 text-white`}
        >
          <Save size={18} strokeWidth={1.5} className="text-white" />
          Save
        </Button>
      </div>
    </div>
  );
}

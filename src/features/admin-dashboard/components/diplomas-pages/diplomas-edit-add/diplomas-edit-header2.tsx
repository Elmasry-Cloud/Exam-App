"use client";
import { Button } from "@/shared/components/ui/button";
import { Save, X } from "lucide-react";
import { useRouter } from "next/navigation";

interface IProps {
  formId: string;
}

export default function DiplomasEditHeader2({ formId }: IProps) {
  const router = useRouter();

  return (
    <div className="bg-white border-t border-t-gray-100 py-1.5 px-6 flex items-center justify-between">
      {/* Title Info */}
      <div className="title-info font-inter font-semibold text-lg text-black">
        {/* AI & ML Development */}
      </div>

      {/* Buttons */}
      <div className="buttons p-2.5 flex items-center gap-2.5">
        {/* Button 1 Cancle */}
        <Button
          // form={formId}
          type="button"
          onClick={() => router.back()}
          className={`bg-gray-200 hover:bg-gray-300 px-4 cursor-pointer h-10 flex items-center gap-2.5 text-gray-800`}
        >
          <X size={18} strokeWidth={1.5} className="text-black" />
          Cancle
        </Button>

        {/* Button 2 Save */}
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

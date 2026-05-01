import { Button } from "@/shared/components/ui/button";
import { CopyPlus, Save, X } from "lucide-react";

export default function QuestionsAddBulkHeader2() {
  return (
    <div className="bg-white border-t border-t-gray-100 py-1.5 px-6 flex items-center justify-between">
      {/* Button Bulk Mode */}
      <Button
        className={`flex items-center gap-2.5 text-sm font-medium text-white h-10 px-4 bg-blue-600 hover:bg-blue-700 cursor-pointer`}
      >
        <CopyPlus size={18} />
        Bulk Add Mode
      </Button>

      {/* Buttons */}
      <div className="buttons p-2.5 flex items-center gap-2.5">
        {/* Button 1 */}
        <Button
          className={`bg-gray-200 hover:bg-gray-300 px-4 cursor-pointer h-10 flex items-center gap-2.5 text-gray-800`}
        >
          <X size={18} strokeWidth={1.5} className="text-black" />
          Cancle
        </Button>

        {/* Button 2 */}
        <Button
          className={`bg-emerald-500 hover:bg-emerald-600 px-4 cursor-pointer h-10 flex items-center gap-2.5 text-white`}
        >
          <Save size={18} strokeWidth={1.5} className="text-white" />
          Save
        </Button>
      </div>
    </div>
  );
}

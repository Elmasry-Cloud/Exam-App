import { FieldDescription } from "@/shared/components/ui/field";
import { CircleX } from "lucide-react";

interface IMessage {
  message: string;
  mb?: string;
  mt?: string;
}

export default function ErrorMessage({ message, mb, mt }: IMessage) {
  return (
    <div className={`relative mt-4 ${mb} ${mt}`}>
      <CircleX
        size={18}
        className="absolute left-1/2 -translate-x-1/2 -top-2.25 text-red-600 bg-white"
      />
      <FieldDescription
        className={`text-red-600 bg-red-50 p-2.5 border border-red-600 text-center text-sm font-normal`}
      >
        {/* mb-9 */}
        {message}
      </FieldDescription>
    </div>
  );
}

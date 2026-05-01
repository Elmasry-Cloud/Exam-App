import Image from "next/image";
import { Download, Trash2 } from "lucide-react";
import { Input } from "@/shared/components/ui/input";

export default function ExamImage({ image }: { image: string }) {
  return (
    <>
      <div className="image">
        <label className="font-medium text-base text-gray-800 flex flex-col gap-1 cursor-pointer">
          Image
          <Input type="file" className="text-gray-800 h-25 hidden" />
          {/* Image */}
          <ImageComponent image={image} />
        </label>
      </div>
    </>
  );
}

export function ImageComponent({
  image,
  file,
}: {
  image: string;
  file?: File | null;
}) {
  return (
    <>
      <div className="p-1.5 bg-gray-50 border border-gray-200 flex items-center justify-between gap-2.5">
        {/* img */}
        <div className="image w-21.5 h-21.5 ">
          <Image
            src={image}
            alt="exam-image"
            width={86}
            height={86}
            className="object-cover w-full h-full"
          />
        </div>

        {/* image info */}
        <div className="info text-gray-600 font-normal text-sm">
          <h2>{file ? file.name : (image.split("/").pop() ?? "image")}</h2>
        </div>

        {/* action */}
        <div className="action p-2.5 font-normal text-xs text-gray-400 flex items-center gap-2.5">
          <p>{file ? (file.size / (1024 * 1024)).toFixed(2) : null}</p>

          <div className="line w-4.5 border border-gray-200 -rotate-90"></div>

          {/* icons */}
          <div className="flex items-center gap-1.5">
            <Download size={18} strokeWidth={1.25} className="text-blue-500" />
            <Trash2 size={18} strokeWidth={1.25} className="text-red-500" />
          </div>
        </div>
      </div>
    </>
  );
}

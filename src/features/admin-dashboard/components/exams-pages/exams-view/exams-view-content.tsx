import Image from "next/image";
import Img from "@/images/dip.png";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { IExamData } from "@/features/user-dashboard/types/exams";
import SkilitonViewContent from "./skiliton-view-content";

export default function ExamsViewContent({
  examData,
}: {
  examData: IExamData;
}) {
  return (
    <>
      {/* Skiliton */}
      {!examData && <SkilitonViewContent />}

      {/* exam data */}
      {examData && (
        <div className="p-6">
          <div className="content bg-white p-4 flex flex-col gap-4">
            {/* Image */}
            <div className="image flex flex-col gap-1 w-75 h-75">
              <h2 className="text-gray-400 font-normal text-sm">Image</h2>
              <Image
                src={examData.image ?? ""}
                alt="image-view"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Title */}
            <div className="flex flex-col gap-1 font-normal text-sm">
              <h2 className="text-gray-400">Title</h2>
              <h1 className="text-black">{examData.title}</h1>
            </div>

            {/* Description */}
            <div className="flex flex-col gap-1 font-normal text-sm">
              <h2 className="text-gray-400">Description</h2>
              <p className="text-gray-800">{examData.description}</p>
            </div>

            {/* Diploma */}
            <div className="flex flex-col gap-1 font-normal text-sm">
              <h2 className="text-gray-400">Diploma</h2>
              <Link
                href={""}
                className="text-gray-800 flex items-center gap-1.5"
              >
                {examData.diploma.title}
                <ExternalLink
                  size={18}
                  strokeWidth={0.94}
                  className="text-black"
                />
              </Link>
            </div>

            {/* Duration */}
            <div className="flex flex-col gap-1 font-normal text-sm">
              <h2 className="text-gray-400">Duration</h2>
              <p className="text-gray-800">{examData.duration} Minutes</p>
            </div>

            {/* No. of Questions */}
            <div className="flex flex-col gap-1 font-normal text-sm">
              <h2 className="text-gray-400">No. of Questions</h2>
              <p className="text-gray-800">{examData.questionsCount}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

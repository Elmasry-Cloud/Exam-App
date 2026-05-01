import Image from "next/image";
import { IDiplomaData } from "@/features/user-dashboard/types/diplomas";

export default function DiplomasViewContent({
  diploma,
}: {
  diploma: IDiplomaData;
}) {
  return (
    <div className="p-6">
      <div className="content bg-white p-4 flex flex-col gap-4">
        {/* Image */}
        <div className="image flex flex-col gap-1 w-75 h-75">
          <h2 className="text-gray-400 font-normal text-sm">Image</h2>
          <Image
            src={diploma?.image ?? ""}
            alt={diploma?.title}
            width={300}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Title */}
        <div className="flex flex-col gap-1 font-normal text-sm">
          <h2 className="text-gray-400">Title</h2>
          <h1 className="text-black">{diploma?.title}</h1>
        </div>

        {/* Description */}
        <div className="flex flex-col gap-1 font-normal text-sm">
          <h2 className="text-gray-400">Description</h2>
          <p className="text-gray-800">{diploma?.description}</p>
        </div>
      </div>
    </div>
  );
}

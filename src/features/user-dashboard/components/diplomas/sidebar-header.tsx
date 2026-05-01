import Image from "next/image";
import ImageLogo from "@/Images/Final Logo 1.png";
import ImageFile from "@/Images/Vector.png";
export default function SidebarHeader() {
  return (
    <div className="logo mb-14 w-48 flex flex-col gap-2.5">
      <Image src={ImageLogo} alt="logo-img" />
      <header className="flex items-center gap-2.5 text-blue-600 text-xl font-semibold">
        <Image src={ImageFile} alt="file-img" className="h-7.5 object-cover" />
        Exam App
      </header>
    </div>
  );
}

import { BookOpenCheck, Brain, RectangleEllipsis } from "lucide-react";
import Image from "next/image";
import ImageFolder from "@/images/Vector.png";

export default function AuthSide() {
  return (
    <>
      <div className="relative flex items-center justify-center overflow-hidden">
        <div className="page-left absolute w-full h-full -z-10 blur-[12rem]"></div>
        <div className="w-3/4">
          <div className="head flex items-center gap-2.5 w-fit text-blue-600">
            <Image
              src={ImageFolder}
              alt="folder-image"
              width={40}
              height={40}
            />

            <h3 className="font-semibold text-xl">Exam App</h3>
          </div>
          <div className="details mt-12">
            <h1 className="font-bold text-3xl text-gray-800 mb-15">
              Empower your learning journey with our smart exam platform.
            </h1>
            <ul className="flex flex-col gap-10">
              <li className="flex gap-5">
                <Brain
                  size={40}
                  className="text-blue-600 p-1.5 border-1.5 border-blue-600"
                />
                <div className="text flex flex-col gap-2.5">
                  <h2 className="font-semibold text-xl text-blue-600">
                    Tailored Diplomas
                  </h2>
                  <p className="font-normal text-gray-700">
                    Choose from specialized tracks like Frontend, Backend, and
                    Mobile Development.
                  </p>
                </div>
              </li>
              <li className="flex gap-5">
                <BookOpenCheck
                  size={40}
                  className="text-blue-600 p-1.5 border-1.5 border-blue-600"
                />
                <div className="text flex flex-col gap-2.5">
                  <h2 className="font-semibold text-xl text-blue-600">
                    Focused Exams
                  </h2>
                  <p className="font-normal text-gray-700">
                    Access topic-specific tests including HTML, CSS, JavaScript,
                    and more.
                  </p>
                </div>
              </li>
              <li className="flex gap-5">
                <RectangleEllipsis
                  size={40}
                  className="text-blue-600 p-1.5 border-1.5 border-blue-600"
                />
                <div className="text flex flex-col gap-2.5">
                  <h2 className="font-semibold text-xl text-blue-600">
                    Smart Multi-Step Forms
                  </h2>
                  <p className="font-normal text-gray-700">
                    Choose from specialized tracks like Frontend, Backend, and
                    Mobile Development.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

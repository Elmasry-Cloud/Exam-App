import Image from "next/image";
import SortDropdownExams from "./exams-sort-dropdown";
import ExamsEllipsisDropdown from "./exams-ellipsis-dropdown";
import { IExamsDataProps } from "./exams-list-main-content";
import SkilitonExamList from "./skiliton-exam-list";

export default function AdminExamsListTable({
  examsData,
  setSortBy,
  setSortOrder,
  isFetching,
}: IExamsDataProps) {
  // const exam :
  // console.log(examsData);
  return (
    <>
      <table className="w-full text-left mt-6">
        {/* table head */}
        <thead className="bg-blue-600 border-b text-white h-9">
          <tr>
            <th className="px-4 font-medium text-sm">Image</th>
            <th className="px-4 font-medium text-sm w-50" colSpan={3}>
              Title
            </th>
            <th className="px-4 font-medium text-sm">Diploma</th>
            <th className="px-4 font-medium text-sm">No. of Questions</th>

            {/* SortDropdown */}
            <SortDropdownExams
              setSortBy={setSortBy}
              setSortOrder={setSortOrder}
              examsList={true}
            />
          </tr>
        </thead>

        {/* table body */}
        <tbody className="bg-white">
          {/* Skiliton exam list */}
          {isFetching && <SkilitonExamList />}

          {/* Exam Data */}
          {!isFetching &&
            examsData?.map((exam) => (
              <tr
                key={exam.id}
                className="border-b border-b-gray-100 h-25 tran hover:bg-gray-50"
              >
                {/* Image */}
                <td className="w-22.5 h-25 p-2.5">
                  <Image
                    src={exam.image ?? ""}
                    alt="tableImg"
                    width={70}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </td>

                {/* Title */}
                <td className="py-2.5 h-25 px-4" colSpan={3}>
                  <h2 className="text-sm h-full text-gray-800 font-medium leading-25">
                    {exam.title}
                  </h2>
                </td>

                {/* Diploma Title */}
                <td className="py-2.5 px-4">
                  <h2 className="text-sm text-gray-800 font-normal truncate max-w-[15ch]">
                    {exam.diploma.title}
                  </h2>
                </td>

                {/* No. of Questions */}
                <td className="py-2.5 px-4">
                  <h2 className="text-sm text-gray-800 font-normal">
                    {exam.questionsCount}
                  </h2>
                </td>

                {/* Sort */}
                <td className="py-2.5 px-4">
                  <ExamsEllipsisDropdown
                    examId={exam.id}
                    viewlink={`view-exam`}
                    editlink={"edit-exam"}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

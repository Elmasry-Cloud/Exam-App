"use client";
import {
  BookOpenCheck,
  CircleQuestionMark,
  MoveRight,
  Timer,
} from "lucide-react";
import Image from "next/image";
import { useMemo } from "react";
import Link from "next/link";
import DiplomasHeader from "./diplomas-header";
import { BreadcrumbBasicDiplomas } from "./bread-crumb-diplomas";
import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import getAllExams from "@/features/admin-dashboard/apis/exams-pages/get-all-exams.api";
import SkilitonExams from "./skiliton-exams";

export default function SingelDiplomaExams({
  diplomaId,
}: {
  diplomaId: string;
}) {
  // Query fun
  const { data, error, isLoading, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["All Exams", diplomaId],
      queryFn: async ({ pageParam }) =>
        getAllExams({ pageParam, limit: 6, diplomaId }),
      initialPageParam: 1,
      getNextPageParam: (lastPage) => {
        const page = lastPage.payload?.metadata?.page;
        const totalPages = lastPage.payload?.metadata?.totalPages;
        if (
          page === undefined ||
          totalPages === undefined ||
          page >= totalPages
        ) {
          return undefined;
        }
        return page + 1;
      },
    });
  // console.log(data);

  // Get All Exams
  const exams = useMemo(
    () => data?.pages.flatMap((page) => page.payload?.data ?? []),
    [data],
  );

  // console.log(exams?.length);

  return (
    <>
      {/* Bread crumb title */}
      <BreadcrumbBasicDiplomas
        href={`/diplomas/${diplomaId}`}
        text={exams?.[0].diploma.title}
      />
      <main className="p-6">
        {/* Header */}
        <DiplomasHeader hrefBack={"/"} text={exams?.[0].diploma.title}>
          <BookOpenCheck size={45} />
        </DiplomasHeader>

        {/* Loading Skiliton */}
        {isLoading && <SkilitonExams />}

        {/* Error Message  */}

        {error && <p>{error?.message}</p>}

        {/* Infinite Scroll */}
        <>
          <InfiniteScroll
            dataLength={exams?.length ?? 0}
            next={fetchNextPage}
            hasMore={hasNextPage}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p className="text-gray-600 font-normal text-base flex flex-col items-center justify-center p-2.5 mt-4">
                End of list
              </p>
            }
            pullDownToRefreshThreshold={50}
          >
            <div className="flex flex-col gap-4 p-6 bg-white">
              {exams &&
                exams?.map((exam) => (
                  <div
                    // href={{ pathname: "/diplomas/questions", query: { id: exam.id } }}
                    // href={`/diplomas/questions/${exam.id}?title=${exam.title}&diplomaId=${diplomaId}&diplomaTitle=${diplomaData?.payload.diploma.title}`}
                    key={exam.id}
                    className="exam-item overflow-hidden bg-blue-50 p-4 flex gap-4 relative border border-transparent hover:border-blue-300 hover:custom-border-dash"
                  >
                    {/* <div className="exam-item bg-blue-50 p-4 flex gap-4 relative border border-transparent hover:border-blue-300 hover:custom-dash border-dashed-[5px]"> */}
                    <div className="exam-image bg-blue-100 border border-blue-300 w-25 h-25 flex items-center justify-center">
                      <Image
                        src={exam?.image ?? ""}
                        alt={exam.title}
                        width={74}
                        height={74}
                        className="w-18.5 h-18.5 object-cover"
                      />
                    </div>
                    <div className="exam-info flex-1 flex flex-col gap-1.5">
                      <div className="head flex items-center justify-between">
                        <h1 className="font-geist-mono font-semibold text-xl text-blue-600">
                          {/* HTML Exam */}
                          {exam.title}
                        </h1>
                        <div className="item flex items-center gap-3">
                          <div className="question flex items-center gap-1.5 font-normal text-sm text-gray-800">
                            <CircleQuestionMark size={18} />
                            {exam.questionsCount} Questions
                          </div>
                          <div className="time flex items-center gap-1.5 font-normal text-sm text-gray-800">
                            <Timer size={18} />
                            {exam.duration} minutes
                          </div>
                        </div>
                      </div>
                      <p className="text-sm font-normal text-gray-500">
                        {exam.description}
                        {/* <span className="font-semibold text-gray-800 text-sm cursor-pointer">
                See More
              </span> */}
                      </p>
                    </div>
                    <Link
                      href={`/diplomas/questions/${exam.id}?title=${exam.title}&diplomaId=${diplomaId}&diplomaTitle=${exam.diploma.title}&examDuration=${exam.duration}`}
                      className="start-exam tran text-sm font-normal text-white flex items-center gap-2.5 py-1.5 px-4 bg-blue-600 cursor-pointer absolute bottom-2.5 -right-full hover:bg-blue-700 transition"
                    >
                      START
                      <MoveRight size={18} />
                    </Link>
                  </div>
                ))}
            </div>
          </InfiniteScroll>
        </>
      </main>
    </>
  );
}

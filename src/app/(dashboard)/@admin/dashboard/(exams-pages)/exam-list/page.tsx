"use client";
import getAllExams from "@/features/admin-dashboard/apis/exams-pages/get-all-exams.api";
import { AdminBreadcrumbDiplomas } from "@/features/admin-dashboard/components/diplomas-pages/diplomas-list-page/admin-breadcrumb-diplomas";
import ExamsListMainContent from "@/features/admin-dashboard/components/exams-pages/exams-list/exams-list-main-content";
import HeaderExamsList from "@/features/admin-dashboard/components/exams-pages/exams-list/header-exams-list";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";

export default function ExamListPage() {
  // State For Diploma Page Taple
  const [page, setPage] = useState(1);

  // State For Diploma Search
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const [immutability, setImmutability] = useState<boolean | null>(null);
  const [diplomaId, setDiplomaId] = useState<string>("");
  // console.log(immutability, "ssssssss");

  // State For Diploma Taple Sort
  const [sortBy, setSortBy] = useState<"title" | "createdAt" | "questions">(
    "createdAt",
  );
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const {
    data: examsData,
    isFetching,
    isLoading,
  } = useQuery({
    queryKey: ["All Exams", page, search, sortBy, sortOrder, diplomaId],
    queryFn: () =>
      getAllExams({
        pageParam: page,
        limit: 12,
        search,
        sortBy,
        sortOrder,
        diplomaId,
      }),
  });
  // console.log(examsData);

  // Get Exams Data
  const exams = useMemo(() => {
    const allExams = examsData?.payload.data ?? [];
    // Condition Search
    if (immutability === null) return allExams;

    return allExams.filter((exam) => exam.immutable === immutability);
  }, [examsData, immutability]);

  // get diploma title of exams
  // const diplomaTitle = exams.map((exam) => exam.diploma);
  const diplomaTitle = [
    ...new Map(exams.map((exam) => [exam.diplomaId, exam.diploma])).values(),
  ];
  // console.log(diplomaTitle);

  // Get Metadata
  const metaData = useMemo(() => examsData?.payload.metadata, [examsData]);
  // console.log(exams);

  return (
    <>
      {/* Header */}
      <div className="sticky z-50 top-0">
        {/* AdminBreadcrumb Diplomas*/}
        <AdminBreadcrumbDiplomas defaultTitle={"Exams"} />

        {/* HeaderDiplomasList Diplomas*/}
        <HeaderExamsList
          metadata={metaData}
          page={page}
          setPage={setPage}
          isLoading={isLoading}
        />
      </div>

      {/* Exams List Content */}
      <ExamsListMainContent
        examsData={exams}
        diplomaTitle={diplomaTitle}
        setSearch={setSearch}
        searchInput={searchInput}
        setDiplomaId={setDiplomaId}
        setSearchInput={setSearchInput}
        setImmutability={setImmutability}
        setPage={setPage}
        isFetching={isFetching}
        setSortBy={setSortBy}
        setSortOrder={setSortOrder}
      />
    </>
  );
}

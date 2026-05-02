"use client";
import { AdminBreadcrumbDiplomas } from "@/features/admin-dashboard/components/diplomas-pages/diplomas-list-page/admin-breadcrumb-diplomas";
import ContentSectionDiplomasList from "@/features/admin-dashboard/components/diplomas-pages/diplomas-list-page/content-section";
import HeaderDiplomasList from "@/features/admin-dashboard/components/diplomas-pages/diplomas-list-page/header-diplomas-list";

import { useMemo, useState } from "react";
import getDeplomas from "@/features/user-dashboard/apis/diplomas-apis/diplomas.api";
import { useQuery } from "@tanstack/react-query";

export default function DiplomasListPage() {
  // State For Diploma Page Taple
  const [page, setPage] = useState(1);

  // State For Diploma Search
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const [immutability, setImmutability] = useState<boolean | null>(null);
  // console.log(immutability, "ssssssss");

  // State For Diploma Taple Sort
  const [sortBy, setSortBy] = useState<"title" | "createdAt" | "questions">(
    "createdAt",
  );
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  // Get Diplomas Query
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["Diplomas", page, search, sortBy, sortOrder],
    queryFn: () =>
      getDeplomas({ pageParam: page, limit: 12, search, sortBy, sortOrder }),
  });

  // Get Metadata
  const metadata = useMemo(() => data?.payload.metadata, [data]);
  // const diplomas = data?.payload.data ?? [];

  // Get Diplomas Data
  const diplomas = useMemo(() => {
    // All Data
    const all = data?.payload.data ?? [];

    // Condition Search
    if (immutability === null) return all;

    return all.filter((diploma) => diploma.immutable === immutability);
  }, [data, immutability]);

  // console.log("render");

  // console.log(diplomas);

  return (
    <>
      {/* Header */}
      <div className="sticky z-50 top-0">
        {/* AdminBreadcrumb Diplomas*/}
        <AdminBreadcrumbDiplomas defaultTitle={"Diplomas"} />

        {/* HeaderDiplomasList Diplomas*/}
        <HeaderDiplomasList
          metadata={metadata}
          page={page}
          setPage={setPage}
          isLoading={isLoading}
        />
      </div>

      {/* content Section */}
      <ContentSectionDiplomasList
        setSearch={setSearch}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        setImmutability={setImmutability}
        setPage={setPage}
        isFetching={isFetching}
        diplomas={diplomas}
        setSortBy={setSortBy}
        setSortOrder={setSortOrder}
      />
    </>
  );
}

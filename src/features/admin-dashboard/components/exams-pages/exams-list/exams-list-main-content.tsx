import { IExamData } from "@/features/user-dashboard/types/exams";
import AdminExamsSearch from "./exams-search";
import AdminExamsListTable from "./admin-exams-list-table";
import { Dispatch, SetStateAction } from "react";

export interface IExamsDataProps {
  examsData?: Array<IExamData>;
  diplomaTitle?: { id: string; title: string }[];
  isFetching?: boolean;
  setSearch?: Dispatch<SetStateAction<string>>;
  setPage?: Dispatch<SetStateAction<number>>;
  searchInput?: string;
  setSearchInput?: Dispatch<SetStateAction<string>>;
  setDiplomaId?: Dispatch<SetStateAction<string>>;
  setImmutability?: Dispatch<SetStateAction<boolean | null>>;
  sortBy?: "title" | "createdAt" | "questions";
  setSortBy?: Dispatch<SetStateAction<"title" | "createdAt" | "questions">>;
  sortOrder?: "asc" | "desc";
  setSortOrder?: Dispatch<SetStateAction<"asc" | "desc">>;
}

export default function ExamsListMainContent({
  examsData,
  diplomaTitle,
  isFetching,
  setSearch,
  setPage,
  searchInput,
  setSearchInput,
  setImmutability,
  setSortBy,
  setSortOrder,
  setDiplomaId,
}: IExamsDataProps) {
  return (
    <>
      <div className="p-6">
        {/* Diplomas Search */}
        <AdminExamsSearch
          setSearch={setSearch}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          setImmutability={setImmutability}
          setPage={setPage}
          diplomaTitle={diplomaTitle}
          setDiplomaId={setDiplomaId}
        />

        {/* Diplomas List */}
        {/* <ExamsListItems /> */}
        <AdminExamsListTable
          examsData={examsData}
          setSortBy={setSortBy}
          setSortOrder={setSortOrder}
          isFetching={isFetching}
        />
      </div>
    </>
  );
}

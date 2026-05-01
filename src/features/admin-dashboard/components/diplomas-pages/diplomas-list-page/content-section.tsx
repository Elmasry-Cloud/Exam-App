import { IDiplomaData } from "@/features/user-dashboard/types/diplomas";
import AdminDiplomasListTable from "./diplomas-list-items";
// import DiplomasListItems from "./diplomas-list-items";
import AdminDiplomasSearch from "./diplomas-search";
import AdminSkilitonDiplomas from "./admin-skiliton-diplomas";
import { Dispatch, SetStateAction } from "react";

export interface IDiplomasProps {
  diplomaTitle?: { id: string; title: string }[];
  setDiplomaId?: Dispatch<SetStateAction<string>>;
  diplomas?: Array<IDiplomaData>;
  isFetching?: boolean;
  setSearch?: Dispatch<SetStateAction<string>>;
  setPage?: Dispatch<SetStateAction<number>>;
  searchInput?: string;
  setSearchInput?: Dispatch<SetStateAction<string>>;
  setImmutability?: Dispatch<SetStateAction<boolean | null>>;
  sortBy?: "title" | "createdAt";
  setSortBy?: Dispatch<SetStateAction<"title" | "createdAt">>;
  sortOrder?: "asc" | "desc";
  setSortOrder?: Dispatch<SetStateAction<"asc" | "desc">>;
}

export default function ContentSectionDiplomasList({
  diplomas,
  isFetching,
  setSearch,
  setPage,
  searchInput,
  setSearchInput,
  setImmutability,
  setSortBy,
  setSortOrder,
}: IDiplomasProps) {
  return (
    <div className="p-6">
      {/* Diplomas Search */}
      <AdminDiplomasSearch
        setSearch={setSearch}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        setImmutability={setImmutability}
        setPage={setPage}
      />

      {/* Diplomas List */}
      {isFetching ? (
        <AdminSkilitonDiplomas />
      ) : (
        <AdminDiplomasListTable
          diplomas={diplomas}
          setSortBy={setSortBy}
          setSortOrder={setSortOrder}
        />
      )}
    </div>
  );
}

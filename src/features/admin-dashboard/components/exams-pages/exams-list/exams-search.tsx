import {
  ChevronsDownUp,
  ChevronsUpDown,
  Search,
  SlidersHorizontal,
} from "lucide-react";

import { Button } from "@/shared/components/ui/button";
import { Field } from "@/shared/components/ui/field";
import { Input } from "@/shared/components/ui/input";
import { useState } from "react";
import { IDiplomasProps } from "../../diplomas-pages/diplomas-list-page/content-section";

export default function AdminExamsSearch({
  setSearch,
  setPage,
  searchInput,
  setSearchInput,
  setImmutability,
  diplomaTitle,
  setDiplomaId,
}: IDiplomasProps) {
  // State for open search box
  const [isOpen, setIsOpen] = useState(true);

  // console.log(diplomaTitle);
  return (
    <div className="search-filter">
      {/* header */}
      <header className="bg-blue-600 p-2.5 text-white flex items-center justify-between">
        {/* Title */}
        <div className="item flex items-center gap-1.5">
          <SlidersHorizontal size={20} strokeWidth={1.75} />
          <h2 className="font-semibold text-base">Search & Filters</h2>
        </div>

        {/* Hide & Show */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="item-hide flex items-center gap-1 cursor-pointer"
        >
          {isOpen ? (
            <ChevronsDownUp size={14} strokeWidth={1.75} />
          ) : (
            <ChevronsUpDown size={14} strokeWidth={1.75} />
          )}
          <h2 className="font-medium text-sm">{isOpen ? "Hide" : "Show"}</h2>
        </button>
      </header>

      {/* content */}
      <div
        className={`content bg-white tran transition-all duration-300 overflow-hidden ${isOpen ? "max-h-96 p-4 opacity-100 visible" : "max-h-0 p-0 opacity-0 invisible"}`}
      >
        {/* Search Input */}
        <SearchInput
          setSearch={setSearch}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          setPage={setPage}
          setImmutability={setImmutability}
          diplomaTitle={diplomaTitle}
          setDiplomaId={setDiplomaId}
        />
      </div>
    </div>
  );
}

// Search input Fun Component
export function SearchInput({
  setSearch,
  searchInput,
  setSearchInput,
  setPage,
  setImmutability,
  diplomaTitle,
  setDiplomaId,
}: IDiplomasProps) {
  // State for Mutable options
  const [mutable, setMutable] = useState<boolean | null>(null);
  const [selectedDiplomaId, setSelectedDiplomaId] = useState<string>("");
  return (
    <>
      {/* Search Input */}
      <Field
        orientation="horizontal"
        className="border border-gray-200 relative"
      >
        {/* Input Search */}
        <Input
          type="search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput && setSearchInput(e.target.value);
          }}
          placeholder="Search by title"
          className="text-gray-400 font-normal text-sm"
        />
        {/* Search Icon */}
        <Search
          size={16}
          strokeWidth={2}
          className="text-gray-200 absolute right-3.75 top-1/2 -translate-y-1/2"
        />
      </Field>

      {/* Select diploma & immutability */}
      <div className="flex items-center gap-2.5">
        {/* Select 1 diploma*/}
        <div className="relative w-81.5 border border-gray-200  my-2.5">
          {/* Select Opt */}
          <select
            defaultValue=""
            onChange={(e) => {
              setSelectedDiplomaId(e.target.value);
              // const val = e.target.value;
              // setDiplomaId && setDiplomaId(val);
              // setPage && setPage(1);
            }}
            className="w-full h-11.5 p-2.5 font-normal text-sm text-gray-400 appearance-none"
          >
            <option value="" disabled hidden>
              Diploma
            </option>
            {diplomaTitle?.map((diploma) => (
              <option key={diploma.id} value={diploma.id}>
                {diploma.title}
              </option>
            ))}
          </select>

          {/* icon */}
          <div className="pointer-events-none absolute inset-y-0 right-3.25 flex items-center">
            <ChevronsUpDown
              size={20}
              writingMode={2}
              className="text-gray-400"
            />
          </div>
        </div>

        {/* Select 2 Immutability*/}
        <div className="relative w-81.5 border border-gray-200  my-2.5">
          {/* Select Opt */}
          <select
            defaultValue={mutable === null ? "" : String(mutable)}
            onChange={(e) => {
              const val = e.target.value;
              if (val === "None" || val === "") setMutable(null);
              else setMutable(val === "Mutable");
            }}
            className="w-full h-11.5 p-2.5 font-normal text-sm text-gray-400 appearance-none"
          >
            <option value="" disabled hidden>
              Immutability
            </option>
            <option value="None">None</option>
            <option value="Immutable">Immutable</option>
            <option value="Mutable">Mutable</option>
          </select>

          {/* icon */}
          <div className="pointer-events-none absolute inset-y-0 right-3.25 flex items-center">
            <ChevronsUpDown
              size={20}
              writingMode={2}
              className="text-gray-400"
            />
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex items-center justify-end gap-2.5">
        {/* Clear Button */}
        <Button
          onClick={() => {
            setSearchInput && setSearchInput("");
            setSearch && setSearch("");
            setPage && setPage(1);
            setImmutability && setImmutability(null);
            setMutable(null);
            setDiplomaId && setDiplomaId("");
            setSelectedDiplomaId("");
          }}
          className={`font-medium text-sm text-gray-800 bg-transparent hover:bg-transparent cursor-pointer`}
        >
          Clear
        </Button>

        {/* Apply Button */}
        <Button
          onClick={() => {
            searchInput && setSearch && setSearch(searchInput);
            setPage && setPage(1);
            setImmutability && setImmutability(mutable);
            setDiplomaId && setDiplomaId(selectedDiplomaId);
          }}
          className={`bg-gray-200 hover:bg-gray-300 cursor-pointer w-25 h-9 font-medium text-sm text-gray-800`}
        >
          Apply
        </Button>
      </div>
    </>
  );
}

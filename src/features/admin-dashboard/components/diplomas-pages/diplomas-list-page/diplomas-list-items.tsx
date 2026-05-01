"use client";

import Image from "next/image";
import DiplomasSortDropdown from "./diplomas-sort-dropdown";
import DiplomaEllipsisDropdown from "./diploma-ellipsis-dropdown";
import { IDiplomasProps } from "./content-section";

export default function AdminDiplomasListTable({
  diplomas,
  setSortBy,
  setSortOrder,
}: IDiplomasProps) {
  // console.log(diplomas);
  return (
    <>
      {/* Diplomas Taple */}
      <table className="w-full text-left mt-6">
        {/* table head */}
        <thead className="bg-blue-600 border-b text-white h-9">
          <tr>
            <th className="px-4 font-medium text-sm">Image</th>
            <th className="px-4 font-medium text-sm w-50">Title</th>
            <th className="px-4 font-medium text-sm">Description</th>

            {/* SortDropdown */}
            <DiplomasSortDropdown
              setSortBy={setSortBy}
              setSortOrder={setSortOrder}
            />
          </tr>
        </thead>

        {/* table body */}
        <tbody className="bg-white">
          {diplomas?.map((diploma) => (
            <tr
              key={diploma.id}
              className="border-b border-b-gray-100 h-25 tran hover:bg-gray-50"
            >
              {/* Image */}
              <td className="w-22.5 h-25 p-2.5">
                {diploma.image && (
                  <Image
                    src={diploma.image}
                    alt={diploma.title}
                    width={70}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                )}
              </td>

              {/* Title */}
              <td className="py-2.5 h-25 px-4 relative group">
                <h2 className="text-sm h-full leading-25 text-gray-800 font-normal truncate max-w-[20ch]">
                  {diploma.title}
                </h2>
                {/* P Hover */}
                <p className="group-hover:block hidden bg-gray-800 absolute left-0 w-full -top-3 p-2.5 font-normal text-sm text-white/85 text-center before:content-[''] before:border-t-13 before:border-x-[7px] before:border-t-gray-800 before:border-x-transparent before:absolute before:top-full before:left-1/2 before:-translate-x-1/2">
                  {diploma.title}
                </p>
              </td>

              {/* Description */}
              <td className="py-2.5 px-4">
                <h2 className="text-sm text-gray-500 font-normal overflow-clip line-clamp-4">
                  {diploma.description}
                </h2>
              </td>

              {/* Sort */}
              <td className="py-2.5 px-4">
                <DiplomaEllipsisDropdown diplomaId={diploma.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

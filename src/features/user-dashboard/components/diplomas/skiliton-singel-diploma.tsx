import React from "react";
import SkilitonExams from "./skiliton-exams";

export default function SkilitonSingelDiploma() {
  return (
    <>
      {/* breadcrumb Skiliton */}
      <div className="breadcrumb-skeleton flex items-center gap-2 p-4 bg-white animate-pulse">
        <div className="h-4 w-20 bg-blue-100 rounded"></div>
        <div className="h-4 w-4 bg-blue-200 rounded-full"></div>
        <div className="h-4 w-24 bg-blue-100 rounded"></div>
        <div className="h-4 w-4 bg-blue-200 rounded-full"></div>
        <div className="h-4 w-28 bg-blue-100 rounded"></div>
      </div>
      {/* Header Skiliton */}
      <div className="header-skeleton flex items-center gap-4 p-4 bg-blue-600 text-white animate-pulse">
        <div className="h-10 w-10 bg-blue-300 rounded"></div>
        <div className="h-6 w-40 bg-blue-200 rounded"></div>
      </div>
      {/* Exam Skiliton */}
      <SkilitonExams />
    </>
  );
}

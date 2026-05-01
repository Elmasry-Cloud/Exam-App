import React from "react";

export default function SkilitonViewContent() {
  return (
    <>
      <div className="p-6">
        <div className="content bg-white p-4 flex flex-col gap-4">
          {/* Image Skeleton */}
          <div className="flex flex-col gap-1 w-75 h-75">
            <div className="h-3 w-12 bg-blue-100 rounded animate-pulse relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-200/40 to-transparent animate-[shimmer_1.5s_infinite]" />
            </div>
            <div className="w-full h-full bg-blue-100 rounded animate-pulse relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-200/40 to-transparent animate-[shimmer_1.5s_infinite]" />
            </div>
          </div>

          {/* Title Skeleton */}
          <div className="flex flex-col gap-1">
            <div className="h-3 w-10 bg-blue-100 rounded animate-pulse relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-200/40 to-transparent animate-[shimmer_1.5s_infinite]" />
            </div>
            <div className="h-4 w-1/3 bg-blue-100 rounded animate-pulse relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-200/40 to-transparent animate-[shimmer_1.5s_infinite]" />
            </div>
          </div>

          {/* Description Skeleton */}
          <div className="flex flex-col gap-1">
            <div className="h-3 w-16 bg-blue-100 rounded animate-pulse relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-200/40 to-transparent animate-[shimmer_1.5s_infinite]" />
            </div>
            <div className="space-y-1.5">
              <div className="h-3 w-full bg-blue-100 rounded animate-pulse relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-200/40 to-transparent animate-[shimmer_1.5s_infinite]" />
              </div>
              <div className="h-3 w-5/6 bg-blue-100 rounded animate-pulse relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-200/40 to-transparent animate-[shimmer_1.5s_infinite]" />
              </div>
              <div className="h-3 w-4/6 bg-blue-100 rounded animate-pulse relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-200/40 to-transparent animate-[shimmer_1.5s_infinite]" />
              </div>
            </div>
          </div>

          {/* Diploma Skeleton */}
          <div className="flex flex-col gap-1">
            <div className="h-3 w-12 bg-blue-100 rounded animate-pulse relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-200/40 to-transparent animate-[shimmer_1.5s_infinite]" />
            </div>
            <div className="flex items-center gap-1.5">
              <div className="h-4 w-1/4 bg-blue-100 rounded animate-pulse relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-200/40 to-transparent animate-[shimmer_1.5s_infinite]" />
              </div>
              <div className="h-4 w-4 bg-blue-100 rounded animate-pulse" />
            </div>
          </div>

          {/* Duration Skeleton */}
          <div className="flex flex-col gap-1">
            <div className="h-3 w-14 bg-blue-100 rounded animate-pulse relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-200/40 to-transparent animate-[shimmer_1.5s_infinite]" />
            </div>
            <div className="h-4 w-24 bg-blue-100 rounded animate-pulse relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-200/40 to-transparent animate-[shimmer_1.5s_infinite]" />
            </div>
          </div>

          {/* No. of Questions Skeleton */}
          <div className="flex flex-col gap-1">
            <div className="h-3 w-24 bg-blue-100 rounded animate-pulse relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-200/40 to-transparent animate-[shimmer_1.5s_infinite]" />
            </div>
            <div className="h-4 w-8 bg-blue-100 rounded animate-pulse relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-200/40 to-transparent animate-[shimmer_1.5s_infinite]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

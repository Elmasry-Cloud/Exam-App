export default function SkilitonDiplomas() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5">
      {[1, 2, 3, 4, 5, 6].map((_, i) => (
        <div key={i} className="h-112 relative overflow-hidden rounded-2xl">
          {/* Image Skeleton */}
          <div className="w-full h-full bg-blue-100 animate-pulse relative">
            {/* Shimmer */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="w-[200%] h-full bg-linear-to-r from-transparent via-blue-200/40 to-transparent animate-[shimmer_1.5s_infinite]" />
            </div>
          </div>

          {/* Info Skeleton */}
          <div className="w-[calc(100%-1.25rem)] absolute bottom-2.5 left-1/2 -translate-x-1/2 p-4 bg-blue-50/70 backdrop-blur-md rounded-xl">
            {/* Title */}
            <div className="h-5 w-2/3 bg-blue-200 rounded mb-2 animate-pulse" />

            {/* Description lines */}
            <div className="space-y-1">
              <div className="h-3 w-full bg-blue-100 rounded animate-pulse" />
              <div className="h-3 w-5/6 bg-blue-100 rounded animate-pulse" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

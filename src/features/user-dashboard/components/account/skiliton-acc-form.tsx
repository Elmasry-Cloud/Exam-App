export default function AccountFormSkeleton() {
  return (
    <div className="py-6 w-full">
      {/* First & Last Name */}
      <div className="grid grid-cols-2 gap-2.5 mb-4">
        {[0, 1].map((i) => (
          <div key={i}>
            <div className="h-3 w-16 bg-blue-200 rounded animate-pulse mb-1.5" />
            <div className="h-9 w-full bg-blue-100 rounded animate-pulse relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-200/40 to-transparent animate-[shimmer_1.5s_infinite]" />
            </div>
          </div>
        ))}
      </div>

      {/* Username */}
      <div className="mb-4">
        <div className="h-3 w-18 bg-blue-200 rounded animate-pulse mb-1.5" />
        <div className="h-9 w-full bg-blue-50 rounded animate-pulse relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-200/40 to-transparent animate-[shimmer_1.5s_infinite]" />
        </div>
      </div>

      {/* Email */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-1.5">
          <div className="h-3 w-12 bg-blue-200 rounded animate-pulse" />
          <div className="h-3 w-16 bg-blue-200 rounded animate-pulse" />
        </div>
        <div className="h-9 w-full bg-blue-100 rounded animate-pulse relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-200/40 to-transparent animate-[shimmer_1.5s_infinite]" />
        </div>
      </div>

      {/* Phone */}
      <div className="mb-6">
        <div className="h-3 w-14 bg-blue-200 rounded animate-pulse mb-1.5" />
        <div className="flex gap-2">
          <div className="h-9 w-24 bg-blue-100 rounded animate-pulse relative overflow-hidden flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-200/40 to-transparent animate-[shimmer_1.5s_infinite]" />
          </div>
          <div className="h-9 flex-1 bg-blue-100 rounded animate-pulse relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-200/40 to-transparent animate-[shimmer_1.5s_infinite]" />
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3.5">
        <div className="h-11.5 flex-1 bg-red-100 rounded animate-pulse relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-200/40 to-transparent animate-[shimmer_1.5s_infinite]" />
        </div>
        <div className="h-11.5 flex-1 bg-blue-200 rounded animate-pulse relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-300/40 to-transparent animate-[shimmer_1.5s_infinite]" />
        </div>
      </div>
    </div>
  );
}

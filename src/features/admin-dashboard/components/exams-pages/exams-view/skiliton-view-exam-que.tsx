export default function SkilitonViewExamQue() {
  return (
    <>
      {Array.from({ length: 8 }).map((_, i) => (
        <tr key={i} className="border-b border-b-gray-100">
          {/* Title Skeleton */}
          <td className="py-2.5 px-4">
            <div className="h-4 w-3/4 bg-blue-100 rounded animate-pulse relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-200/40 to-transparent animate-[shimmer_1.5s_infinite]" />
            </div>
          </td>

          {/* Actions Skeleton */}
          <td className="py-2.5 px-4">
            <div className="h-8 w-8 bg-blue-100 rounded-full animate-pulse relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-200/40 to-transparent animate-[shimmer_1.5s_infinite]" />
            </div>
          </td>
        </tr>
      ))}
    </>
  );
}

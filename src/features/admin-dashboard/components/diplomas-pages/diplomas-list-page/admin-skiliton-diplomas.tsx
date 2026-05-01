export default function AdminSkilitonDiplomas() {
  return (
    <table className="w-full text-left mt-6">
      <thead className="bg-blue-600 border-b text-white h-9">
        <tr>
          <th className="px-4 font-medium text-sm">Image</th>
          <th className="px-4 font-medium text-sm w-50">Title</th>
          <th className="px-4 font-medium text-sm">Description</th>
          <th className="px-4 font-medium text-sm">Actions</th>
        </tr>
      </thead>
      <tbody className="bg-white">
        {Array.from({ length: 12 }).map((_, i) => (
          <tr key={i} className="border-b border-b-gray-100 h-25">
            {/* Image Skeleton */}
            <td className="w-22.5 h-25 p-2.5">
              <div className="w-full h-full bg-blue-100 animate-pulse rounded relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-200/40 to-transparent animate-[shimmer_1.5s_infinite]" />
              </div>
            </td>

            {/* Title Skeleton */}
            <td className="py-2.5 px-4">
              <div className="h-4 w-3/4 bg-blue-100 rounded animate-pulse relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-200/40 to-transparent animate-[shimmer_1.5s_infinite]" />
              </div>
            </td>

            {/* Description Skeleton */}
            <td className="py-2.5 px-4">
              <div className="space-y-2">
                <div className="h-3 w-full bg-blue-100 rounded animate-pulse relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-200/40 to-transparent animate-[shimmer_1.5s_infinite]" />
                </div>
                <div className="h-3 w-5/6 bg-blue-100 rounded animate-pulse relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-200/40 to-transparent animate-[shimmer_1.5s_infinite]" />
                </div>
                <div className="h-3 w-4/6 bg-blue-100 rounded animate-pulse relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-200/40 to-transparent animate-[shimmer_1.5s_infinite]" />
                </div>
                <div className="h-3 w-3/6 bg-blue-100 rounded animate-pulse relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-200/40 to-transparent animate-[shimmer_1.5s_infinite]" />
                </div>
              </div>
            </td>

            {/* Actions Skeleton */}
            <td className="py-2.5 px-4">
              <div className="h-8 w-8 bg-blue-100 rounded-full animate-pulse" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

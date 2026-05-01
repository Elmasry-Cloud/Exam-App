export default function SkilitonResults() {
  return (
    <>
      {/* Skeleton */}
      <div className="result-container grid grid-cols-[275px_1fr] gap-4 animate-pulse">
        {/* Chart Skeleton */}
        <div className="bg-blue-50 border border-blue-200 p-9 flex flex-col items-center justify-center gap-4">
          {/* Circle Chart */}
          <div className="w-50.75 h-50.75 rounded-full bg-blue-200"></div>

          {/* Chart Info */}
          <div className="p-2.5 flex flex-col gap-2.5 w-full">
            <div className="flex items-center gap-2.5">
              <div className="w-4 h-4 bg-blue-200"></div>
              <div className="h-4 w-24 bg-blue-200 rounded"></div>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-4 h-4 bg-blue-200"></div>
              <div className="h-4 w-24 bg-blue-200 rounded"></div>
            </div>
          </div>
        </div>

        {/* Answers Skeleton */}
        <div className="result-border p-1.5 h-128.5 w-full overflow-hidden flex flex-col gap-2.5">
          <div className="p-2.5 flex flex-col gap-5">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="flex flex-col gap-2.5">
                {/* Question */}
                <div className="h-6 w-3/4 bg-blue-200 rounded"></div>

                {/* Wrong Answer */}
                <div className="flex items-center gap-2.5 bg-red-50 p-4">
                  <div className="w-4 h-4 rounded-full bg-red-200 shrink-0"></div>
                  <div className="h-4 w-full bg-red-100 rounded"></div>
                </div>

                {/* Correct Answer */}
                <div className="flex items-center gap-2.5 bg-emerald-50 p-4">
                  <div className="w-4 h-4 rounded-full bg-emerald-200 shrink-0"></div>
                  <div className="h-4 w-full bg-emerald-100 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Buttons Skeleton */}
      <div className="buttons mt-10 flex items-center gap-4 w-full animate-pulse">
        <div className="flex grow items-center justify-center gap-2.5 bg-gray-200 h-11.5">
          <div className="w-4 h-4 bg-gray-300 rounded"></div>
          <div className="h-4 w-16 bg-gray-300 rounded"></div>
        </div>
        <div className="flex grow items-center justify-center gap-2.5 bg-blue-300 h-11.5">
          <div className="w-4 h-4 bg-blue-200 rounded"></div>
          <div className="h-4 w-16 bg-blue-200 rounded"></div>
        </div>
      </div>
    </>
  );
}

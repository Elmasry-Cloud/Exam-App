export default function SkilitonQuestions() {
  return (
    <>
      {/* Questions Skiliton */}
      <>
        <div className="header-skeleton flex items-center gap-6 mb-10 animate-pulse">
          {/* معلومات العنوان */}
          <div className="info grow flex flex-col gap-2 pe-6 border-e border-blue-200 py-3">
            <div className="title flex items-center justify-between">
              <div className="h-5 w-48 bg-blue-200 rounded"></div>
              <div className="h-4 w-28 bg-blue-100 rounded"></div>
            </div>
            <div className="h-4 w-full bg-blue-100 rounded"></div>
          </div>

          {/* chart */}
          <div className="chart w-16 h-16 flex items-center justify-center">
            <div className="w-12 h-12 bg-blue-200 rounded-full"></div>
          </div>
        </div>
        {/* Questions */}
        <div className="questions-header mb-6 animate-pulse">
          <div className="h-6 w-3/4 bg-blue-200 rounded"></div>
        </div>
        {/* Answers */}
        <div className="answers flex flex-col gap-2.5 mb-10 animate-pulse">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="item flex items-center gap-2.5 p-4 border border-transparent hover:border-blue-300"
            >
              <div className="w-4 h-4 bg-blue-200 rounded"></div>
              <div className="h-4 w-40 bg-blue-100 rounded"></div>
            </div>
          ))}
        </div>
        {/* Buttons */}
        <div className="buttons flex items-center gap-4 animate-pulse">
          <div className="grow h-10 bg-blue-100 rounded"></div>
          <div className="grow h-10 bg-blue-200 rounded"></div>
        </div>
      </>
    </>
  );
}

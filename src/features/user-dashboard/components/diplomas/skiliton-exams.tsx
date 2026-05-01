export default function SkilitonExams() {
  return (
    <>
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="exam-item overflow-hidden bg-blue-50 p-4 flex gap-4 relative border border-transparent hover:border-blue-300 hover:custom-border-dash animate-pulse"
        >
          {/* صورة الامتحان */}
          <div className="exam-image bg-blue-100 border border-blue-300 w-25 h-25 flex items-center justify-center">
            <div className="w-18.5 h-18.5 bg-blue-200 rounded"></div>
          </div>

          {/* معلومات الامتحان */}
          <div className="exam-info flex-1 flex flex-col gap-2">
            <div className="head flex items-center justify-between">
              <div className="h-5 w-32 bg-blue-200 rounded"></div>
              <div className="item flex items-center gap-3">
                <div className="h-4 w-20 bg-blue-200 rounded"></div>
                <div className="h-4 w-16 bg-blue-200 rounded"></div>
              </div>
            </div>
            <div className="h-3 w-full bg-blue-100 rounded"></div>
            <div className="h-3 w-3/4 bg-blue-100 rounded"></div>
          </div>

          {/* زر البداية */}
          <div className="start-exam text-sm font-normal text-white flex items-center gap-2.5 py-1.5 px-4 bg-blue-300 absolute bottom-2.5 -right-full rounded">
            <div className="h-4 w-12 bg-blue-200 rounded"></div>
          </div>
        </div>
      ))}
    </>
  );
}

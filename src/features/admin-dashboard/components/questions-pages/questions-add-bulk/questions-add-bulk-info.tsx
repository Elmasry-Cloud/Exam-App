export default function QuestionsAddBulkInfo() {
  return (
    <>
      {/* Header */}
      <header className="p-2.5 bg-blue-600 text-white text-base font-semibold">
        Exam Info
      </header>

      {/* Questions Information */}
      <div className="info-content p-4 bg-white flex flex-col gap-4">
        {/* Label */}
        <label htmlFor="" className="font-medium text-base text-gray-800 mb-1">
          Exam
        </label>

        {/* Select Exam */}
        <select
          name="exam"
          defaultValue=""
          className="w-full h-11.5 p-2.5 font-normal text-sm text-gray-400 border border-gray-200 appearance-none"
        >
          <option value="" disabled hidden>
            Select exam
          </option>
          <option value="Exam-1">Exam-1</option>
          <option value="Exam-1">Exam-2</option>
          <option value="Exam-1">Exam-3</option>
        </select>
      </div>
    </>
  );
}

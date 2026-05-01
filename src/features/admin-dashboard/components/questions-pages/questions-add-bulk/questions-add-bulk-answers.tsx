import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Check, CheckCheck, Plus, Trash2 } from "lucide-react";

export default function QuestionsAddBulkAnswers() {
  return (
    <>
      <div className="mt-6">
        {/* Header */}
        <header className="p-2.5 bg-blue-600 text-white text-base font-semibold">
          Questions
        </header>

        {/* Questions Taps */}
        <div className="taps h-10 bg-gray-50 flex items-center w-full text-center">
          {/* Tap */}
          <p className="tap h-full grow py-2.5 border-r border-r-gray-200 font-normal text-base text-black">
            Q1
          </p>
          {/* Tap */}
          <p className="tap h-full grow py-2.5 border-r border-r-gray-200 font-normal text-base text-black">
            Q2
          </p>
          {/* Tap */}
          <p className="tap h-full grow py-2.5 border-r border-r-gray-200 font-normal text-base text-black">
            Q3
          </p>
          {/* Tap */}
          <p className="tap h-full grow py-2.5 border-r border-r-gray-200 font-normal text-base text-black">
            Q3
          </p>
        </div>

        {/* Questions Information */}
        <div className="answers-content bg-white flex flex-col border border-blue-600 p-4">
          {/* Questions Headline */}
          <div className="item mb-4">
            <label className="font-medium text-base text-gray-800 mb-1">
              Question Headline
            </label>
            <Input />
          </div>

          {/* Heading */}
          <div className="row border-b bg-gray-200 flex justify-between">
            <h2 className="py-2.5 px-4 ml-10 font-medium text-sm text-gray-800">
              Body
            </h2>

            {/* Button */}
            <Button
              className={`bg-emerald-500 hover:bg-emerald-600 h-10 py-2.5 px-4 text-white flex items-center gap-2.5 cursor-pointer`}
            >
              <Plus size={18} />
              Add Answer
            </Button>
          </div>

          {/* Answer 1 */}
          <div className="answers flex items-center border-b border-b-gray-200">
            {/* Icon delete */}
            <div className="icon-delete w-12.5 h-12.5 bg-red-50 flex items-center justify-center cursor-pointer">
              <Trash2 size={18} className="text-red-600" />
            </div>

            {/* answer text */}
            <h2 className="py-2.5 grow px-4 font-normal text-sm text-gray-800">
              Real-time Server Transaction
            </h2>

            {/* Not Correct ? */}
            <div className="correct-answer p-2.5">
              <Button
                className={`flex items-center gap-1.5 h-7.5 px-2.5 bg-gray-200 hover:bg-gray-300 cursor-pointer text-gray-800`}
              >
                <Check size={14} className="text-black" />
                Mark Correct
              </Button>
            </div>

            {/* Correct */}
            {/* <div className="correct-answer p-2.5">
            <Button
              className={`flex items-center gap-1.5 h-7.5 px-1.5 bg-transparent hover:bg-transparent text-emerald-500`}
            >
              <CheckCheck size={14} />
              Correct Answer
            </Button>
          </div> */}
          </div>

          {/* Answer 2 */}
          <div className="answers flex items-center border-b border-b-gray-200">
            {/* Icon delete */}
            <div className="icon-delete w-12.5 h-12.5 bg-red-50 flex items-center justify-center cursor-pointer">
              <Trash2 size={18} className="text-red-600" />
            </div>

            {/* answer text */}
            <h2 className="py-2.5 grow px-4 font-normal text-sm text-gray-800">
              Real-time Server Transaction
            </h2>

            {/* Not Correct ? */}
            {/* <div className="correct-answer p-2.5">
            <Button
              className={`flex items-center gap-1.5 h-7.5 px-2.5 bg-gray-200 hover:bg-gray-300 cursor-pointer text-gray-800`}
            >
              <Check size={14} className="text-black" />
              Mark Correct
            </Button>
          </div> */}

            {/* Correct */}
            <div className="correct-answer p-2.5">
              <Button
                className={`flex items-center gap-1.5 h-7.5 px-1.5 bg-transparent hover:bg-transparent text-emerald-500`}
              >
                <CheckCheck size={14} />
                Correct Answer
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Add Answer */}
      <div className="border-t bg-emerald-50 flex">
        {/* Input field */}
        <div className="input-field py-2.5 pl-2.5 grow ml-12.5">
          <Input
            className="p-2.5 border border-emerald-500 bg-white"
            placeholder="Enter answer body"
          />
        </div>

        {/* Button Add  */}
        <div className="p-2.5 w-37.5">
          <Button
            className={`flex items-center gap-1.5 w-full h-10 text-white bg-emerald-500 hover:bg-emerald-600 px-4 cursor-pointer`}
          >
            <Plus size={18} />
            Add
          </Button>
        </div>
      </div>
    </>
  );
}

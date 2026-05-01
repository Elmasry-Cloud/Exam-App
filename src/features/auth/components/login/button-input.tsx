import { Button } from "@/shared/components/ui/button";
import { Spinner } from "@/shared/components/ui/spinner";
import { ChevronRight } from "lucide-react";

interface ItextInfo {
  textInfo: string;
  isPending?: boolean;
  linkInfo?: string;
  lightbg?: boolean;
}

export default function ButtonInput({
  textInfo,
  isPending,
  linkInfo,
  lightbg,
}: ItextInfo) {
  return (
    <>
      {linkInfo !== "Create yours" ? (
        <Button
          type="submit"
          className={`w-full font-medium text-sm text-white py-5 rounded-none cursor-pointer bg-blue-600 hover:bg-blue-700  ${isPending && "disabled:bg-gray-200 cursor-not-allowed text-gray-400"} ${lightbg && "mt-6 bg-blue-50 hover:bg-blue-100 border-blue-600 text-gray-800"} ${textInfo == "Create Account" && "mt-5"} ${textInfo == "Update Password" && "mt-2"}`}
        >
          {isPending && <Spinner />}
          {textInfo}
          {textInfo == "Next" && <ChevronRight />}
        </Button>
      ) : (
        <Button
          type="submit"
          className={`w-full font-medium text-sm text-white py-5 rounded-none cursor-pointer bg-blue-600 hover:bg-blue-700 ${textInfo == "Reset Password" && "mt-10"} ${isPending && "disabled:bg-gray-200 text-gray-400"} ${textInfo == "Create Account" && "mt-5"}`}
        >
          {isPending && <Spinner />}
          {textInfo}
          {textInfo == "Next" && <ChevronRight />}
        </Button>
      )}
    </>
  );
  // == "Create yours"
}

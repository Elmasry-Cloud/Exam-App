import { Button } from "@/shared/components/ui/button";
import { TriangleAlert, X } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import deleteAccount from "../../apis/account-apis/delete-acc.api";
import { signOut } from "next-auth/react";

export default function LayoutDeleteAcc({
  setShowDeleteAccount,
}: {
  setShowDeleteAccount: Dispatch<SetStateAction<boolean>>;
}) {
  // delete account Fun
  async function deleteacc() {
    await deleteAccount();
    await signOut({ callbackUrl: "/login" });
    // console.log("deleted");
  }
  return (
    <div className="fixed top-0 left-0 bottom-0 p-2.5 bg-black/50 right-0 z-50 backdrop-blur-xs flex items-center justify-center">
      <div className="box-delete relative bg-white h-100.5 flex flex-col justify-between">
        {/* Content delete */}
        <div className="content grow p-9 flex flex-col items-center justify-center gap-7.5">
          {/* Icon */}
          <div className="icon rounded-full w-20 h-20 bg-red-100 flex items-center justify-center outline-15 outline-red-50">
            <TriangleAlert
              size={50}
              strokeWidth={2.5}
              className="text-red-600"
            />
          </div>

          {/* text */}
          <div className="text flex flex-col gap-2.5 items-center">
            <h1 className="font-medium text-lg text-red-600">
              Are you sure you want to delete your account?
            </h1>
            <p className="font-normal text-sm text-gray-500">
              This action is permanent and cannot be undone.
            </p>
          </div>
        </div>

        {/* Footer Delete */}
        <footer className="p-6 bg-gray-50 border-t border-t-gray-200 flex items-center justify-center gap-2.5">
          {/* cancle button */}
          <Button
            onClick={() => setShowDeleteAccount(false)}
            className={`bg-gray-200 hover:bg-gray-300 h-11.5 w-54.25 text-black cursor-pointer`}
          >
            Cancle
          </Button>

          {/* accept button */}
          <Button
            onClick={deleteacc}
            className={`bg-red-600 hover:bg-red-700 h-11.5 w-54.25 cursor-pointer`}
          >
            Yes, delete
          </Button>
        </footer>

        {/* Close icon */}
        <div
          onClick={() => setShowDeleteAccount(false)}
          className="close absolute top-3.5 right-3.5 cursor-pointer"
        >
          <X size={18} className="text-gray-500" />
        </div>
      </div>
    </div>
  );
}

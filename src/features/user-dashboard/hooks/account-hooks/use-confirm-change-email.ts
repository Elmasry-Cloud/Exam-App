import { useMutation } from "@tanstack/react-query";
import confirmEmailAPI from "../../apis/account-apis/confirm-change-email.api";

export default function useConfirmEmail() {
  const { data, error, isPending, mutate } = useMutation({
    mutationFn: confirmEmailAPI,
    // onSuccess(data) {
    //   console.log(data);
    // },
    // onError(error) {
    //   console.log(error.message);
    // },
  });
  return { data, error, isPending, confirmEmailAPI: mutate };
}

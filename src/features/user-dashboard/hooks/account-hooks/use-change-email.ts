import { useMutation } from "@tanstack/react-query";
import changeEmailAPI from "../../apis/account-apis/change-email.api";

export default function useChangeEmail() {
  const { data, error, isPending, mutate } = useMutation({
    mutationFn: changeEmailAPI,
    onSuccess(data) {
      console.log(data);
    },
    onError(error) {
      console.log(error.message);
    },
  });
  return { data, error, isPending, changeEmailAPI: mutate };
}

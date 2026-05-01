import { useMutation } from "@tanstack/react-query";
import changePasswordAction from "../../apis/change-acc-password-apis/change-password.api";

export default function useChangePassword() {
  const { data, error, isPending, mutate } = useMutation({
    mutationFn: changePasswordAction,
    // onSuccess: (data) => {
    //   console.log(data);
    // },
    // onError: (error) => {
    //   console.log(error);
    // },
  });
  return { data, error, isPending, changePasswordAction: mutate };
}

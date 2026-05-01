import { useMutation } from "@tanstack/react-query";
import resetPassword from "../apis/reset-password/reset.api";

export default function useResetPassword() {
  const { data, isPending, error, mutate } = useMutation({
    mutationFn: resetPassword,
    // onSuccess: (data) => {
    //   console.log(data);
    // },
    // onError: (error) => {
    //   console.log(error);
    // },
  });
  return { data, isPending, error, resetPassword: mutate };
}

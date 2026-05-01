import { useMutation } from "@tanstack/react-query";
import forgotPassword from "../apis/forgot-password/forget.api";

export default function useForgotPassword() {
  const { data, isPending, error, mutate } = useMutation({
    mutationFn: forgotPassword,
  });
  return { data, isPending, error, forgotPassword: mutate };
}

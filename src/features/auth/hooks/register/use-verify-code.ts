import { useMutation } from "@tanstack/react-query";
import verifyCodeAPI from "../../apis/register/verify-code.api";

export default function useVerfyCodeOTP() {
  const { data, error, isPending, mutate } = useMutation({
    mutationFn: verifyCodeAPI,
    // onSuccess: (data) => {
    //   console.log(data);
    // },
    // onError: (error) => {
    //   console.log(error);
    // },
  });
  return { data, error, isPending, verifyCodeAPI: mutate };
}

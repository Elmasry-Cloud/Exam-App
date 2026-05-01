import { useMutation } from "@tanstack/react-query";
import registerAPI from "../../apis/register/register.api";

export default function useRegister() {
  const { data, error, isPending, mutate } = useMutation({
    mutationFn: registerAPI,
    // onSuccess: (data) => {
    //   console.log(data);
    // },
    // onError: (error) => {
    //   console.log(error);
    // },
  });
  return { data, error, isPending, registerAPI: mutate };
}

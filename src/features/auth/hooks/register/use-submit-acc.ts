import { useMutation } from "@tanstack/react-query";
import submitAccData from "../../apis/register/submit-acc-data.api";

export default function useSubmitAccount() {
  const { data, error, isPending, mutate } = useMutation({
    mutationFn: submitAccData,
    // onSuccess: (data) => {
    //   console.log(data);
    // },
    // onError: (error) => {
    //   console.log(error);
    // },
  });
  return { data, submitError: error, isPending, submitAccData: mutate };
}

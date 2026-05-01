import { useMutation } from "@tanstack/react-query";
import submissionsAnswers from "../../apis/diplomas-apis/submissions.api";

export default function useSubmissionsAction() {
  const { data, error, mutate, isPending } = useMutation({
    mutationFn: submissionsAnswers,
    // onSuccess: (data) => {
    //   console.log(data);
    // },
    // onError: (error) => {
    //   console.log(error.message);
    // },
  });
  return { data, error, submissionsAnswers: mutate, isPending };
}

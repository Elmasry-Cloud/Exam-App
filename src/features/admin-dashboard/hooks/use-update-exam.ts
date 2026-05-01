import { useMutation } from "@tanstack/react-query";
import updateExam from "../apis/exams-pages/update-exam.api";

export default function useUpdateExam() {
  const { data, isPending, error, mutate } = useMutation({
    mutationFn: updateExam,
    // onSuccess(data) {
    //   console.log(data);
    // },
    // onError(err) {
    //   console.log(err.message);
    // },
  });
  return { data, isPending, error, updateExam: mutate };
}

import { useMutation } from "@tanstack/react-query";
import addExam from "../apis/exams-pages/add-exam.api";

export default function useAddExam() {
  const { data, isPending, error, mutate } = useMutation({
    mutationFn: addExam,
    // onSuccess(data) {
    //   console.log(data);
    // },
    // onError(err) {
    //   console.log(err.message);
    // },
  });
  return { data, isPending, error, addExam: mutate };
}

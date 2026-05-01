import { useMutation } from "@tanstack/react-query";
import updateDiploma from "../apis/diplomas-pages/update-diploma.api";

export default function useUpdateDiploma() {
  const { data, isPending, error, mutate } = useMutation({
    mutationFn: updateDiploma,
    // onSuccess(data) {
    //   console.log(data);
    // },
    // onError(err) {
    //   console.log(err.message);
    // },
  });
  return { data, isPending, error, updateDiploma: mutate };
}

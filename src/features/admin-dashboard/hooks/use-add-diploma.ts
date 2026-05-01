import { useMutation } from "@tanstack/react-query";
import addDiploma from "../apis/diplomas-pages/add-diploma.api";

export default function useAddDiploma() {
  const { data, isPending, error, mutate } = useMutation({
    mutationFn: addDiploma,
    // onSuccess(data) {
    //   console.log(data);
    // },
    // onError(err) {
    //   console.log(err.message);
    // },
  });
  return { data, isPending, error, addDiploma: mutate };
}

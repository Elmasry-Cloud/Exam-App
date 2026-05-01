import { useMutation } from "@tanstack/react-query";
import changeProfileData from "../../apis/account-apis/change-profile.api";

export default function useChangeProfileDataAction() {
  const { data, error, isPending, mutate } = useMutation({
    mutationFn: changeProfileData,
    // onSuccess: (data) => {
    //   console.log(data, "helo");
    // },
    // onError: (error) => {
    //   console.log(error);
    // },
  });
  return { data, error, isPending, changeProfileData: mutate };
}

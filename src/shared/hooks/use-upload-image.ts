import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { ApiRes } from "../types/api-res";
import { IUploadImage } from "@/features/admin-dashboard/types/diplomas-page/edit-diploma";
import { useState } from "react";

export default function useUploadImage() {
  const [uploadProgress, setUploadProgress] = useState(0);
  // const mutation = useMutation({
  //   mutationFn: async (image: File) => {
  //     const formData = new FormData();
  //     formData.append("image", image);

  //     const res = await axios.post<ApiRes<IUploadImage>>(
  //       `/api/upload-image`,
  //       formData,
  //       {
  //         onUploadProgress(progressEvent) {
  //           setUploadProgress(
  //             Math.round(
  //               (progressEvent?.loaded * 100) / (progressEvent?.total || 1),
  //             ),
  //           );
  //         },
  //       },
  //     );

  //     if (res.data.status === false) throw new Error(res.data.message);

  //     return res.data.payload;
  //   },
  // });
  const mutation = useMutation({
    mutationFn: async (image: File) => {
      const formData = new FormData();
      formData.append("image", image);

      try {
        const res = await axios.post<ApiRes<IUploadImage>>(
          `/api/upload-image`,
          formData,
          {
            onUploadProgress(progressEvent) {
              setUploadProgress(
                Math.round(
                  (progressEvent?.loaded * 100) / (progressEvent?.total || 1),
                ),
              );
            },
          },
        );

        console.log("res.data:", res.data); // شوف الـ response
        if (res.data.status === false) throw new Error(res.data.message);
        return res.data.payload;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          // هنا هتشوف الـ error الحقيقي
          console.log("STATUS:", error.response?.status);
          console.log("DATA:", error.response?.data);
          throw new Error(error.response?.data?.message || "Upload failed");
        }
        throw error;
      }
    },
  });
  return {
    uploadProgress,
    ...mutation,
  };
}

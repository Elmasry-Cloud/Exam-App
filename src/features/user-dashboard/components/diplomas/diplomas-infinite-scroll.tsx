import { useInfiniteQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { ChevronDown } from "lucide-react";
import getDeplomas from "../../apis/diplomas-apis/diplomas.api";
import { IDiplomaData } from "../../types/diplomas";

export default function Example() {
  const { ref, inView } = useInView();
  console.log("inView:", inView);
  const {
    // status,
    data,
    // error,
    // isFetching,
    isFetchingNextPage,
    // isFetchingPreviousPage,
    fetchNextPage,
    // fetchPreviousPage,
    hasNextPage,
    // hasPreviousPage,
  } = useInfiniteQuery({
    queryKey: ["Diplomas"],
    queryFn: async ({ pageParam }) => getDeplomas(pageParam),
    // queryFn: async ({ pageParam }) => {
    //   const res = await fetch(`/api/diplomas?limit=6&page=${pageParam}`);
    //   const data = await res.json();
    //   return data;
    // },
    initialPageParam: 1,
    // getPreviousPageParam: (firstPage) => console.log("firstPage:", firstPage),
    // getNextPageParam: (lastPage) => lastPage.payload.nextPage ?? undefined,
    getNextPageParam: (lastPage) => {
      console.log("lastPage:", lastPage);
      if (
        lastPage.payload?.metadata.page === 2
        // lastPage.payload?.metadata.totalPages
      ) {
        return undefined; // No more pages to fetch
      } else {
        return lastPage.payload?.metadata.page + 1; // Increment the page number for the next fetch
      }
    },
  });

  // console.log(data);
  // console.log(data?.pages.flatMap((page) => page.payload.data));
  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);
  {
    return (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {data?.pages
            .flatMap((page) => page.payload.data)
            .map((diploma: IDiplomaData) => (
              <div key={diploma.id} className="item h-112 relative">
                <div className="image h-full w-full">
                  {/* <Image
                    src={`/api/image-proxy?url=${encodeURIComponent(diploma.image)}`}
                    width={336}
                    height={448}
                    alt={diploma.title}
                    className="w-full h-full object-cover"
                    unoptimized
                  /> */}
                  <Image
                    // src={ImageDip}
                    src={diploma.image}
                    width={336}
                    height={448}
                    alt={diploma.title}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </div>
                <div className="info w-[calc(100%-1.25rem)] absolute bottom-2.5 left-1/2 -translate-x-1/2 p-4 bg-blue-600/75 blur-in-md">
                  <h1 className="font-geist-mono mb-1 text-white font-semibold text-xl">
                    {diploma.title}
                  </h1>
                  <p className="text-white opacity-80 font-normal text-sm overflow-clip text-ellipsis line-clamp-1 hover:line-clamp-none transition-all">
                    {diploma.description}
                  </p>
                </div>
              </div>
            ))}
        </div>
        <div ref={ref} className="py-4 text-center text-sm text-gray-400">
          {isFetchingNextPage || hasNextPage ? (
            <p className="text-gray-600 font-normal text-base flex flex-col items-center justify-center gap-1 p-2.5 mt-6">
              Scroll to view more
              <ChevronDown size={18} />
            </p>
          ) : (
            <p className="text-gray-600 font-normal text-base flex flex-col items-center justify-center gap-1 p-2.5 mt-6">
              End of list
            </p>
          )}
          {/* {isFetchingNextPage ? (
            <p className="text-gray-600 font-normal text-base flex flex-col items-center justify-center gap-1 p-2.5 mt-6">
              Scroll to view more
              <ChevronDown size={18} />
            </p>
          ) : hasNextPage ? (
            "Scroll for more"
          ) : (
            "No more diplomas"
          )} */}
        </div>
      </>
    );
  }
}

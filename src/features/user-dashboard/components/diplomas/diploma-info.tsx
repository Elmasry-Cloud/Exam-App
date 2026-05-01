"use client";
import { useInfiniteQuery } from "@tanstack/react-query";
import Image from "next/image";
// import { IDiploma } from "../../_type/diplomas";
import { useEffect, useMemo } from "react";
import { useInView } from "react-intersection-observer";
import { ChevronDown } from "lucide-react";
// import getDeplomas from "../_api/diplomas.api";
import SkilitonDiplomas from "./skiliton-diplomas";
import Link from "next/link";
import getDeplomas from "../../apis/diplomas-apis/diplomas.api";
import InfiniteScroll from "react-infinite-scroll-component";

export default function DiplomasInfo() {
  const { ref, inView } = useInView();
  // console.log("inView:", inView);
  const {
    data,
    error,
    isFetching,
    isLoading,
    isFetchingNextPage,
    // isFetchingPreviousPage,
    fetchNextPage,
    // fetchPreviousPage,
    hasNextPage,
    // hasPreviousPage,
  } = useInfiniteQuery({
    queryKey: ["Diplomas"],
    queryFn: async ({ pageParam }) => getDeplomas({ pageParam, limit: 6 }),

    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.payload?.metadata.page === 2) {
        return undefined; // No more pages to fetch
      } else {
        return (lastPage.payload?.metadata.page ?? 1) + 1; // Increment the page number for the next fetch
      }
    },
  });

  const d = useMemo(
    () => data?.pages.flatMap((page) => page.payload?.data ?? []),
    [data],
  );

  // console.log(d?.length);

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);
  {
    return (
      <>
        {/* Loading Skiliton */}
        {isLoading && <SkilitonDiplomas />}
        {/* Error Message */}
        {error && <p>{error.message}</p>}
        {/* Diplomas */}
        {data && (
          <>
            <InfiniteScroll
              dataLength={d && d.length} //This is important field to render the next data
              next={fetchNextPage}
              hasMore={hasNextPage}
              loader={<h4>Loading...</h4>}
              endMessage={
                <p className="text-gray-600 font-normal text-base flex flex-col items-center justify-center p-2.5 mt-4">
                  End of list
                </p>
              }
              pullDownToRefreshThreshold={50}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {data?.pages
                  .flatMap((page) => page.payload?.data ?? [])
                  .map((diploma) => (
                    <Link
                      href={`/diplomas/${diploma.id}`}
                      key={diploma.id}
                      className="item h-112 relative"
                    >
                      <div className="image h-full w-full">
                        <Image
                          // src={ImageDip}
                          src={diploma.image ?? "/placeholder.png"}
                          width={336}
                          height={448}
                          alt={diploma.title}
                          className="w-full h-full object-cover"
                          unoptimized
                        />
                      </div>
                      <div className="info w-[calc(100%-1.25rem)] absolute bottom-2.5 left-1/2 -translate-x-1/2 p-4 bg-blue-600/75 blur-in-md h-24.5">
                        <h1 className="font-geist-mono mb-1 text-white font-semibold text-xl">
                          {diploma.title}
                        </h1>
                        <p className="text-white opacity-80 font-normal text-sm overflow-clip text-ellipsis line-clamp-2 hover:line-clamp-none transition-all">
                          {diploma.description}
                        </p>
                      </div>
                    </Link>
                  ))}
              </div>
            </InfiniteScroll>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {data?.pages
                .flatMap((page) => page.payload?.data ?? [])
                .map((diploma) => (
                  <Link
                    href={`/diplomas/${diploma.id}`}
                    key={diploma.id}
                    className="item h-112 relative"
                  >
                    <div className="image h-full w-full">
                      <Image
                        // src={ImageDip}
                        src={diploma.image ?? "/placeholder.png"}
                        width={336}
                        height={448}
                        alt={diploma.title}
                        className="w-full h-full object-cover"
                        unoptimized
                      />
                    </div>
                    <div className="info w-[calc(100%-1.25rem)] absolute bottom-2.5 left-1/2 -translate-x-1/2 p-4 bg-blue-600/75 blur-in-md h-24.5">
                      <h1 className="font-geist-mono mb-1 text-white font-semibold text-xl">
                        {diploma.title}
                      </h1>
                      <p className="text-white opacity-80 font-normal text-sm overflow-clip text-ellipsis line-clamp-2 hover:line-clamp-none transition-all">
                        {diploma.description}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
            {hasNextPage ? (
              <p className="text-gray-600 font-normal text-base flex flex-col items-center justify-center gap-1 p-2.5 my-6">
                Scroll to view more
                <ChevronDown size={18} />
              </p>
            ) : (
              <p className="text-gray-600 font-normal text-base flex flex-col items-center justify-center p-2.5 mt-4">
                End of list
              </p>
            )}
            <div ref={ref} className="py-4 text-center text-sm text-gray-400">
              {isFetchingNextPage && <SkilitonDiplomas />}
            </div> */}
          </>
        )}
      </>
    );
  }
}

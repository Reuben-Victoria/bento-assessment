import { ALL_BOOKS_KEY } from "@/constants";
import { useQuery } from "@tanstack/react-query";
import { getQueryToString } from "@/utils";
import { getallBooks } from "@/service";
export const useGetAllBooks = (query: any) => {
  const searchQuery = getQueryToString(query);

  return useQuery<QueryResponseType<BooksType>, Error,  BooksType>({
    retry: false,
    refetchOnWindowFocus: false,
    queryKey: [ALL_BOOKS_KEY, { type: "list" }, { searchQuery }],
    queryFn: () => getallBooks(searchQuery),
    select: (res) => {
      return res.data;
    },
  });
};

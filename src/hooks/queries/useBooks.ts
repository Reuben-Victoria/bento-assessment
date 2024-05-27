import { ALL_BOOKS_KEY } from "@/constants";
import { useQuery } from "@tanstack/react-query";
import { getQueryToString } from "@/utils";
import { getallBooks, getBookById } from "@/service";
export const useGetAllBooks = (query: QueryType) => {
  const searchQuery = getQueryToString(query);

  return useQuery<QueryResponseType<BooksType>, Error, BooksType>({
    retry: false,
    refetchOnWindowFocus: false,
    queryKey: [ALL_BOOKS_KEY, { type: "list" }, { searchQuery }],
    queryFn: () => getallBooks(searchQuery),
    select: (res) => {
      return res.data;
    },
  });
};

export const useGetBookById = (id: string) => {
  return useQuery<QueryResponseType<BookType>, Error, BookType>({
    retry: false,
    enabled: !!id,
    refetchOnWindowFocus: false,
    queryKey: [ALL_BOOKS_KEY, id],
    queryFn: () => getBookById(id),
    select: (res) => {
      return res.data;
    },
  });
};

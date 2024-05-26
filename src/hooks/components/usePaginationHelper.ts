import { useGetAllBooks } from "@/hooks";

export const usePaginationHelper = (query: QueryType) => {
  const { data, isPending } = useGetAllBooks(query);

  const page = query.page;
  console.log(page, "PAGE")
  const pageSize = query.limit;
  const startIndex = (page - 1) * pageSize;
  const endIndex = page * pageSize;
  const filteredData = () => {
    if (query.search)
      return data?.filter((book: BookType) =>
        book?.Title.toLowerCase().includes(query.search.toLowerCase())
      );
    return data;
  };

  const paginateBooks = filteredData()?.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredData()?.length! / pageSize);

  return {
    paginateBooks,
    totalPages,
    isPending,
  };
};

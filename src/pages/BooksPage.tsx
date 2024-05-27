import { useReducer } from "react";
import { BookCard, Pagination, RenderIf, Search } from "@/components";
import { usePaginationHelper } from "@/hooks";
import { useCartData } from "@/context";

const SkeletonBookCard = () => {
  return (
    <div className='skeleton-card'>
      <div className='skeleton-card-details'>
        <div className='skeleton-card-wrapper'>
          <div className='skeleton-card-wrapper-image skeleton'></div>

          <div className='skeleton-card-details-book'>
            <div>
              <div className='skeleton-title skeleton'></div>
              <div className='skeleton-author skeleton'></div>
            </div>
            <div className='skeleton-notes skeleton'></div>
          </div>
        </div>
        <div className='skeleton-card-details-year skeleton'></div>
      </div>
      <div className='skeleton-card-actions'>
        <div className='skeleton-button skeleton'></div>
      </div>
    </div>
  );
};

const BooksPage = () => {
  const { addToCart } = useCartData();
  const spreadReducer = (state: QueryType, action: Record<string, any>) => ({
    ...state,
    ...action,
  });
  const [query, setQuery] = useReducer(spreadReducer, null, () => ({
    page: 1,
    search: "",
    limit: 10,
  }));
  const { paginateBooks, totalPages, isPending, filteredData } =
    usePaginationHelper(query);
  return (
    <div className='books'>
      <div className='books-filter'>
        <h2>Books</h2>
        <Search
          className='books-search'
          onChange={(e: any) => setQuery({ search: e })}
          placeholder='Search...'
        />{" "}
      </div>
      <div className='books-content'>
        <RenderIf condition={isPending}>
          <div className='books-content-main'>
            {Array.from({ length: 9 }, (_, index) => {
              return <SkeletonBookCard key={index} />;
            })}
          </div>
        </RenderIf>
        <RenderIf condition={!isPending}>
          <RenderIf
            condition={!!paginateBooks?.length! || !!filteredData?.length!}
          >
            <div className='books-content-main'>
              {(query?.search ? filteredData : paginateBooks)?.map(
                (books: BookType) => {
                  return (
                    <BookCard
                      key={books?.id}
                      books={books}
                      addToBag={() => addToCart(books)}
                    />
                  );
                }
              )}
            </div>
            <Pagination
              page={query.page}
              total_pages={totalPages}
              onPageChange={(page) => setQuery({ page })}
              setLimit={(limit) => setQuery({ limit })}
            />
          </RenderIf>
        </RenderIf>

        <RenderIf
          condition={
            !paginateBooks?.length! && !isPending && !filteredData?.length
          }
        >
          <p className='books-not-found'>
            No book <span>found!</span>
          </p>
        </RenderIf>
      </div>
    </div>
  );
};

export default BooksPage;

import { Pagination, Search } from "@/components";

const BooksPage = () => {
  return (
    <div className='books'>
      <div className='books-filter'>
        <h2>Books</h2>
          <Search className="books-search" />{" "}

      </div>
      <div className="books-content">
        <div className="books-content-main">
            p
        </div>
        <Pagination />
      </div>
    </div>
  );
};

export default BooksPage;

import { Routes, Route, BrowserRouter } from "react-router-dom";
import { BOOK_HOMEPAGE_ROUTE, VIEW_BOOK_ROUTE } from "@/constants";
import { BookLayout } from "@/layouts";
import { BooksPage, ViewBook } from "@/pages";

const BookRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <BookLayout>
              <BooksPage />
            </BookLayout>
          }
          path={BOOK_HOMEPAGE_ROUTE}
        />
          <Route
          element={
            <BookLayout>
              <ViewBook />
            </BookLayout>
          }
          path={VIEW_BOOK_ROUTE}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default BookRoutes;

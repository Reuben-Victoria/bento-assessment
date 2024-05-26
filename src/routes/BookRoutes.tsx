import { Routes, Route, BrowserRouter } from "react-router-dom";
import { BOOK_HOMEPAGE_ROUTE } from "@/constants";
import { BookLayout } from "@/layouts";
import { BooksPage } from "@/pages";

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
      </Routes>
    </BrowserRouter>
  );
};

export default BookRoutes;

import { Routes, Route, BrowserRouter } from "react-router-dom";
import { BOOK_HOMEPAGE_ROUTE } from "@/constants";

const BookRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<></>} path={BOOK_HOMEPAGE_ROUTE} />
      </Routes>
    </BrowserRouter>
  );
};

export default BookRoutes;

import { BookCard, Navbar, Pagination } from "./components";
import "./index.css";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <BookCard/>
      <Pagination
        page={5}
        limit={10}
        setLimit={() => {}}
        onPageChange={() => {}}
      />
    </>
  );
}

export default App;

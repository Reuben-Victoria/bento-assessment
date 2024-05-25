import { ReactNode } from "react";
import { Navbar } from "@/components";

const BookLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className='book-layout hide-scroll-bar'>
      <Navbar />
      <div className='book-layout-children'>{children}</div>
    </main>
  );
};

export default BookLayout;

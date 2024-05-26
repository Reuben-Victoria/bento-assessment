export type BookWithQuantityType = BookType & {
  quantity?: number;
};

export const removeDuplicatesAndAddQuantity = (
  books: BookWithQuantityType[]
): BookWithQuantityType[] => {
  const result = books.reduce((acc, book) => {
    const found = acc.find((item) => item.id === book.id);
    if (found) {
      found.quantity! += 1;
    } else {
      acc.push({ ...book, quantity: 1 });
    }
    return acc;
  }, [] as BookWithQuantityType[]);

  return result;
};

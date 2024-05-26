interface QueryType {
    search: string;
    limit: number;
    page: number;
  }

interface BookType {
  id: number;
  Year: number;
  Title: string;
  handle: string;
  Publisher: string;
  ISBN: string;
  Pages: number;
  Notes: string[];
  created_at: string;
  villains: { name: string; url: string }[];
}

type BooksType = BookType[];


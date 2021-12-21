export interface IBook {
  uploadBook: {
    isbn: string;
    title: string;
    author: string;
    category: string;
    editorial: string;
    language: string;
    state: string;
    price: string;
  }
};

export interface IBookForm {
  isbn: string;
  title: string;
  author: string;
  category: string;
  editorial: string;
  language: string;
  state: string;
  price: string;
};
export interface IBook {
  uploadBook: {
    title: string,
    author: string,
    editorial: string,
    category: string,
    language: string
  }
};

export interface IUploadForm {
  state: string;
  language: string;
  category: string;
  editorial: string;
  title: string;
  author: string;
  isbn: string;
  price: string;
};
import { useQuery, QueryHookOptions, gql } from '@apollo/client';

export type Books = {
  books: {
    id: string;
    title: string;
    author: string;
  }[]
}
export const booksQuery = gql`
  query Query {
    books {
      id
      title
      author
    }
  }
`;

export const useBooksQuery = (options?: QueryHookOptions) =>
  useQuery<Books>(booksQuery, options,);

import { useQuery, QueryHookOptions, gql } from '@apollo/client';

export const useBooksQuery = (options?: QueryHookOptions) =>
  useQuery<{
    books: {
      id: string;
      title: string;
      author: string;
    }[]
  }>(
    gql`
      query Books {
        books {
          id
          title
          author
        }
      }
    `,
    options,
  );

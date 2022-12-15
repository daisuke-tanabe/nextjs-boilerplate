import { useQuery, QueryHookOptions } from '@apollo/client';
import { gql } from 'graphql-tag';

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

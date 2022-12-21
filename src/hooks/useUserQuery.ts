import { useQuery, QueryHookOptions, gql } from '@apollo/client';

type User = {
  user: {
    name: string;
    email: string;
  }
}

const query = gql`
  query User {
    user {
      name
      email
    }
  }
`;

export const useUserQuery = (options?: QueryHookOptions) => useQuery<User>(query, options);

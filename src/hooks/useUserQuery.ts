import { useQuery, QueryHookOptions, gql } from '@apollo/client';

type User = {
  user: {
    name: string;
    email: string;
    picture: string;
    sub: string;
    iat: number
    esp: number
    jti: string
  }
}

const query = gql`
  query User {
    user {
      name
      email
      picture
      sub
      iat
      exp
      jti
    }
  }
`;

export const useUserQuery = (options?: QueryHookOptions) => useQuery<User>(query, options);

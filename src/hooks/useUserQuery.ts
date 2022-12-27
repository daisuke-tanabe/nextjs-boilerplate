import { useQuery, QueryHookOptions, gql } from '@apollo/client';

type UserProperty = {
  name: string;
  email: string;
  picture: string;
  sub: string;
  iat: number;
  esp: number;
  jti: string;
};

type User = {
  user: UserProperty | null;
};

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

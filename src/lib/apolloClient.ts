import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { getSession } from 'next-auth/react';

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_API_GRAPHQL,
  // TODO 後で見直す
  credentials: 'include'
});

const authLink = () => {
  return setContext(async (_, context) => {
    const session = await getSession(context);
    const headers = { ...context.headers };
    if (session) headers.authorization = `Bearer ${session.user.accessToken}`;
    return { headers };
  });
};

const apolloClient = new ApolloClient({
  link: authLink().concat(httpLink),
  cache: new InMemoryCache(),
});

export default apolloClient;

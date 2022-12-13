import {ApolloClient, HttpLink, InMemoryCache} from '@apollo/client'
import {SchemaLink} from '@apollo/client/link/schema'
import merge from 'deepmerge';
import {useMemo} from 'react';

import schema from './schema';

let client: any;

const createIsomorphicLink = () => {
  if (typeof window === 'undefined') return new SchemaLink({ schema });
  return new HttpLink({
    uri: 'http://localhost:3000/api/graphql',
    credentials: 'same-origin',
  })
}

const createApolloClient = () => new ApolloClient({
  ssrMode: typeof window === 'undefined',
  link: createIsomorphicLink(),
  cache: new InMemoryCache(),
});

export const initializeApollo = (initialState = null) => {
  const apolloClient = client ?? createApolloClient()

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = apolloClient.extract();

    // Merge the existing cache into data passed from getStaticProps/getServerSideProps
    const data = merge(initialState, existingCache)

    // Restore the cache with the merged data
    apolloClient.cache.restore(data)
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return apolloClient
  // Create the Apollo Client once in the client
  if (!client) client = apolloClient

  return apolloClient
}

export const useApollo = (initialState: any) => useMemo(() => initializeApollo(initialState), [initialState]);

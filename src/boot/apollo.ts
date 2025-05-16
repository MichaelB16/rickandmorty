import { boot } from 'quasar/wrappers';
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core';
import { DefaultApolloClient } from '@vue/apollo-composable';

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_URL_API as string,
});

export const $appolo = new ApolloClient({
  link: httpLink,
  defaultOptions: {
    query: {
      fetchPolicy: 'no-cache',
    },
  },
  cache: new InMemoryCache({}),
});

export default boot(({ app }) => {
  app.provide(DefaultApolloClient, $appolo);
});

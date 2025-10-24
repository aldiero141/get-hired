import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 2, // 2 minutes
    },
    mutations: {
      retry: false,
    },
  },
  queryCache: new QueryCache({
    onError: error =>
      console.error("Global Query Error:", error.message),
  }),
  mutationCache: new MutationCache({
    onError: error =>
      console.error("Global Mutation Error:", error.message),
  }),
});

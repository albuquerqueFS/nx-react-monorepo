import axios from 'axios';
import { QueryClient } from 'react-query';

export const apiClient = axios.create({
  baseURL: 'http://0.0.0.0:3333/api/',
});

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 30, // 30s for de-duplicate request only
      cacheTime: 1000 * 60 * 5, // 5 minutes
      retry: false,
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: false,
    },
  },
});

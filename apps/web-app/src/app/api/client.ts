import axios from 'axios';
import { QueryClient } from 'react-query';

export const apiClient = axios.create({
  baseURL: 'http://localhost:4200',
  timeout: 1000,
  proxy: {
    host: 'localhost',
    port: 3333,
  },
});

export const queryClient = new QueryClient();

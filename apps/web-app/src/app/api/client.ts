import axios from 'axios';
import { QueryClient } from 'react-query';

export const apiClient = axios.create({
  baseURL: 'http://0.0.0.0:3333/api/',
});

export const queryClient = new QueryClient();

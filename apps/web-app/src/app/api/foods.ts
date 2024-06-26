import { useQuery } from 'react-query';
import { apiClient } from './client';

export const useFoods = () => {
  return useQuery({
    queryKey: 'foods',
    queryFn: async () => {
      const res = await apiClient.get('/foods');
      console.log(res);
      return res.data;
    },
  });
};

import { useInfiniteQuery, useQuery } from 'react-query';
import { apiClient } from './client';

export interface Food {
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
}

interface Page {
  data: Food[];
  previousCursor?: number;
  nextPage?: number;
}

export const useInfiniteFoods = () => {
  return useInfiniteQuery<Page>({
    queryKey: 'foods',
    queryFn: async ({ pageParam }) => {
      const res = await apiClient.get('/foods');
      return res.data as Page;
    },
    keepPreviousData: false,
    getNextPageParam: (lastPage: Page) => lastPage.nextPage,
  });
};

export const useFood = (id: string) => {
  return useQuery<Food>({
    queryKey: ['food', id],
    queryFn: async () => {
      const res = await apiClient.get(`/foods/${id}`);
      return res.data as Food;
    },
  });
};

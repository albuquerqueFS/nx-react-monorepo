import { useInfiniteQuery } from 'react-query';
import { apiClient } from './client';

interface Food {
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

export const useFoods = () => {
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

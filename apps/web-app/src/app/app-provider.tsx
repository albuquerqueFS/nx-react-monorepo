import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { MantineProvider, createTheme } from '@mantine/core';
import { QueryClientProvider } from 'react-query';
import { coreRouter } from '@react-monorepo/core';
import { menuRouter } from '@react-monorepo/menu';
import { queryClient } from '@react-monorepo/api';

export function AppProvider() {
  const router = createBrowserRouter([...coreRouter, ...menuRouter]);

  const theme = createTheme({
    fontFamily: 'Open Sans, sans-serif',
    primaryColor: 'cyan',
  });

  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={theme} defaultColorScheme="light">
        <RouterProvider router={router} />
      </MantineProvider>
    </QueryClientProvider>
  );
}

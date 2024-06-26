import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { MenuPage } from '../pages/MenuPage';
import { MainTemplate } from '../templates/MainTemplate';
import { MantineProvider, createTheme } from '@mantine/core';
import { QueryClientProvider } from 'react-query';
import { queryClient } from '../api/client';

export function AppProvider() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainTemplate />,
      children: [
        {
          path: '',
          element: <MenuPage />,
        },
      ],
    },
  ]);

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

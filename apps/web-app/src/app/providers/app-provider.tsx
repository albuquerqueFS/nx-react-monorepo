import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { MenuPage } from '../pages/MenuPage';
import { MainTemplate } from '../templates/MainTemplate';
import { MantineProvider } from '@mantine/core';

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

  return (
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  );
}

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { MenuPage } from '../pages/MenuPage';

export function AppProvider() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MenuPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

import { RouteObject } from 'react-router-dom';
import { MenuPage } from './pages/MenuPage';
import { ProductPage } from './pages/ProductPage';
import { MainTemplate } from './templates/MainTemplate';

export const menuRouter: RouteObject[] = [
  {
    path: '/',
    element: <MainTemplate />,
    children: [
      {
        path: '',
        element: <MenuPage />,
      },
      {
        path: 'product/:id',
        element: <ProductPage />,
      },
    ],
  },
];

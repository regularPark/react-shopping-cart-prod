import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import MainPage from '../pages/MainPage';
import CartPage from '../pages/CartPage';
import Root from './Root';
import OrderPage from '../pages/OrderPage';
import OrderDetailPage from '../pages/OrderDetailPage';

const Router = () => {
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <Root />,
        errorElement: <NotFound />,
        children: [
          { index: true, element: <MainPage /> },
          { path: 'cart', element: <CartPage /> },
          { path: 'order', element: <OrderPage /> },
          { path: 'order/:orderId', element: <OrderDetailPage /> },
        ],
      },
    ],
    { basename: process.env.PUBLIC_URL },
  );

  return <RouterProvider router={router} />;
};

export default Router;

import {createBrowserRouter} from 'react-router';
import {App} from '../App';
import {Login} from './auth/Login';
import {Home} from './pages/Home';
import {ErrorPage} from './pages/ErrorPage';
import {ListPage} from './pages/ListPage';
import {ProductDetails} from './pages/ProductDetails';

export const router = createBrowserRouter([
  {
    path: '',
    Component: App,
    children: [
      {
        path: '',
        Component: Home,
      },
      {
        path: '/list-page',
        Component: ListPage,
      },
      {
        path: '/product-details',
        Component: ProductDetails,
      },
    ],
  },
  {
    path: 'login',
    Component: Login,
  },
  {
    path: '*',
    Component: ErrorPage,
  },
]);

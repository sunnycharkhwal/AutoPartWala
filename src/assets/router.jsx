import {createBrowserRouter} from 'react-router';
import {App} from '../App';
import {Login} from './auth/Login';
import {RecoverPassword} from './auth/RecoverPassword';
import {Register} from './auth/Register';
import {Home} from './pages/Home';
import {ErrorPage} from './pages/ErrorPage';
import {ListPage} from './pages/ListPage';
import {ProductDetails} from './pages/ProductDetails';
import {WholesalePrices} from './pages/WholesalePrices';
import {OrderTracking} from './pages/OrderTracking';
import {AboutUs} from './pages/AboutUs';
import {ReturnPrime} from './pages/ReturnPrime';
import {Blogs} from './pages/Blogs';
import {BlogDetails} from './pages/BlogDetails';

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
      {
        path: '/order-tracking',
        Component: OrderTracking,
      },
      {
        path: '/about-us',
        Component: AboutUs,
      },
      {
        path: '/return-prime',
        Component: ReturnPrime,
      },
      {
        path: '/blogs',
        Component: Blogs,
      },
      {
        path: '/blog-details',
        Component: BlogDetails,
      },
    ],
  },
  {
    path: 'wholesale-prices',
    Component: WholesalePrices,
  },
  {
    path: 'login',
    Component: Login,
  },
  {
    path: 'recover-password',
    Component: RecoverPassword,
  },
  {
    path: 'register',
    Component: Register,
  },
  {
    path: '*',
    Component: ErrorPage,
  },
]);

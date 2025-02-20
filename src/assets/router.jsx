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
import {Faq} from './pages/Faq';
import {Cart} from './pages/Cart';
import {PrivacyPolicy} from './pages/PrivacyPolicy';
import {ContactUs} from './pages/ContactUs';

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
      {
        path: '/faq',
        Component: Faq,
      },
      {
        path: '/cart',
        Component: Cart,
      },
      {
        path: '/privacy-policy',
        Component: PrivacyPolicy,
      },
      {
        path: '/contact-us',
        Component: ContactUs,
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

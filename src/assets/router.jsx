import {createBrowserRouter} from 'react-router';
import {App} from '../App';
import {Login} from './auth/Login';
import {Home} from './pages/Home';
import {ErrorPage} from './pages/ErrorPage';
export const router = createBrowserRouter([
  {
    path: '',
    Component: App,
    children: [
      {
        path: '',
        Component: Home,
      },
      // {
      //   path: '/academy/features',
      //   Component: Features,
      // },
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

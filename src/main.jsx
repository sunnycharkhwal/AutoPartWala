import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/index.scss';
import './scss/res.scss';
import 'rsuite/dist/rsuite.min.css';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import {router} from './assets/router';
import {RouterProvider} from 'react-router';
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);

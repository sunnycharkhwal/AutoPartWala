import {Outlet} from 'react-router';
import {DrawerAppBar} from './assets/navBar/NavBar';
export const App = () => {
  return (
    <>
      <div className="mt-3">
        <DrawerAppBar />
        <Outlet />
      </div>
    </>
  );
};

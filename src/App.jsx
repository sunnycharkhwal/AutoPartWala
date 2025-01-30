import {Outlet} from 'react-router';
import {DrawerAppBar} from './assets/navBar/NavBar';
export const App = () => {
  return (
    <>
      <div className="MyApp">
        <DrawerAppBar />
        <Outlet />
      </div>
    </>
  );
};

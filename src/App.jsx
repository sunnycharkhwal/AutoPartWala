import {Outlet} from 'react-router';
import {DrawerAppBar} from './assets/navBar/NavBar';
export const App = () => {
  return (
    <>
      <div style={{marginTop: '7rem'}}>
        <DrawerAppBar />
        <Outlet />
      </div>
    </>
  );
};

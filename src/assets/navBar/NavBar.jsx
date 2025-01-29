import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Badge,
  Box,
  Button,
  CssBaseline,
  Drawer,
  IconButton,
  Toolbar,
  Tooltip,
  tooltipClasses,
} from '@mui/material';
import {Menu as MenuIcon} from '@mui/icons-material';
import {NavLink, useNavigate} from 'react-router';
import {Dropdown} from 'rsuite';
import './NavBar.scss';
import Logo from '../../images/logo.png';
import {FaRegUser} from 'react-icons/fa';
import {styled} from '@mui/material/styles';
import {TopNavBar} from './TopNavBar';
import {BottomNav} from './BottomNav';
import {FiShoppingCart} from 'react-icons/fi';

//
const drawerWidth = 240;

const BootstrapTooltip = styled(({className, ...props}) => (
  <Tooltip {...props} arrow classes={{popper: className}} />
))(({theme}) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));
export const DrawerAppBar = ({window}) => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const container = window ? () => window().document.body : undefined;

  const NavLinkDiv = () => {
    return (
      <>
        {midNev.map((val, i) => (
          <Dropdown
            key={i}
            title={<span>{val.title}</span>}
            className="midNevLink"
            onClick={() => navigate(val.link)}></Dropdown>
        ))}
      </>
    );
  };
  const midNev = [
    {
      title: 'Wholesale prices',
      link: '/login',
    },
    {
      title: 'About us',
      link: '/',
    },
    {
      title: 'Returns & Exchange',
      link: '/',
    },
    {
      title: 'Order tracking',
      link: '/',
    },
    {
      title: 'FAQs',
      link: '/',
    },
    {
      title: 'Blogs',
      link: '/',
    },
  ];
  return (
    <>
      <Box sx={{display: 'flex'}} className="navTop">
        <CssBaseline />
        <AppBar component="nav">
          <TopNavBar />
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
              sx={{display: {md: 'none'}}}
              className="text-black">
              <MenuIcon />
            </IconButton>
            <NavLink to="/" className="text-white">
              <img className="NavLogo" src={Logo} alt="logo" />
            </NavLink>
            <Box sx={{display: {xs: 'none', md: 'flex'}}} className="NavPcBtn">
              <NavLinkDiv />
            </Box>
            <div className=" d-flex align-items-center">
              <div>
                <input type="text" className="w-100" />
              </div>
              <BootstrapTooltip
                title="Login"
                onClick={() => navigate('/login')}>
                <span className="NavLoginBtn">
                  <FaRegUser />
                </span>
              </BootstrapTooltip>
              <BootstrapTooltip title="Cart" onClick={() => navigate('/login')}>
                <div className="NavLoginBtn_div">
                  <span className="NavLoginBtn">
                    <Badge
                      color="secondary"
                      badgeContent={0}
                      max={999}
                      showZero>
                      <FiShoppingCart color="action" />
                    </Badge>
                  </span>
                  <p>Cart</p>
                </div>
              </BootstrapTooltip>
            </div>
          </Toolbar>
          <BottomNav />
        </AppBar>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          anchor="left"
          ModalProps={{keepMounted: true}}
          sx={{
            display: {xs: 'block', md: 'none'},
            '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
          }}>
          <NavLinkDiv />
        </Drawer>
      </Box>
    </>
  );
};

DrawerAppBar.propTypes = {window: PropTypes.func};

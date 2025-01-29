import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
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
import Gift from '../../images/gift.svg';

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

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{textAlign: 'center'}}>
      <NavLink to="/" className="mb-5 text-white">
        home
      </NavLink>
    </Box>
  );

  return (
    <>
      <Box sx={{display: 'flex'}} className="navTop">
        <CssBaseline />
        <AppBar component="nav">
          <div className="TopNav_barDiv">
            <span>
              <img src={Gift} alt="Gift" />
              Grab the deal. Get 50% off on your first order.
            </span>
          </div>
          <Toolbar>
            <NavLink to="/" className="text-white">
              <img className="NavLogo" src={Logo} alt="logo" />
            </NavLink>
            <Box sx={{display: {xs: 'none', md: 'flex'}}} className="NavPcBtn">
              <Dropdown
                title={<span className="un">Academy management </span>}
                trigger="hover"
                className="NavHoverBtn">
                <Dropdown.Item onClick={() => navigate('/')}>
                  overview
                </Dropdown.Item>
                <Dropdown.Item onClick={() => navigate('/')}>
                  features
                </Dropdown.Item>
                <Dropdown.Item onClick={() => navigate('/')}>
                  pricing
                </Dropdown.Item>
              </Dropdown>
              <Dropdown
                title={<span className="un">Booking management</span>}
                trigger="hover"
                className="NavHoverBtn">
                <Dropdown.Item onClick={() => navigate('/')}>
                  overview
                </Dropdown.Item>
                <Dropdown.Item onClick={() => navigate('/')}>
                  pricing
                </Dropdown.Item>
              </Dropdown>
              <Dropdown
                title={<span className="un">Event management</span>}
                className="NavHoverBtn"
                onClick={() => navigate('/')}></Dropdown>
            </Box>
            <Box className="d-flex  justify-content-end align-items-center">
              <Button
                sx={{display: {xs: 'none', md: 'block'}}}
                variant="contained"
                className="NavFreeBtn"
                onClick={() => navigate('/login')}>
                Try for Free
              </Button>
              <BootstrapTooltip
                title="Login"
                onClick={() => navigate('/login')}>
                <span className="NavLoginBtn">
                  <FaRegUser />
                </span>
              </BootstrapTooltip>

              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerToggle}
                sx={{display: {md: 'none'}}}
                className="text-black">
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          anchor="right"
          ModalProps={{keepMounted: true}}
          sx={{
            display: {xs: 'block', md: 'none'},
            '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
          }}>
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

DrawerAppBar.propTypes = {window: PropTypes.func};

import {Button} from '@mui/material';
import React from 'react';
import {NavLink, useNavigate} from 'react-router';
import GoogleIcon from '../../images/google.svg';
export const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="WholesalePrices_outer">
        <div className="LoginTop_inner">
          <div className="LoginTop_text">
            <h3>Log In</h3>
            <p>Please enter your e-mail and password:</p>
          </div>
          <form action="">
            <div className="LoginTop_input">
              <input
                type="text"
                id="Email"
                class="form-control"
                placeholder="Email"
                aria-describedby="Email"
              />
            </div>
            <div className="LoginTop_input">
              <input
                type="password"
                id="password"
                placeholder="Password"
                class="form-control"
                aria-describedby="password"
              />
            </div>
            <div className="LoginTop_btn">
              <Button variant="contained">Log In</Button>
            </div>
          </form>
          <div className="LoginTop_btn2">
            <Button variant="outlined">
              {' '}
              <img src={GoogleIcon} alt="icon" />
              Continue with Google
            </Button>
          </div>
          <div className="LoginTop_link">
            Forgot your password? <NavLink to="/">Recover password</NavLink>
          </div>
          <div className="LoginTop_link">
            New to Bloom Beauty? <NavLink to="/">Create an Account</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

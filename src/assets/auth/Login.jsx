import {Button, IconButton, InputAdornment, TextField} from '@mui/material';
import React, {useState} from 'react';
import {NavLink} from 'react-router';
import GoogleIcon from '../../images/google.svg';
import Alert from '@mui/material/Alert';
import {Visibility, VisibilityOff} from '@mui/icons-material';

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(prev => !prev);
  };

  return (
    <>
      <div className="WholesalePrices_outer">
        <div className="LoginTop_inner">
          <div className="LoginTop_text">
            <h3>Log In</h3>
            <p>Please enter your e-mail and password:</p>
          </div>
          <Alert severity="warning" className="mb-3">
            Incorrect email or password.
          </Alert>
          <form action="">
            <div className="LoginTop_input">
              <TextField
                type="text"
                id="Email"
                className="form-control"
                placeholder="Email"
                fullWidth
              />
            </div>
            <div className="LoginTop_input">
              <TextField
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Password"
                className="form-control"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleTogglePassword} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div className="LoginTop_btn">
              <Button variant="contained">Log In</Button>
            </div>
          </form>
          <div className="LoginTop_btn2">
            <Button variant="outlined">
              <img src={GoogleIcon} alt="icon" />
              Continue with Google
            </Button>
          </div>
          <div className="LoginTop_link">
            Forgot your password?{' '}
            <NavLink to="/recover-password">Recover password</NavLink>
          </div>
          <div className="LoginTop_link">
            New to Bloom Beauty?{' '}
            <NavLink to="/register">Create an Account</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

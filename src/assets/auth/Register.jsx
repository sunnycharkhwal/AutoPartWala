import {
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  TextField,
} from '@mui/material';
import React, {useState} from 'react';
import {NavLink} from 'react-router';
import GoogleIcon from '../../images/google.svg';
import Alert from '@mui/material/Alert';
import {Visibility, VisibilityOff} from '@mui/icons-material';

export const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(prev => !prev);
  };

  return (
    <>
      <div className="WholesalePrices_outer">
        <div className="LoginTop_inner LoginTop_innerNew">
          <div className="LoginTop_text">
            <h3>Register</h3>
            <p>Please fill in the fields below:</p>
          </div>
          <Alert severity="info" className="mb-3">
            We have sent you an email, please click the link included to verify
            your email address.
          </Alert>
          <form action="">
            <div className="LoginTop_input">
              <TextField
                type="text"
                id="Firstname"
                className="form-control"
                placeholder="First name"
                fullWidth
              />
            </div>
            <div className="LoginTop_input">
              <TextField
                type="text"
                id="Lastname"
                className="form-control"
                placeholder="Last name"
                fullWidth
              />
            </div>
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
            <div className="LoginTop_input">
              <TextField
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Confirm password"
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
            <div className="mb-3 text-start">
              <FormControlLabel
                required
                control={<Checkbox />}
                label="Yes, I want  subscribe to newsletter now"
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
            Do you already have an account?
            <NavLink to="/login"> Back to Log In</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

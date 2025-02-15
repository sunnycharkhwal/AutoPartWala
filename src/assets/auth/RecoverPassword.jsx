import {Button, IconButton, InputAdornment, TextField} from '@mui/material';
import {Visibility, VisibilityOff} from '@mui/icons-material';
import React, {useState} from 'react';
import {NavLink, useNavigate} from 'react-router';
import Alert from '@mui/material/Alert';

const NotFound = () => <div>404 - Not Found</div>;

export const RecoverPassword = () => {
  const [view, setView] = useState('forgetpassword');

  const renderComponent = view => {
    switch (view) {
      case 'forgetpassword':
        return <ForgetPassword />;
      case 'sendemail':
        return <SendEmail />;
      case 'newpassword':
        return <NewPassword />;
      case 'successfullychanged':
        return <SuccessfullyChanged />;
      default:
        return <NotFound />;
    }
  };

  const ForgetPassword = () => {
    return (
      <>
        <div className="WholesalePrices_outer">
          <div className="LoginTop_inner">
            <div className="LoginTop_text">
              <h3>Recover password</h3>
              <p>Please enter your e-mail:</p>
            </div>
            <Alert severity="warning" className="mb-3">
              No account found with that email.
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

              <div className="LoginTop_btn">
                <Button
                  variant="contained"
                  onClick={() => setView('sendemail')}>
                  Recover
                </Button>
              </div>
            </form>

            <div className="LoginTop_link">
              Remember your password?
              <NavLink to="/login"> Back to Log In</NavLink>
            </div>
          </div>
        </div>
      </>
    );
  };
  const SendEmail = () => {
    return (
      <>
        <div className="WholesalePrices_outer">
          <div className="LoginTop_inner text-center">
            <div className="LoginTop_text">
              <h3>Recover password</h3>
            </div>
            <Alert severity="info" className="mb-3 ">
              An e-mail has been sent to your address with instructions to
              recover your password.
            </Alert>
            <form action="">
              <div className="LoginTop_btn">
                <Button
                  variant="contained"
                  onClick={() => setView('newpassword')}>
                  ok
                </Button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  };
  const NewPassword = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
      setShowPassword(prev => !prev);
    };
    return (
      <>
        <div className="WholesalePrices_outer">
          <div className="LoginTop_inner">
            <div className="LoginTop_text">
              <h3>Recover password</h3>
              <p>Enter a new password for your account:</p>
            </div>
            <Alert severity="warning" className="mb-3">
              The password confirmation must match the provided password.
            </Alert>
            <form action="">
              <div className="LoginTop_input">
                <TextField
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  placeholder="New Password"
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
                  id="ConfirmNewPassword"
                  placeholder="Confirm New Password"
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
                <Button
                  variant="contained"
                  onClick={() => setView('successfullychanged')}>
                  reset
                </Button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  };
  const SuccessfullyChanged = () => {
    const navigate = useNavigate();
    return (
      <>
        <div className="WholesalePrices_outer">
          <div className="LoginTop_inner text-center">
            <div className="LoginTop_text">
              <h3>Recover password</h3>
            </div>
            <Alert severity="info" className="mb-3 ">
              The password was successfully changed
            </Alert>
            <form action="">
              <div className="LoginTop_btn">
                <Button variant="contained" onClick={() => navigate('/')}>
                  Home
                </Button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  };
  return (
    <div>
      <div>{renderComponent(view)}</div>
    </div>
  );
};

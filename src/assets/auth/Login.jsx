import React from 'react';
import {Button} from 'react-bootstrap';
import {NavLink, useNavigate} from 'react-router';

export const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Login</h1>
      <NavLink className="ms-5" to="/">
        home
      </NavLink>
    </>
  );
};

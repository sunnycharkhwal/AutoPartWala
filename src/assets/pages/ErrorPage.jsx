import React from 'react';
import {NavLink} from 'react-router';

export const ErrorPage = () => {
  return (
    <>
      <h1>ErrorPage</h1>
      <NavLink to="/" className="ms-5">
        home
      </NavLink>
    </>
  );
};

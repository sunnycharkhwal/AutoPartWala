import React from 'react';
import Logo from '../../images/logo2.png';
import {Button} from '@mui/material';
export const OrderTracking = () => {
  return (
    <div className=" OrderTracking_topdiv">
      <div className="OrderTracking_logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="OrderTracking_div">
        <form action="">
          <div className="OrderTracking_imputDiv mb-3">
            <label for="EmailPhone" className="form-label">
              Email / Phone #
            </label>
            <input
              type="text"
              id="EmailPhone"
              className="form-control"
              aria-describedby="passwordHelpBlock"
              required
            />
            <small>Please provide your phone number or email id.</small>
          </div>
          <div className="OrderTracking_imputDiv">
            <label for="Order" className="form-label">
              OrderID #
            </label>
            <input
              type="text"
              id="Order"
              className="form-control"
              placeholder="e.g.:10001"
              aria-describedby="passwordHelpBlock"
              required
            />
            <small>
              Please provide the order number of the order to be tracked.
            </small>
          </div>
          <div className="OrderTracking_btnDiv">
            <Button type="submit" variant="contained">
              Fetch Details
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

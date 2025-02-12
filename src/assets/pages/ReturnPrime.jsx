import React from 'react';
import {UpperFooter} from '../component/UpperFooter';
import {Button} from '@mui/material';
export const ReturnPrime = () => {
  return (
    <>
      <div className="ReturnPrime_div">
        <div className="OrderTracking_div">
          <div className="ReturnPrime_titlediv">
            <h3>Returns & Exchanges</h3>
            <p>
              Enter your 5 digit order number and Phone or Email to find your
              order
            </p>
          </div>
          <form action="">
            <div className="OrderTracking_imputDiv mb-3">
              <input
                type="text"
                id="EmailPhone"
                class="form-control"
                aria-describedby="passwordHelpBlock"
                placeholder="Order number"
                required
              />
              <small>Order number can't be empty</small>
            </div>
            <div className="OrderTracking_imputDiv">
              <input
                type="text"
                id="Order"
                class="form-control"
                placeholder="Phone or Email"
                aria-describedby="passwordHelpBlock"
                required
              />
              <small>Please enter a valid email or phone number</small>
            </div>
            <div className="OrderTracking_btnDiv">
              <Button type="submit" variant="contained">
                FIND YOUR ORDER
              </Button>
            </div>
          </form>
        </div>
      </div>
      <UpperFooter />
    </>
  );
};

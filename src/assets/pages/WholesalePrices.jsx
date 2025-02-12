import {Button} from '@mui/material';
import React, {useState} from 'react';
import Logo from '../../images/logo.png';

export const WholesalePrices = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="WholesalePrices_outer">
      <img src={Logo} alt="logo" className="logo" />
      {!submitted ? (
        <form onSubmit={handleSubmit} className="WholesalePrices_inner">
          <div className="WholesalePrices_title">Wholesale Sign-up Form</div>
          <div className="WholesalePrices_topDiv">
            <div>
              <p>
                Wholesale Discounts for Shop Owners, Mechanic Brothers and
                Service Centers
              </p>
              <span className="warning">
                Please correct the marked field(s) below.
              </span>
            </div>
            <div className="row g-3 mt-3 mb-3">
              <div className="col-12">
                <div className="WholesalePrices_inputDiv">
                  <label htmlFor="FirstName" className="col-form-label">
                    First Name*
                  </label>
                  <input
                    type="text"
                    id="FirstName"
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="WholesalePrices_inputDiv">
                  <label htmlFor="LastName" className="col-form-label">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    id="LastName"
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="WholesalePrices_inputDiv">
                  <label htmlFor="MobileNo" className="col-form-label">
                    Mobile No *
                  </label>
                  <input
                    type="number"
                    id="MobileNo"
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="WholesalePrices_inputDiv">
                  <label htmlFor="LeadEmail" className="col-form-label">
                    Lead Email *
                  </label>
                  <input
                    type="email"
                    id="LeadEmail"
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="WholesalePrices_inputDiv">
                  <label htmlFor="PinCode" className="col-form-label">
                    Pin Code *
                  </label>
                  <input
                    type="text"
                    id="PinCode"
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="WholesalePrices_inputDiv">
                  <label htmlFor="GSTNo" className="col-form-label">
                    GST No
                  </label>
                  <input type="text" id="GSTNo" className="form-control" />
                </div>
              </div>
            </div>
            <small className="warningBottom">*Required fields</small>
            <div className="WholesalePrices_btnDiv">
              <Button type="submit" variant="contained">
                Join Now
              </Button>
            </div>
          </div>
        </form>
      ) : (
        <div className="WholesalePrices_inner">
          THANK YOU! eAuto Team will call you with Wholesale Pricing
        </div>
      )}
    </div>
  );
};

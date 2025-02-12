import React from 'react';
import LiveChat from '../../images/lc.png';
import FastDelivery from '../../images/df.png';
import SecurePayments from '../../images/sp.png';
export const UpperFooter = () => {
  return (
    <div className="aboutus_info_div">
      <div className="row ">
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 aboutus_infoOuter">
          <div className="aboutus_info">
            <img src={LiveChat} alt="icon" />
            <div>
              <p>Live Chat</p>
              <span>Talk to an agent</span>
            </div>
          </div>
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 aboutus_infoOuter">
          <div className="aboutus_info">
            <img src={FastDelivery} alt="icon" />
            <div>
              <p>Fast Delivery</p>
              <span>We deliver all over India</span>
            </div>
          </div>
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 aboutus_infoOuter">
          <div className="aboutus_info">
            <img src={SecurePayments} alt="icon" />
            <div>
              <p>Secure payments</p>
              <span>Secure and reliable payment always</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

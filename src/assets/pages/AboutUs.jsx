import React from 'react';
import LiveChat from '../../images/lc.png';
import FastDelivery from '../../images/df.png';
import SecurePayments from '../../images/sp.png';

export const AboutUs = () => {
  return (
    <>
      <div className="AboutUs_text">
        <h1>About Us</h1>
        <h3>Welcome to eAuto</h3>
        <h4>Your online store for auto parts, accessories and services</h4>
        <p>
          <strong>OUR MISSION:</strong>
        </p>
        <p>
          <strong>Eauto</strong> serves as the online portal under the parent
          company <br /> <span>Anay Autoparts Retail Private Limited</span>. We
          strive to provide our customers with high quality service by
          delivering genuine spare parts for motorcycle, scooter and scooty.
        </p>
        <p>
          <strong>OUR VALUES:</strong>
        </p>
        <p>
          We value top quality service and product delivery and will ensure that
          you have an amazing online experience with us.&nbsp;
        </p>
        <p>
          <strong>Contact Us:</strong>
        </p>
        <p>Email: info@eauto.co.in</p>
      </div>
      <div className="row mt-4">
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
    </>
  );
};

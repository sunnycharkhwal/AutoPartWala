import React from 'react';
import {UpperFooter} from '../component/UpperFooter';
import {MyFooter} from '../component/Footer';

export const PrivacyPolicy = () => {
  return (
    <>
      <div className="AboutUs_text">
        <h1>Privacy Policy</h1>
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
      <UpperFooter />
      <MyFooter />
    </>
  );
};

import React from 'react';
import {NavLink, useNavigate} from 'react-router';
import {FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa';
import Logo from '../../images/logo.png';
export const MyFooter = () => {
  return (
    <footer>
      <div className="footerDiv">
        <div className="row">
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12">
            <div className="footerDiv_text">
              <img src={Logo} alt="img" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
                voluptatem accusantium
              </p>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12">
            <div className="footerDiv_link">
              <h5>Resource</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <NavLink to="/about-us">about us</NavLink>
                </li>
                <li>
                  <NavLink to="/blogs">blogs</NavLink>
                </li>
                <li>
                  <NavLink to="/contact-us">Contact Us</NavLink>
                </li>
                <li>
                  <NavLink to="/faq">FAQs</NavLink>
                </li>
                <li>
                  <NavLink to="/wholesale-prices">Wholesale Prices</NavLink>
                </li>
                <li>
                  <NavLink to="/privacy-policy">Privacy Policy</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12">
            <div className="footerDiv_link">
              <h5>Brands</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <NavLink to="/list-page">Hero</NavLink>
                </li>
                <li>
                  <NavLink to="/list-page">Honda</NavLink>
                </li>
                <li>
                  <NavLink to="/list-page">TVS</NavLink>
                </li>
                <li>
                  <NavLink to="/list-page">Yamaha</NavLink>
                </li>
                <li>
                  <NavLink to="/list-page">Suzuki</NavLink>
                </li>
                <li>
                  <NavLink to="/list-page">Bajaj</NavLink>
                </li>
                <li>
                  <NavLink to="/list-page">Royal enfield</NavLink>
                </li>
                <li>
                  <NavLink to="/list-page">KTM</NavLink>
                </li>
                <li>
                  <NavLink to="/list-page">Mahindra</NavLink>
                </li>
                <li>
                  <NavLink to="/list-page">Yezdi</NavLink>
                </li>
                <li>
                  <NavLink to="/list-page">Ev</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12">
            <div className="footerDiv_link">
              <h5>Follow us</h5>
              <div className="footerDiv_follow">
                <NavLink to="https://www.instagram.com/" target="_blank">
                  <FaInstagram />
                </NavLink>
                <NavLink to="https://www.facebook.com/login/" target="_blank">
                  <FaFacebookF />
                </NavLink>
                <NavLink to="https://x.com/?lang=en&mx=2" target="_blank">
                  <FaTwitter />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footerDiv_bottom">
        © 2025 Copyright:
        <NavLink to="/">Demo.com</NavLink>
      </div>
    </footer>
  );
};

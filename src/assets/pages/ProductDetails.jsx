import React, {useState} from 'react';
import {motion} from 'framer-motion';
import EF1 from '../../images/Ef1.png';
import EF2 from '../../images/Ef2.png';
import EF3 from '../../images/Ef3.png';
import EF4 from '../../images/Ef4.png';
import {NavLink} from 'react-router';
import {
  FaFacebookF,
  FaInstagram,
  FaRegStar,
  FaStar,
  FaTwitter,
} from 'react-icons/fa';
import {TiMinus, TiPlus} from 'react-icons/ti';
import {Button, TextField} from '@mui/material';
import DemoImg from '../../images/demo.webp';
import {UpperFooter} from '../component/UpperFooter';
import {MyFooter} from '../component/Footer';
//
export const ProductDetails = () => {
  const images = [EF1, EF2, EF3, EF4];
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [position, setPosition] = useState({x: 0, y: 0, visible: false});

  const handleMouseMove = e => {
    const {left, top, width, height} = e.target.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setPosition({x, y, visible: true});
  };

  const handleMouseLeave = () => {
    setPosition(prev => ({...prev, visible: false}));
  };

  return (
    <>
      <div className="outerDiv">
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="row g-3">
              <div className="col-12 ProductDetails_DivTop">
                <div className="ProductDetails_DivTopInner">
                  {/* Left Side - Thumbnails */}
                  <div className="ProductDetails_top">
                    {images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        onClick={() => setSelectedImage(image)}
                        className="ProductDetails_smallImg"
                      />
                    ))}
                  </div>

                  {/* Right Side - Image Display & Zoom Effect */}
                  <div
                    className="magnifier-container ProductDetails_RightTop"
                    style={{position: 'relative'}}>
                    <div
                      className="image-container"
                      onMouseMove={handleMouseMove}
                      onMouseLeave={handleMouseLeave}
                      style={{position: 'relative'}}>
                      <motion.img
                        key={selectedImage}
                        src={selectedImage}
                        alt="Original"
                        className="ProductDetails_RightTopInner"
                        initial={{opacity: 0, scale: 0.8}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{duration: 0.5}}
                      />
                    </div>

                    {/* Zoomed Image */}
                    {position.visible && (
                      <div
                        className="zoom-container"
                        style={{
                          position: 'absolute',
                          left: '100%',
                          top: 0,
                          width: '30pxpx',
                          height: '300pxpx',
                          overflow: 'hidden',
                          borderRadius: '5px',
                          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
                          background: `url(${selectedImage})`,
                          backgroundSize: '300% 300%',
                          backgroundPosition: `${position.x}% ${position.y}%`,
                          border: '1px solid #ddd',
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="col-12 d-block d-xxl-none d-xl-none d-lg-none ProductDetails_textDivTop">
                <PayDiv />
              </div>
              <div className="col-12 ProductDetails_textDivTop">
                <div className="ProductDetails_textDiv">
                  <h1>Description</h1>
                  <h3>Features & Benefits</h3>
                  <ul>
                    <li>
                      Superior lock set that keeps your bike safe bringing you
                      peace of mind
                    </li>
                    <li>
                      Superior lock set that keeps your bike safe bringing you
                      peace of mind
                    </li>
                  </ul>
                  <h3>Product Information</h3>
                  <div className="ProductDetails_tabel">
                    <table class="table">
                      <tbody>
                        <tr>
                          <td>
                            <strong> Brand</strong>
                          </td>
                          <td>Spark MINDA</td>
                        </tr>
                        <tr>
                          <td>
                            <strong> Compatible Vehicle</strong>
                          </td>
                          <td> Bajaj Pulsar 150CC 2 Pin</td>
                        </tr>
                        <tr>
                          <td>
                            <strong> Compatible Vehicle</strong>
                          </td>
                          <td> Bajaj Pulsar 150CC 2 Pin</td>
                        </tr>
                        <tr>
                          <td>
                            <strong> Compatible Vehicle</strong>
                          </td>
                          <td> Bajaj Pulsar 150CC 2 Pin</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-12 ProductDetails_textDivTop">
                <div className="ProductDetails_textDiv">
                  <h1>Your budget-friendly bike insurance!</h1>
                  <img src={DemoImg} alt="img" />
                </div>
              </div>
              <div className="col-12 ProductDetails_textDivTop">
                <div className="ProductDetails_textDiv">
                  <h1>Shipping & Delivery</h1>
                  <h3>demo</h3>
                  <ul>
                    <li>
                      Superior lock set that keeps your bike safe bringing you
                      peace of mind
                    </li>
                    <li>
                      Superior lock set that keeps your bike safe bringing you
                      peace of mind
                    </li>
                  </ul>
                  <div className="ProductDetails_tabel">
                    <table class="table">
                      <tbody>
                        <tr>
                          <td>
                            <strong> Brand</strong>
                          </td>
                          <td>Spark MINDA</td>
                        </tr>
                        <tr>
                          <td>
                            <strong> Compatible Vehicle</strong>
                          </td>
                          <td> Bajaj Pulsar 150CC 2 Pin</td>
                        </tr>
                        <tr>
                          <td>
                            <strong> Compatible Vehicle</strong>
                          </td>
                          <td> Bajaj Pulsar 150CC 2 Pin</td>
                        </tr>
                        <tr>
                          <td>
                            <strong> Compatible Vehicle</strong>
                          </td>
                          <td> Bajaj Pulsar 150CC 2 Pin</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-12 ProductDetails_textDivTop">
                <div className="ProductDetails_textDiv">
                  <h1>Shipping & Delivery</h1>
                  <h3>demo</h3>
                  <ul>
                    <li>
                      Superior lock set that keeps your bike safe bringing you
                      peace of mind
                    </li>
                    <li>
                      Superior lock set that keeps your bike safe bringing you
                      peace of mind
                    </li>
                  </ul>
                  <div className="ProductDetails_tabel">
                    <table class="table">
                      <tbody>
                        <tr>
                          <td>
                            <strong> Brand</strong>
                          </td>
                          <td>Spark MINDA</td>
                        </tr>
                        <tr>
                          <td>
                            <strong> Compatible Vehicle</strong>
                          </td>
                          <td> Bajaj Pulsar 150CC 2 Pin</td>
                        </tr>
                        <tr>
                          <td>
                            <strong> Compatible Vehicle</strong>
                          </td>
                          <td> Bajaj Pulsar 150CC 2 Pin</td>
                        </tr>
                        <tr>
                          <td>
                            <strong> Compatible Vehicle</strong>
                          </td>
                          <td> Bajaj Pulsar 150CC 2 Pin</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 d-none d-xxl-block d-xl-block d-lg-block ">
            <PayDiv />
          </div>
        </div>
      </div>
      <UpperFooter />
      <MyFooter />
    </>
  );
};
const PayDiv = () => {
  const [count, setCount] = useState(1); // Start from 1

  const increase = () => {
    setCount(prevCount => prevCount + 1); // Increase count
  };

  const decrease = () => {
    if (count > 1) {
      setCount(prevCount => prevCount - 1); // Decrease only if count > 1
    }
  };
  return (
    <>
      <div className="ProductDetails_PayDiv">
        <h1>MINDA Lock Set for Bajaj Pulsar 150CC 2 Pin</h1>
        <NavLink to="/list-page" className="subTitle">
          Spark Minda
        </NavLink>
        <div className="CustomerReviews_div">
          <ul className="flex items-center space-x-1">
            {/* Ensure rating is between 1 and 5 */}
            {(() => {
              const rating = Math.min(Math.max(3, 1), 5); // Keep it between 1-5
              const filledStars = rating;
              const emptyStars = 5 - filledStars;

              return (
                <>
                  {/* Render filled stars */}
                  {[...Array(filledStars)].map((_, idx) => (
                    <li key={`filled-${idx}`}>
                      <FaStar />
                    </li>
                  ))}

                  {/* Render empty stars */}
                  {[...Array(emptyStars)].map((_, idx) => (
                    <li key={`empty-${idx}`} className="lastStar">
                      <FaRegStar />
                    </li>
                  ))}
                </>
              );
            })()}
            <li className="inner_text">25 reviews</li>
          </ul>
        </div>
        <h3>Vehicle Compatibility</h3>
        <div className="ProductDetails_Compatibility">
          <p>Pulsar</p>
          <p>Pulsar 150</p>
        </div>
        <div className="footerDiv_link">
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
        <div className="ProductDetails_priceDiv">
          <p className="ProductDetails_priceTitle">Price:</p>
          <p className="ProductDetails_price">Rs. 1,189.00</p>
        </div>
        <div className="ProductDetails_priceDiv mt-2">
          <p className="ProductDetails_priceTitle">Stock:</p>
          <p className="ProductDetails_price2">Selling Fast</p>
        </div>
        <div className="cardQuantity">
          <div className="cardQuantity_Inner">
            <button onClick={decrease} className="button1">
              <TiMinus />
            </button>
            <h4>{count}</h4>
            <button onClick={increase} className="button2">
              <TiPlus />
            </button>
          </div>
        </div>
        <div className="bottom_btn">
          <Button variant="contained" className="bottom_btn1">
            Add to cart
          </Button>
          <Button variant="contained" className="bottom_btn2">
            Buy it now
          </Button>
        </div>
        <div className="ProductDetails_Availability">
          <h3>Check COD Availability</h3>
          <div>
            <TextField
              id="outlined-basic"
              label="Postal code e.g. 414001"
              variant="outlined"
            />
            <Button variant="outlined">Check</Button>
          </div>
        </div>
      </div>
    </>
  );
};

import React, {useState} from 'react';
import {MyFooter} from '../component/Footer';
import {NavLink} from 'react-router';
import {TiMinus, TiPlus} from 'react-icons/ti';
import {ProductData} from '../Data';
import {UpperFooter} from '../component/UpperFooter';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {FcLock} from 'react-icons/fc';
export const Cart = () => {
  const [expanded, setExpanded] = useState(true);

  const handleToggle = () => {
    setExpanded(prev => !prev);
  };

  const handleClose = event => {
    event.stopPropagation(); // Prevents triggering the accordion toggle
    setExpanded(false);
  };
  const Product = val => {
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
      <div className="row CartDivTop">
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="CartDiv">
            <img src={val.productImg} alt="img" />
            <div className="CartText">
              <NavLink className="small" to="/list-page">
                {val.catg}
              </NavLink>
              <NavLink to="/product-details" className="innerTitle">
                {val.title}
              </NavLink>
              <p>
                Rs. {val.highlightPrice} <del>Rs. {val.comparePrice}</del>
              </p>
            </div>
          </div>
        </div>
        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
          <div className="cardQuantity">
            <div className="cardQuantity_Inner">
              <button onClick={decrease}>
                <TiMinus />
              </button>
              <h4> {count}</h4>
              <button onClick={increase}>
                <TiPlus />
              </button>
            </div>
          </div>
        </div>
        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
          <div className="CartDivPrice">Rs. {val.totalPrice}</div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="outerDiv">
        <div className="row g-5">
          <div className="col-xxl-9 col-xl-9 col-lg-8 col-md-12 col-sm-12 col-12">
            <div className="row CartDivTopTitle">
              <div className="col-6">
                <div className="first">Product</div>
              </div>
              <div className="col-3">
                <div className="second">Quantity</div>
              </div>
              <div className="col-3">
                <div className="second">Total</div>
              </div>
            </div>
            {ProductData.map((val, i) => (
              <Product {...val} key={i} />
            ))}
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
            <div className="CartPriceRighi_div">
              <div className="row">
                <div className="col-6">
                  <div className="mytext mycolor2">LuckyDiscount25</div>
                </div>
                <div className="col-6">
                  <div className="mytext mycolor2 text-end">-Rs. 25.00</div>
                </div>
              </div>
              <div className="row mt-2 mb-2">
                <div className="col-6">
                  <div className="mytext ">Total</div>
                </div>
                <div className="col-6">
                  <div className="mytext  text-end">-Rs. 25.00</div>
                </div>
              </div>
              <div>
                <Accordion
                  expanded={expanded}
                  onChange={() => setExpanded(!expanded)}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header">
                    <Typography component="span">Accordion 1</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                    <Button
                      variant="contained"
                      color="secondary"
                      size="small"
                      onClick={handleClose}
                      sx={{marginTop: 1}}>
                      Close
                    </Button>
                  </AccordionDetails>
                </Accordion>
              </div>
              <p>You saved Rs. 1,312.00</p>
              <div className="bottomText">
                Tax included. <NavLink to="/privacy-policy">Shipping</NavLink>{' '}
                calculated at checkout
              </div>
              <div className="CartBtn">
                <Button variant="contained">Checkout</Button>
              </div>
            </div>
            <p className="CartPriceRighi_bottom">
              <span>
                <FcLock />
              </span>
              100% Secure Payments
            </p>
          </div>
        </div>
      </div>
      <UpperFooter />
      <MyFooter />
    </>
  );
};

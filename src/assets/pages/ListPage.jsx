import React, {useState} from 'react';
import {FiltersData, ListPageData} from '../Data';
import {NavLink, useNavigate} from 'react-router';
import {FaRegStar, FaStar} from 'react-icons/fa';
import {GoDotFill} from 'react-icons/go';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {styled} from '@mui/material/styles';

export const ListPage = () => {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const CustomAccordion = styled(Accordion)({
    boxShadow: 'none',
    border: 'none',
    '&:before': {display: 'none'},
  });

  return (
    <>
      <div className="outerDiv">
        <div className="row">
          <div className="col-xxl-3 xol-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
            <div className="ListPage_divFilters">
              <h3>Filters</h3>
              <div className="ListPage_Accordion">
                {FiltersData.map((val, i) => (
                  <CustomAccordion key={i}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography>{val.categoryName}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className="ListPage_AccordionInner">
                        {val.FilterOptionData.map((option, j) => (
                          <FormControlLabel
                            key={j}
                            control={<Checkbox />}
                            label={option.FilterOption}
                          />
                        ))}
                      </div>
                    </AccordionDetails>
                  </CustomAccordion>
                ))}
              </div>
            </div>
          </div>
          <div className="col-xxl-9 xol-xl-9 col-lg-9 col-md-9 col-sm-12 col-12">
            <div className="row g-3 ListPage_div">
              {ListPageData.map((val, i) => (
                <div
                  className="col-xxl-3 xol-xl-3 col-lg-4 col-md-6 col-sm-12 col-12"
                  key={i}>
                  <div className="ListCard_div2">
                    <span className="salePrice">Save Rs. {val.offPrice}</span>
                    <img
                      onMouseEnter={() => setHoveredIndex(i)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      onClick={() => navigate('/product-details')}
                      src={hoveredIndex === i ? val.hoverImg : val.normalImg}
                      alt="Product"
                      className="transition-all duration-500 ease-in-out transform scale-100 hover:scale-105"
                    />
                    <div className="ListCard_divInner">
                      <div className="ListCard_price">
                        <span>Rs. {val.salePrice}</span>
                        <del>Rs. {val.regularPrice}</del>
                      </div>
                      <NavLink to="/product-details" className="titleA">
                        {val.title}
                      </NavLink>
                      <div className="titleB">
                        <NavLink to="/list-page">{val.brand}</NavLink>
                      </div>
                      <ul className="flex items-center space-x-1">
                        {[...Array(5)].map((_, idx) => (
                          <li
                            key={idx}
                            className={idx < val.rating ? '' : 'lastStar'}>
                            {idx < val.rating ? <FaStar /> : <FaRegStar />}
                          </li>
                        ))}
                        <li className="inner_text">{val.reviews} reviews</li>
                      </ul>
                      <span className="status flex items-center">
                        <GoDotFill
                          className={
                            val.inStock ? 'text-green-500' : 'text-red-500'
                          }
                        />
                        {val.inStock ? 'In Stock' : 'Out of Stock'}
                      </span>
                      <div className="listPageBtn">
                        <Button
                          variant="contained"
                          className={val.inStock ? '' : 'OutofStock'}
                          onClick={() => val.inStock && handleAddToCart(val)}
                          disabled={!val.inStock}>
                          {val.inStock ? 'Add to cart' : 'Out of Stock'}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

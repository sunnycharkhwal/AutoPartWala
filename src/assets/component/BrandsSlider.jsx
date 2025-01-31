import React from 'react';
import {useNavigate} from 'react-router';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import {BrandIconData} from '../Data';

//
function Arrow(props) {
  const {className, style, onClick, background} = props;
  return (
    <div
      className={className}
      style={{...style, display: 'block', background}}
      onClick={onClick}
    />
  );
}
const sliderSettings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 10,
  slidesToScroll: 1,
  initialSlide: 0,
  nextArrow: <Arrow />,
  prevArrow: <Arrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        dots: false,
        infinite: false,
        slidesToShow: 7,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

export const BrandsSlider = () => {
  const navigate = useNavigate();
  return (
    <div className="outerDiv BrandsIcon_sliderTop">
      <h3 className="BrandsIcon_divTitle">Brands</h3>
      <div className="slider-container">
        <Slider {...sliderSettings}>
          {BrandIconData.map((val, index) => (
            <div
              key={index}
              className="BrandsIcon_div"
              onClick={() => navigate(val.link)}>
              <img src={val.BrandIcon} alt="icon" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

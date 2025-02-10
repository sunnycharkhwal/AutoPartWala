import React from 'react';
import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import {NavLink} from 'react-router';
import {
  BrandIconData,
  CarburetorListCardData,
  CarouselData,
  ElectricalData,
  EngineFuelData,
} from '../Data';
import Carousel from 'react-bootstrap/Carousel';
//
import {FaRegStar, FaStar} from 'react-icons/fa';
import {GoDotFill} from 'react-icons/go';
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

export const BrandsSlider = () => {
  const navigate = useNavigate();
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
export const EngineFuel = () => {
  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
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
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="EngineFuel_title">
        <h3>Engine & Fuel systems</h3>
        <NavLink to="/list-page">View all</NavLink>
      </div>
      <div className="slider-container BrandsIcon_sliderTop">
        <Slider {...sliderSettings}>
          {EngineFuelData.map((val, i) => (
            <div className="EngineFuel_card" key={i}>
              <img src={val.img} alt="img" />
              <p>{val.title}</p>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export const Electrical = () => {
  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: false,
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="EngineFuel_title">
        <h3>Break, Electrical & Gear Pinion set</h3>
        <NavLink to="/list-page">View all</NavLink>
      </div>
      <div className="slider-container BrandsIcon_sliderTop">
        <Slider {...sliderSettings}>
          {ElectricalData.map((val, i) => (
            <div className="EngineFuel_card" key={i}>
              <img src={val.img} alt="img" />
              <p>{val.title}</p>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export const HomePageCarousel = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 425);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 425);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Carousel fade>
      {CarouselData.map((val, i) => (
        <Carousel.Item key={i} className="HomePageCarousel_div">
          <img
            className={`slideImg ${
              val.activeClass === 'normal' ? 'slideImgNormal' : ''
            }`}
            onClick={() => navigate(val.ImgLink)}
            src={isMobile ? val.mobileImg : val.desktopImg}
            alt={`Slide ${i + 1}`}
          />
          {val.activeClass !== 'normal' && (
            <Carousel.Caption>
              <button
                className="slideBtn"
                onClick={() => navigate(val.ImgLink)}>
                SHOP NOW
              </button>
            </Carousel.Caption>
          )}
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
export const Carburetor = () => {
  const navigate = useNavigate();
  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    responsive: [
      {breakpoint: 1024, settings: {slidesToShow: 4, slidesToScroll: 1}},
      {
        breakpoint: 768,
        settings: {slidesToShow: 3, slidesToScroll: 1, initialSlide: 2},
      },
      {
        breakpoint: 600,
        settings: {slidesToShow: 2, slidesToScroll: 1, initialSlide: 2},
      },
      {breakpoint: 480, settings: {slidesToShow: 1, slidesToScroll: 1}},
      {breakpoint: 375, settings: {slidesToShow: 1, slidesToScroll: 1}},
      {breakpoint: 320, settings: {slidesToShow: 1, slidesToScroll: 1}},
    ],
  };

  return (
    <>
      <div className="EngineFuel_title">
        <h3>Carburetor</h3>
        <NavLink to="/list-page">View all</NavLink>
      </div>
      <div className="slider-container BrandsIcon_sliderTop">
        <Slider {...sliderSettings}>
          {CarburetorListCardData.map((val, i) => {
            const [hover, setHover] = React.useState(false);
            return (
              <div key={i} className="ListCard_div">
                <span className="salePrice">Save Rs. {val.offPrice}</span>
                <img
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                  onClick={() => navigate('/product-details')}
                  src={hover ? val.hoverImg : val.normalImg}
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
                    {[...Array(4)].map((_, idx) => (
                      <li key={idx}>
                        <FaStar />
                      </li>
                    ))}
                    <li>
                      <FaRegStar />
                    </li>
                    <li className="inner_text">{val.reviews} reviews</li>
                  </ul>
                  <span className="status flex items-center">
                    <GoDotFill className="text-green-500" />
                    {val.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};
export const CrankShaft = () => {
  const navigate = useNavigate();
  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    responsive: [
      {breakpoint: 1024, settings: {slidesToShow: 4, slidesToScroll: 1}},
      {
        breakpoint: 768,
        settings: {slidesToShow: 3, slidesToScroll: 1, initialSlide: 2},
      },
      {
        breakpoint: 600,
        settings: {slidesToShow: 2, slidesToScroll: 1, initialSlide: 2},
      },
      {breakpoint: 480, settings: {slidesToShow: 1, slidesToScroll: 1}},
      {breakpoint: 375, settings: {slidesToShow: 1, slidesToScroll: 1}},
      {breakpoint: 320, settings: {slidesToShow: 1, slidesToScroll: 1}},
    ],
  };

  return (
    <>
      <div className="EngineFuel_title">
        <h3>Crank shaft</h3>
        <NavLink to="/list-page">View all</NavLink>
      </div>
      <div className="slider-container BrandsIcon_sliderTop">
        <Slider {...sliderSettings}>
          {CarburetorListCardData.map((val, i) => {
            const [hover, setHover] = React.useState(false);
            return (
              <div key={i} className="ListCard_div">
                <span className="salePrice">Save Rs. {val.offPrice}</span>
                <img
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                  onClick={() => navigate('/product-details')}
                  src={hover ? val.hoverImg : val.normalImg}
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
                    {[...Array(4)].map((_, idx) => (
                      <li key={idx}>
                        <FaStar />
                      </li>
                    ))}
                    <li>
                      <FaRegStar />
                    </li>
                    <li className="inner_text">{val.reviews} reviews</li>
                  </ul>
                  <span className="status flex items-center">
                    <GoDotFill className="text-green-500" />
                    {val.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};
export const BorePistonKit = () => {
  const navigate = useNavigate();
  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    responsive: [
      {breakpoint: 1024, settings: {slidesToShow: 4, slidesToScroll: 1}},
      {
        breakpoint: 768,
        settings: {slidesToShow: 3, slidesToScroll: 1, initialSlide: 2},
      },
      {
        breakpoint: 600,
        settings: {slidesToShow: 2, slidesToScroll: 1, initialSlide: 2},
      },
      {breakpoint: 480, settings: {slidesToShow: 1, slidesToScroll: 1}},
      {breakpoint: 375, settings: {slidesToShow: 1, slidesToScroll: 1}},
      {breakpoint: 320, settings: {slidesToShow: 1, slidesToScroll: 1}},
    ],
  };

  return (
    <>
      <div className="EngineFuel_title">
        <h3>Bore Piston Kit</h3>
        <NavLink to="/list-page">View all</NavLink>
      </div>
      <div className="slider-container BrandsIcon_sliderTop">
        <Slider {...sliderSettings}>
          {CarburetorListCardData.map((val, i) => {
            const [hover, setHover] = React.useState(false);
            return (
              <div key={i} className="ListCard_div">
                <span className="salePrice">Save Rs. {val.offPrice}</span>
                <img
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                  onClick={() => navigate('/product-details')}
                  src={hover ? val.hoverImg : val.normalImg}
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
                    {[...Array(4)].map((_, idx) => (
                      <li key={idx}>
                        <FaStar />
                      </li>
                    ))}
                    <li>
                      <FaRegStar />
                    </li>
                    <li className="inner_text">{val.reviews} reviews</li>
                  </ul>
                  <span className="status flex items-center">
                    <GoDotFill className="text-green-500" />
                    {val.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};
export const CustomerReviews = () => {
  return (
    <>
      <div className="EngineFuel_title text-center">
        <h3>Customer reviews</h3>
      </div>
      <div>
        <ul>
          <li>
            <FaStar />
          </li>
          <li>
            <FaRegStar />
          </li>
        </ul>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout
        </p>
        <h3>User name</h3>
        <span>June 26, 2024</span>
      </div>
    </>
  );
};

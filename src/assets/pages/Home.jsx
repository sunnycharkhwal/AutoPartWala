import React from 'react';
import {
  BorePistonKit,
  BrandsSlider,
  Carburetor,
  CrankShaft,
  CustomerReviews,
  Electrical,
  EngineFuel,
  HomePageCarousel,
} from '../component/HomePage';
import {MyFooter} from '../component/Footer';

export const Home = () => {
  return (
    <>
      <div>
        <HomePageCarousel />
      </div>
      <BrandsSlider />
      <div className="outerDiv">
        <EngineFuel />
      </div>
      <div className="outerDiv">
        <Electrical />
      </div>
      <div className="outerDiv">
        <Carburetor />
      </div>
      <div className="outerDiv">
        <CrankShaft />
      </div>
      <div className="outerDiv">
        <BorePistonKit />
      </div>
      <div className="outerDiv">
        <CustomerReviews />
      </div>
      <MyFooter />
    </>
  );
};

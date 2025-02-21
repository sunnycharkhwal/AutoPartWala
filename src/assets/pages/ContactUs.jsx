import React, {useState} from 'react';
import {MyFooter} from '../component/Footer';
import {UpperFooter} from '../component/UpperFooter';
import {Button, MenuItem, TextField} from '@mui/material';

export const ContactUs = () => {
  const [bikeBrand, setBikeBrand] = useState(''); // State for the select field

  const ContactUsBikeBrandData = [
    {value: 'Hero', label: 'Hero'},
    {value: 'Honda', label: 'Honda'},
    {value: 'TVS', label: 'TVS'},
    {value: 'Yamaha', label: 'Yamaha'},
    {value: 'Suzuki', label: 'Suzuki'},
    {value: 'Bajaj', label: 'Bajaj'},
    {value: 'Royal enfield', label: 'Royal enfield'},
    {value: 'KTM', label: 'KTM'},
    {value: 'Mahindra', label: 'Mahindra'},
    {value: 'Yezdi', label: 'Yezdi'},
    {value: 'Ev', label: 'Ev'},
  ];

  return (
    <>
      <div className="ContactUs_div">
        <div className="ContactUs_titlediv">Contact Us</div>
        <form action="">
          <div className="ContactUs_formDiv">
            <div className="row g-4">
              <div className="col-6">
                <TextField
                  id="outlined-basic"
                  label="Your Name"
                  variant="outlined"
                  type="text"
                  fullWidth
                />
              </div>
              <div className="col-6">
                <TextField
                  id="outlined-basic"
                  label="Your Email"
                  variant="outlined"
                  type="email"
                  fullWidth
                />
              </div>
              <div className="col-12">
                <TextField
                  id="outlined-select-bike-brand"
                  select
                  label="Bike Brand"
                  value={bikeBrand}
                  onChange={e => setBikeBrand(e.target.value)}
                  fullWidth>
                  {ContactUsBikeBrandData.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
              <div className="col-12">
                <TextField
                  id="outlined-basic"
                  label="Spare Part Name"
                  variant="outlined"
                  type="text"
                  fullWidth
                />
              </div>
              <div className="col-12">
                <textarea
                  className="form-control"
                  placeholder="Your message"
                  id="exampleFormControlTextarea1"
                  rows="5"></textarea>
              </div>
              <div className="col-12 ContactUs_btn">
                <Button variant="contained">Send message</Button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <UpperFooter />
      <MyFooter />
    </>
  );
};

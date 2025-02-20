import React from 'react';
import {useNavigate} from 'react-router';
import {BlogsData} from '../Data';
import {MyFooter} from '../component/Footer';

export const Blogs = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="outerDiv">
        <div className="row g-2">
          {BlogsData.map((val, i) => (
            <div
              key={i}
              className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
              <div
                className="BlogCard"
                onClick={() => navigate('/blog-details')}>
                <div className="card-header">
                  <img src={val.blogImg} alt="img" />
                </div>
                <div className="card-body">
                  <span>{val.date}</span>
                  <h4>
                    {val.title.length > 40
                      ? `${val.title.substring(0, 40)}...`
                      : val.title}
                  </h4>
                  <p>
                    {val.text.length > 150
                      ? `${val.text.substring(0, 150)}...`
                      : val.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <MyFooter />
    </>
  );
};

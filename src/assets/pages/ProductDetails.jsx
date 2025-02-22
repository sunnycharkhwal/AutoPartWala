import React, {useState} from 'react';
import {motion} from 'framer-motion';
import EF1 from '../../images/Ef1.png';
import EF2 from '../../images/Ef2.png';
import EF3 from '../../images/Ef3.png';
import EF4 from '../../images/Ef4.png';
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
    <div className="outerDiv">
      <div className="row">
        <div className="col-6 ">
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
            <div className="col-12 ProductDetails_textDivTop">
              <div className="ProductDetails_textDiv">
                <h1>Description</h1>
                <h3>Features & Benefits</h3>
                <ul>
                  <li>
                    Superior lock set that keeps your bike safe bringing you
                    peace of mind
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div>jbhv</div>
        </div>
      </div>
    </div>
  );
};

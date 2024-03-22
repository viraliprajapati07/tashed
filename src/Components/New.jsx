import React, { useState, useEffect } from 'react';

const AutoSlider = () => {
  const slides = [
    {
      imgSrc: 'assets/images/cat-background.png',
      title: 'STRUCTURE MATERIAL',
    },
    {
      imgSrc: 'assets/images/cat-background.png',
      title: 'STRUCTURE MATERIAL',
    },
    {
      imgSrc: 'assets/images/cat-background.png',
      title: 'STRUCTURE MATERIAL',
    },
    {
      imgSrc: 'assets/images/cat-background.png',
      title: 'STRUCTURE MATERIAL',
    },
    {
      imgSrc: 'assets/images/cat-background.png',
      title: 'STRUCTURE MATERIAL',
    },
    {
      imgSrc: 'assets/images/cat-background.png',
      title: 'STRUCTURE MATERIAL',
    },
    {
      imgSrc: 'assets/images/cat-background.png',
      title: 'STRUCTURE MATERIAL',
    },
    {
      imgSrc: 'assets/images/cat-background.png',
      title: 'STRUCTURE MATERIAL',
    },
    {
      imgSrc: 'assets/images/cat-background.png',
      title: 'STRUCTURE MATERIAL',
    },
    {
      imgSrc: 'assets/images/cat-background.png',
      title: 'STRUCTURE MATERIAL',
    },
    {
      imgSrc: 'assets/images/cat-background.png',
      title: 'STRUCTURE MATERIAL',
    },
    {
      imgSrc: 'assets/images/cat-background.png',
      title: 'STRUCTURE MATERIAL',
    },
    {
      imgSrc: 'assets/images/cat-background.png',
      title: 'STRUCTURE MATERIAL',
    },
    {
      imgSrc: 'assets/images/cat-background.png',
      title: 'STRUCTURE MATERIAL',
    },
    {
      imgSrc: 'assets/images/cat-background.png',
      title: 'STRUCTURE MATERIAL',
    },
    {
      imgSrc: 'assets/images/cat-background.png',
      title: 'STRUCTURE MATERIAL',
    },
    {
      imgSrc: 'assets/images/cat-background.png',
      title: 'STRUCTURE MATERIAL',
    },
  ];
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (


    <div className="auto-slider" style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
      <div className="slider-wrapper" style={{ display: 'flex', transition: 'transform 0.5s', transform: `translateX(-${(activeSlide * (120 + 25))}px)` }}>
        {slides.map((slide, index) => (
          <div key={index} className={`slide`} style={{ flex: '0 0 120px', marginRight: '25px', marginTop: '20px' }}>
            <a href="javascript:void(0)" className="catg-boxlink">
              <div className="catg-img" style={{ width: '200px', height: '90px', position: 'relative', borderRadius: '10px', overflow: 'hidden' }}>
                <img src={slide.imgSrc} alt="category background image" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }} />
                <h5 style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center' }}>{slide.title}</h5>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>

    
  );
};

export default AutoSlider;

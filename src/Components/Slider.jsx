import React, { useEffect } from 'react';
import Swiper from 'swiper';

const Slider = () => {
  useEffect(() => {
    const productSwiper = new Swiper('.product-common-swiper', {
      slidesPerView: 1,
      spaceBetween: 30,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      },
    });

    return () => {
      productSwiper.destroy();
    };
  }, []);

  return (
    <div className="product-box">
    <div className="product-img text-center">
      <img src="assets/images/pro-1.png" alt="product image"/>
    </div>
    <div className="product-data">
      <h4><a href="product-view.html">Structure material</a></h4>
      <div className="product-varient">
        <div className="product-varient-inner">
          <label>Supplier:</label>
          <div className="pvi-flex">
            <p>Hempel</p>
          </div>
        </div>
        <div className="product-varient-inner pvi-weight">
          <label>Weight:</label>
          <div className="pvi-flex">
            <span>1x50 ML</span>
            <span>1x50 ML</span>
            <span>1x50 ML</span>
          </div>
        </div>
        <div className="product-varient-inner">
          <label>Unit Type:</label>
          <div className="pvi-flex">
            <p>Piece</p>
          </div>
        </div>
      </div>
      <div className="product-pricedata">
        <div className="ppd-flex">
          <button type="button" className="btn add-cartBtn" id="add_cartBtn">
            <img src="assets/images/add-cart.png" alt="add cart icon"/>
          </button>
          <button type="button" className="btn add-favBtn" id="add_favBtn">
            <i className="fa fa-star-o" aria-hidden="true"></i>
          </button>
          <div className="price-amount">
            <div className="price-amountinner">
              <span className="price-discount"><del>12.00</del> KD</span>
              <span>12.00 KD</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  );
};

export default Slider;


import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Slide.css";
import Card from "./Product/Card";
import CategoryBox from "./Category/CategoryBox";
import Person from "./Infulences/Person";
import Mainslider from "./S/Mainslider";

function Home() {
  return (
    <>
      <div className="home">
        <div className="wrapper">
          <section className="middle-content">
            <div className="banner">
              <Carousel
                autoPlay
                infiniteLoop
                interval={2000}
                showThumbs={false}
                showStatus={false}
              >
                <Mainslider mainImage="assets/images/banner.png" />
                <Mainslider mainImage="assets/images/banner2.png" />
                <Mainslider mainImage="assets/images/banner.png" />
              </Carousel>
            </div>
            <div className="best-seller product-slider comm-mob-sec">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="product-main-title common-main-title">
                      <h2>Best seller</h2>
                      <a href="#" className="view-moreLink">
                        View all
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper product-sliding product-common-swiper">
                  <div className="row common-slick-slide swiper-wrapper">
                    <Card
                      productImage="assets/images/pro-1.png"
                      productName="Product 1"
                      productlabel="Supplier"
                      productp="Hempel"
                      weight="Weight"
                      sp="1x40 ML"
                      l="Type of Unit"
                      para="Piece"
                      iconimage="assets/images/add-cart.png"
                      star="fa fa-star-o"
                      del="20.00"
                      ori="KD"
                      final="12.00"
                    />

                    <Card
                      productImage="assets/images/pro-2.png"
                      productName="Product 2"
                      productlabel="Supplier"
                      productp="Hempel"
                      weight="Weight"
                      sp="1x40 ML"
                      l="Type of Unit"
                      para="Piece"
                      iconimage="assets/images/add-cart.png"
                      star="fa fa-star-o"
                      del="20.00"
                      ori="KD"
                      final="12.00"
                    />

                    <Card
                      productImage="assets/images/pro-3.png"
                      productName="Product 3"
                      productlabel="Supplier"
                      productp="Hempel"
                      weight="Weight"
                      sp="1x40 ML"
                      l="Type of Unit"
                      para="Piece"
                      iconimage="assets/images/add-cart.png"
                      star="fa fa-star-o"
                      del="20.00"
                      ori="KD"
                      final="12.00"
                    />

                    <Card
                      productImage="assets/images/pro-4.png"
                      productName="Product 4"
                      productlabel="Supplier"
                      productp="Hempel"
                      weight="Weight"
                      sp="1x40 ML"
                      l="Type of Unit"
                      para="Piece"
                      iconimage="assets/images/add-cart.png"
                      star="fa fa-star-o"
                      del="20.00"
                      ori="KD"
                      final="12.00"
                    />
                  </div>

                  <div className="swiper-button-prev common-swipercontrol-btn"></div>
                  <div className="swiper-button-next common-swipercontrol-btn"></div>
                </div>
              </div>
            </div>
            <div className="new-product product-slider comm-mob-sec">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="product-main-title common-main-title">
                      <h2>New products</h2>
                      <a href="#" className="view-moreLink">
                        View all
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper product-sliding product-common-swiper">
                  <div className="row common-slick-slide swiper-wrapper">
                    <Card
                      productImage="assets/images/pro-5.png"
                      productName="New Product 1"
                      productlabel="Supplier"
                      productp="Hempel"
                      weight="Weight"
                      sp="1x40 ML"
                      l="Type of Unit"
                      para="Piece"
                      iconimage="assets/images/add-cart.png"
                      star="fa fa-star-o"
                      del="20.00"
                      ori="KD"
                      final="12.00"
                    />

                    <Card
                      productImage="assets/images/pro-6.png"
                      productName="New Product 2"
                      productlabel="Supplier"
                      productp="Hempel"
                      weight="Weight"
                      sp="1x40 ML"
                      l="Type of Unit"
                      para="Piece"
                      iconimage="assets/images/add-cart.png"
                      star="fa fa-star-o"
                      del="20.00"
                      ori="KD"
                      final="12.00"
                    />

                    <Card
                      productImage="assets/images/pro-7.png"
                      productName="New Product 3"
                      productlabel="Supplier"
                      productp="Hempel"
                      weight="Weight"
                      sp="1x40 ML"
                      l="Type of Unit"
                      para="Piece"
                      iconimage="assets/images/add-cart.png"
                      star="fa fa-star-o"
                      del="20.00"
                      ori="KD"
                      final="12.00"
                    />

                    <Card
                      productImage="assets/images/pro-8.png"
                      productName="New Product 4"
                      productlabel="Supplier"
                      productp="Hempel"
                      weight="Weight"
                      sp="1x40 ML"
                      l="Type of Unit"
                      para="Piece"
                      iconimage="assets/images/add-cart.png"
                      star="fa fa-star-o"
                      del="20.00"
                      ori="KD"
                      final="12.00"
                    />

                    <Card
                      productImage="assets/images/pro-9.png"
                      productName="New Product 5"
                      productlabel="Supplier"
                      productp="Hempel"
                      weight="Weight"
                      sp="1x40 ML"
                      l="Type of Unit"
                      para="Piece"
                      iconimage="assets/images/add-cart.png"
                      star="fa fa-star-o"
                      del="20.00"
                      ori="KD"
                      final="12.00"
                    />
                  </div>
                  <div className="swiper-button-prev common-swipercontrol-btn"></div>
                  <div className="swiper-button-next common-swipercontrol-btn"></div>
                </div>
              </div>
            </div>
            <div className="mob-shoptabs">
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="mob_shopbycat"
                  role="tabpanel"
                  aria-labelledby="mob_shopbycat-tab"
                >
                  <div className="shopbycat">
                    <div className="container">
                      <div className="common-main-title">
                        <h2 className="text-center">Shop By Category</h2>
                      </div>
                      <div className="row">
                        <CategoryBox
                          categoryImg="assets/images/cat-back-1.png"
                          categoryName="MATERIAL"
                        />
                        <CategoryBox
                          categoryImg="assets/images/cat-back-2.png"
                          categoryName="TOOLS"
                        />
                        <CategoryBox
                          categoryImg="assets/images/cat-back-3.png"
                          categoryName="ASMENT"
                        />
                        <CategoryBox
                          categoryImg="assets/images/cat-back-4.png"
                          categoryName="WOOD"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="influencers product-slider comm-mob-sec">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="product-main-title common-main-title">
                      <h2>Influencers</h2>
                      <a href="#" className="view-moreLink">
                        View all
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper product-common-swiper influencers-sliding">
                  <div className="common-slick-slide swiper-wrapper">
                    <Person
                      pplImage="assets/images/influencers-1.png"
                      pplName="JACK"
                    />
                    <Person
                      pplImage="assets/images/influencers-2.png"
                      pplName="JEH"
                    />
                    <Person
                      pplImage="assets/images/influencers-3.png"
                      pplName="NICK"
                    />
                    <Person
                      pplImage="assets/images/influencers-4.png"
                      pplName="JONAHTHAN"
                    />
                    <Person
                      pplImage="assets/images/influencers-5.png"
                      pplName="JACKY"
                    />
                    <Person
                      pplImage="assets/images/influencers-1.png"
                      pplName="JACKXAN"
                    />
                    <Person
                      pplImage="assets/images/influencers-2.png"
                      pplName="JIMMY"
                    />
                    <Person
                      pplImage="assets/images/influencers-3.png"
                      pplName="JAMEN"
                    />
                  </div>
                  <div className="swiper-button-prev common-swipercontrol-btn"></div>
                  <div className="swiper-button-next common-swipercontrol-btn"></div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
export default Home;

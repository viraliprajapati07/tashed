import React ,{useEffect} from 'react'
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Slide.css'; 

function Home() {
 return (
<>
<div className="home">
<div className="wrapper">

{/* <!-- start middle content --> */} 
	<section className="middle-content">
		<div className="banner">

	<Carousel
      autoPlay
      infiniteLoop
      interval={2000} 
      showThumbs={false}
      showStatus={false}
    >
      <div className="slide">
        <img src="assets/images/banner.png" alt="Banner 1" />
        <div className="text-overlay">
          <h1>ALL YOU NEED TO START <br/> YOUR DREAM HOME</h1>
          <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam<br/>
									nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat<br/>
									volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation<br/>
									ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis<br/>
									autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie<br/>
									consequat, vel illum dolore eu feugiat
          </p>
          <button className='b'>Start Shopping</button>
        </div>
      </div>
      <div className="slide">
        <img src="assets/images/banner2.png" alt="Banner 2" />
        <div className="text-overlay">
          <h1>ALL YOU NEED TO START <br/>YOUR DREAM HOME</h1>
          <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam<br/>
									nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat<br/>
									volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation<br/>
									ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis<br/>
									autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie<br/>
									consequat, vel illum dolore eu feugiat
          </p>
          <button className='b'>Start Shopping</button>
        </div>
      </div>
      <div className="slide">
        <img src="assets/images/banner.png" alt="Banner 3" />
        <div className="text-overlay">
          <h1>ALL YOU NEED TO START 
          <br/>YOUR DREAM HOME</h1>
          <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam<br/>
									nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam <br/>
									volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation<br/>
									ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis<br/>
									autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie<br/>
									consequat, vel illum dolore eu feugiat
          </p>
          <button className='b'>Start Shopping</button>
        </div>
      </div>
    </Carousel>
	</div>
		<div className="influencers product-slider comm-desk-sec">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="product-main-title common-main-title">
							<h2>Influencers</h2>
						</div>
					</div>
				</div>
				<div className="swiper product-common-swiper influencers-sliding">
					<div className="common-slick-slide swiper-wrapper">
						<div className="swiper-slide influencers-boxcol">
							<a href="influencers.html" className="influencers-link">
								<div className="influencers-img">
									<img src="assets/images/influencers-1.png" alt="influencers image"/>
								</div>
							</a>
						</div>
						<div className="swiper-slide influencers-boxcol">
							<a href="influencers.html">
								<div className="influencers-img">
									<img src="assets/images/influencers-2.png" alt="influencers image"/>
								</div>
							</a>
						</div>
						<div className="swiper-slide influencers-boxcol">
							<a href="influencers.html">
								<div className="influencers-img">
									<img src="assets/images/influencers-3.png" alt="influencers image"/>
								</div>
							</a>
						</div>
						<div className="swiper-slide influencers-boxcol">
							<a href="influencers.html">
								<div className="influencers-img">
									<img src="assets/images/influencers-4.png" alt="influencers image"/>
								</div>
							</a>
						</div>
						<div className="swiper-slide influencers-boxcol">
							<Link to='/Influencers'>
								<div className="influencers-img">
									<img src="assets/images/influencers-5.png" alt="influencers image"/>
								</div>
							</Link>
						</div>
						<div className="swiper-slide influencers-boxcol">
							<a href="influencers.html">
								<div className="influencers-img">
									<img src="assets/images/influencers-5.png" alt="influencers image"/>
								</div>
							</a>
						</div>
						<div className="swiper-slide influencers-boxcol">
							<a href="influencers.html">
								<div className="influencers-img">
									<img src="assets/images/influencers-5.png" alt="influencers image"/>
								</div>
							</a>
						</div>
						<div className="swiper-slide influencers-boxcol">
							<a href="influencers.html">
								<div className="influencers-img">
									<img src="assets/images/influencers-5.png" alt="influencers image"/>
								</div>
							</a>
						</div>
					</div>
					<div className="swiper-button-prev common-swipercontrol-btn"></div>
				   	<div className="swiper-button-next common-swipercontrol-btn"></div>
				</div>
			</div>
		</div>
		<div className="best-seller product-slider comm-mob-sec">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="product-main-title common-main-title">
							<h2>Best seller</h2>
							<a href="#" className="view-moreLink">View all</a>
						</div>
					</div>
				</div>
				<div className="swiper product-sliding product-common-swiper">
					<div className="row common-slick-slide swiper-wrapper">
					<div className="col-lg-3 col-md-3 col-sm-6 col-12 swiper-slide product-boxcol product-boxitemcol-lg-3 col-md-3 col-sm-6 col-12 swiper-slide product-boxcol product-boxitem swiper-slide-active 
					"role="group" aria-label='1 / 5 '
					 style={{width : "255px", marginRight:"30px"}}>
							<div className="product-box">
								<div className="product-img text-center">
									<img src="assets/images/pro-1.png" alt="product image"/>
								</div>
								<div className="product-data">
									<h4><a href="product-view.html">Structure material</a></h4>
									<div className="product-varient">
										<div className="product-varient-inner">
											<label>Suppler:</label>
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
						</div>
						<div className="col-lg-3 col-md-3 col-sm-6 col-12 swiper-slide product-boxcol product-boxitemcol-lg-3 col-md-3 col-sm-6 col-12 swiper-slide product-boxcol product-boxitem swiper-slide-active 
						"role="group" aria-label='2 / 5 ' 
						style={{width : "255px", marginRight:"30px"}}>
							<div className="product-box">
								<div className="product-img text-center">
									<img src="assets/images/pro-2.png" alt="product image"/>
								</div>
								<div className="product-data">
									<h4><a href="product-view.html">Structure material</a></h4>
									<div className="product-varient">
										<div className="product-varient-inner">
											<label>Suppler:</label>
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
						</div>
						<div className="col-lg-3 col-md-3 col-sm-6 col-12 swiper-slide product-boxcol product-boxitemcol-lg-3 col-md-3 col-sm-6 col-12 swiper-slide product-boxcol product-boxitem swiper-slide-active 
						"role="group" aria-label='3 / 5 ' 
						style={{width : "255px", marginRight:"30px"}}>
							<div className="product-box">
								<div className="product-img text-center">
									<img src="assets/images/pro-3.png" alt="product image"/>
								</div>
								<div className="product-data">
									<h4><a href="product-view.html">Structure material</a></h4>
									<div className="product-varient">
										<div className="product-varient-inner">
											<label>Suppler:</label>
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
						</div>
						<div className="col-lg-3 col-md-3 col-sm-6 col-12 swiper-slide product-boxcol product-boxitemcol-lg-3 col-md-3 col-sm-6 col-12 swiper-slide product-boxcol product-boxitem swiper-slide-active 
						"role="group" aria-label='4 / 5 ' 
						style={{width : "255px", marginRight:"30px"}}>
							<div className="product-box">
								<div className="product-img text-center">
									<img src="assets/images/pro-4.png" alt="product image"/>
								</div>
								<div className="product-data">
									<h4><a href="product-view.html">Structure material</a></h4>
									<div className="product-varient">
										<div className="product-varient-inner">
											<label>Suppler:</label>
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
						</div>
						<div className="col-lg-3 col-md-3 col-sm-6 col-12 swiper-slide product-boxcol product-boxitemcol-lg-3 col-md-3 col-sm-6 col-12 swiper-slide product-boxcol product-boxitem swiper-slide-active 
						"role="group" aria-label='5 / 5 ' 
						style={{width : "255px", marginRight:"30px"}}>							<div className="product-box">
								<div className="product-img text-center">
									<img src="assets/images/pro-4.png" alt="product image"/>
								</div>
								<div className="product-data">
									<h4><a href="product-view.html">Structure material</a></h4>
									<div className="product-varient">
										<div className="product-varient-inner">
											<label>Suppler:</label>
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
						</div>
					</div>
					<div className="swiper-button-prev common-swipercontrol-btn"></div>
		   		    <div className="swiper-button-next common-swipercontrol-btn"></div>
				</div>
			</div>
		</div>
		<div className="container comm-mob-sec">
			<div className="row">
				<div className="col-12">
					<div className="product-separator"></div>
				</div>
			</div>
		</div>
		<div className="new-product product-slider comm-mob-sec">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="product-main-title common-main-title">
							<h2>New products</h2>
							<a href="#" className="view-moreLink">View all</a>
						</div>
					</div>
				</div>
				<div className="swiper product-sliding product-common-swiper">
					<div className="row common-slick-slide swiper-wrapper">
						<div className="col-lg-3 col-md-3 col-sm-6 col-12 swiper-slide product-boxcol product-boxitem swiper-slide-active"
						 role ='group' aria-label='1 /5 ' style={{width:'255px', marginRight:'30px'}}>
							<div className="product-box">
								<div className="product-img text-center">
									<img src="assets/images/pro-5.png" alt="product image"/>
								</div>
								<div className="product-data">
									<h4><a href="product-view.html">Structure material</a></h4>
									<div className="product-varient">
										<div className="product-varient-inner">
											<label>Suppler:</label>
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
						</div>
						<div className="col-lg-3 col-md-3 col-sm-6 col-12 swiper-slide product-boxcol product-boxitem swiper-slide-next"
						 role ='group' aria-label='2 / 5 ' style={{width:'255px', marginRight:'30px'}}>
							<div className="product-box">
								<div className="product-img text-center">
									<img src="assets/images/pro-6.png" alt="product image"/>
								</div>
								<div className="product-data">
									<h4><a href="product-view.html">Structure material</a></h4>
									<div className="product-varient">
										<div className="product-varient-inner">
											<label>Suppler:</label>
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
						</div>
						<div className="col-lg-3 col-md-3 col-sm-6 col-12 swiper-slide product-boxcol product-boxitem"
						 role ='group' aria-label='3 /5 ' style={{width:'255px', marginRight:'30px'}}>
							<div className="product-box">
								<div className="product-img text-center">
									<img src="assets/images/pro-7.png" alt="product image"/>
								</div>
								<div className="product-data">
									<h4><a href="product-view.html">Structure material</a></h4>
									<div className="product-varient">
										<div className="product-varient-inner">
											<label>Suppler:</label>
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
						</div>
						<div className="col-lg-3 col-md-3 col-sm-6 col-12 swiper-slide product-boxcol product-boxitem"
						 role ='group' aria-label='4 /5 ' style={{width:'255px', marginRight:'30px'}}>
							<div className="product-box">
								<div className="product-img text-center">
									<img src="assets/images/pro-8.png" alt="product image"/>
								</div>
								<div className="product-data">
									<h4><a href="product-view.html">Structure material</a></h4>
									<div className="product-varient">
										<div className="product-varient-inner">
											<label>Suppler:</label>
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
						</div>
						<div className="col-lg-3 col-md-3 col-sm-6 col-12 swiper-slide product-boxcol product-boxitem"
						 role ='group' aria-label=' 5 /5 ' style={{width:'255px', marginRight:'30px'}}>
							<div className="product-box">
								<div className="product-img text-center">
									<img src="assets/images/pro-8.png" alt="product image"/>
								</div>
								<div className="product-data">
									<h4><a href="product-view.html">Structure material</a></h4>
									<div className="product-varient">
										<div className="product-varient-inner">
											<label>Suppler:</label>
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
						</div>
					</div>
					<div className="swiper-button-prev common-swipercontrol-btn"></div>
			   		<div className="swiper-button-next common-swipercontrol-btn"></div>
			   	</div>
			</div>
		</div>
		<div className="container comm-mob-sec">
			<div className="row">
				<div className="col-12">
					<div className="product-separator"></div>
				</div>
			</div>
		</div>
		<div className="mob-shoptabs">
			<div className="mob-shoptabs-inner comm-desk-sec">
				<ul className="nav nav-tabs" id="myTab" role="tablist">
				  <li className="nav-item">
				    <a className="nav-link active" id="mob_shopbycat-tab" data-toggle="tab" href="#mob_shopbycat" role="tab" aria-controls="mob_shopbycat" aria-selected="true">
				    	CONSTRUCTION MATERIALS STEP WISE
				    </a>
				  </li>
				  <li className="nav-item">
				    <a className="nav-link" id="mob_stepcons-tab" data-toggle="tab" href="#mob_stepcons" role="tab" aria-controls="mob_stepcons" aria-selected="false">
				    	CATEGORIES
				    </a>
				  </li>
				</ul>
			</div>
			<div className="tab-content" id="myTabContent">
				<div className="tab-pane fade show active" id="mob_shopbycat" role="tabpanel" aria-labelledby="mob_shopbycat-tab">
					<div className="shopbycat">
						<div className="container">
							<div className="row comm-mob-sec">
								<div className="col-12">
									<div className="common-main-title">
										<h2 className="text-center">Shop By Category</h2>
			 						</div>
								</div>
							</div>
							<div className="row">
								<div className="col-lg-6 col-md-6 col-sm-12 col-12 cm-col-100">
									<div className="home-catname">
										{/* <a href="Category-list"> */}
										<Link to='/Categorylist'>
											<div className="home-catimg">
												<img src="assets/images/cat-back-1.png" alt="category image" />
												<h4>MATRIAL</h4>
											</div>
										</Link>
										{/* </a> */}
			 						</div>
								</div>
								<div className="col-lg-6 col-md-6 col-sm-12 col-12 cm-col-100">
									<div className="home-catname">
									<Link to='/Categorylist'>
											<div className="home-catimg">
												<img src="assets/images/cat-back-2.png" alt="category image"/>
												<h4>TOOLS</h4>
											</div>
									</Link>
			 						</div>
								</div>
								<div className="col-lg-6 col-md-6 col-sm-12 col-12 cm-col-100">
									<div className="home-catname">
									<Link to='/Categorylist'>
											<div className="home-catimg">
												<img src="assets/images/cat-back-3.png" alt="category image"/>
												<h4>ASMENT</h4>
											</div>
									</Link>
			 						</div>
								</div>
								<div className="col-lg-6 col-md-6 col-sm-12 col-12 cm-col-100">
									<div className="home-catname">
									<Link to='/Categorylist'>
											<div className="home-catimg">
												<img src="assets/images/cat-back-4.png" alt="category image"/>
												<h4>WOOD</h4>
											</div>
									</Link>
			 						</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="tab-pane fade" id="mob_stepcons" role="tabpanel" aria-labelledby="mob_stepcons-tab">
					<div className="shopbycat stepwise-construction">
						<div className="container">
							<div className="row comm-mob-sec">
								<div className="col-12">
									<div className="common-main-title">
										<h2 className="text-center">Construction Materials <br/>Step wise</h2>
			 						</div>
								</div>
							</div>
							<div className="row">
								<div className="col-12">
									<div className="swc-boxflex">
										<div className="swc-boxflex-inner">
											<div className="swc-boxflex-img">
												<img src="assets/images/swc-1.png" alt="stepwise construction icon"/>
											</div>
											<h5>SITE PREPARATION</h5>
										</div>
										<div className="swc-boxflex-inner">
											<div className="swc-boxflex-img">
												<img src="assets/images/swc-2.png" alt="stepwise construction icon"/>
											</div>
											<h5>EXCAVATION <br/>& FOUNDATION</h5>
										</div>
										<div className="swc-boxflex-inner">
											<div className="swc-boxflex-img">
												<img src="assets/images/swc-3.png" alt="stepwise construction icon"/>
											</div>
											<h5>WATERPROOF <br/>& INSULATION</h5>
										</div>
										<div className="swc-boxflex-inner">
											<div className="swc-boxflex-img">
												<img src="assets/images/swc-4.png" alt="stepwise construction icon"/>
											</div>
											<h5>CONCRETE STRUCTURE</h5>
										</div>
										<div className="swc-boxflex-inner">
											<div className="swc-boxflex-img">
												<img src="assets/images/swc-5.png" alt="stepwise construction icon"/>
											</div>
											<h5>BLOCK <br/>& ACCESSORIES</h5>
										</div>
										<div className="swc-boxflex-inner comm-desk-sec">
											<div className="swc-boxflex-img">
												<img src="assets/images/swc-6.png" alt="stepwise construction icon"/>
											</div>
											<h5>REPAIR <br/>& SPECIALTIES</h5>
										</div>
										<div className="swc-boxflex-inner comm-desk-sec">
											<div className="swc-boxflex-img">
												<img src="assets/images/swc-7.png" alt="stepwise construction icon"/>
											</div>
											<h5>FINISHING WORKS</h5>
										</div>
										<div className="swc-boxflex-inner comm-desk-sec">
											<div className="swc-boxflex-img">
												<img src="assets/images/swc-8.png" alt="stepwise construction icon"/>
											</div>
											<h5>MISCELLANEOUS TOOLS</h5>
										</div>
										<div className="swc-boxflex-inner comm-desk-sec">
											<div className="swc-boxflex-img">
												<img src="assets/images/swc-9.png" alt="stepwise construction icon"/>
											</div>
											<h5>PLASTER <br/>& ACCESSORIES</h5>
										</div>
									</div>
								</div>					
							</div>
							<div className="row comm-mob-sec">
								<div className="col-12">
									<div className="swc-boxflex swc-boxflex-two">
										<div className="swc-boxflex-inner">
											<div className="swc-boxflex-img">
												<img src="assets/images/swc-6.png" alt="stepwise construction icon"/>
											</div>
											<h5>REPAIR <br/>& SPECIALTIES</h5>
										</div>
										<div className="swc-boxflex-inner">
											<div className="swc-boxflex-img">
												<img src="assets/images/swc-7.png" alt="stepwise construction icon"/>
											</div>
											<h5>FINISHING WORKS</h5>
										</div>
										<div className="swc-boxflex-inner">
											<div className="swc-boxflex-img">
												<img src="assets/images/swc-8.png" alt="stepwise construction icon"/>
											</div>
											<h5>MISCELLANEOUS TOOLS</h5>
										</div>
										<div className="swc-boxflex-inner">
											<div className="swc-boxflex-img">
												<img src="assets/images/swc-9.png" alt="stepwise construction icon"/>
											</div>
											<h5>PLASTER <br/>& ACCESSORIES</h5>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="container comm-mob-sec">
			<div className="row">
				<div className="col-12">
					<div className="product-separator"></div>
				</div>
			</div>
		</div>
		<div className="influencers product-slider comm-mob-sec">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="product-main-title common-main-title">
							<h2>Influencers</h2>
							<a href="#" className="view-moreLink">View all</a>
						</div>
					</div>
				</div>
				<div className="swiper product-common-swiper influencers-sliding">
					<div className="common-slick-slide swiper-wrapper">
						<div className="swiper-slide influencers-boxcol">
							<a href="influencers.html" className="influencers-link">
								<div className="influencers-img">
									<img src="assets/images/influencers-1.png" alt="influencers image"/>
								</div>
								<div className="influencers-name">
									<h4>Influencers</h4>
								</div>
							</a>
						</div>
						<div className="swiper-slide influencers-boxcol">
							<a href="influencers.html">
								<div className="influencers-img">
									<img src="assets/images/influencers-2.png" alt="influencers image"/>
								</div>
								<div className="influencers-name">
									<h4>Influencers</h4>
								</div>
							</a>
						</div>
						<div className="swiper-slide influencers-boxcol">
							<a href="influencers.html">
								<div className="influencers-img">
									<img src="assets/images/influencers-3.png" alt="influencers image"/>
								</div>
								<div className="influencers-name">
									<h4>Influencers</h4>
								</div>
							</a>
						</div>
						<div className="swiper-slide influencers-boxcol">
							<a href="influencers.html">
								<div className="influencers-img">
									<img src="assets/images/influencers-4.png" alt="influencers image"/>
								</div>
								<div className="influencers-name">
									<h4>Influencers</h4>
								</div>
							</a>
						</div>
						<div className="swiper-slide influencers-boxcol">
							<a href="influencers.html">
								<div className="influencers-img">
									<img src="assets/images/influencers-5.png" alt="influencers image"/>
								</div>
								<div className="influencers-name">
									<h4>Influencers</h4>
								</div>
							</a>
						</div>
						<div className="swiper-slide influencers-boxcol">
							<a href="influencers.html">
								<div className="influencers-img">
									<img src="assets/images/influencers-1.png" alt="influencers image"/>
								</div>
								<div className="influencers-name">
									<h4>Influencers</h4>
								</div>
							</a>
						</div>
						<div className="swiper-slide influencers-boxcol">
							<a href="influencers.html">
								<div className="influencers-img">
									<img src="assets/images/influencers-2.png" alt="influencers image"/>
								</div>
								<div className="influencers-name">
									<h4>Influencers</h4>
								</div>
							</a>
						</div>
						<div className="swiper-slide influencers-boxcol">
							<a href="influencers.html">
								<div className="influencers-img">
									<img src="assets/images/influencers-3.png" alt="influencers image"/>
								</div>
								<div className="influencers-name">
									<h4>Influencers</h4>
								</div>
							</a>
						</div>
					</div>
					<div className="swiper-button-prev common-swipercontrol-btn"></div>
			   		<div className="swiper-button-next common-swipercontrol-btn"></div>
				</div>
			</div>
		</div>
	</section>
	{/* <!-- end middle content -->

	<!-- start main footer --> */}
	<footer className="main-footer" id="contactus_sec">
		<div className="mf-top">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="mf-title common-main-title">
							<h2>Contact us</h2>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="mf-contactdata">
							<div className="mfc-flex">
								<div className="mfc-flexdata">
									<h3>office number</h3>
									<h4><a href="javascript:void(0)">6667388</a></h4>
								</div>
							</div>
							<div className="mfc-flex">
								<div className="mfc-flexdata">
									<h3>office number</h3>
									<h4><a href="javascript:void(0)">6667388</a></h4>
								</div>
							</div>
							<div className="mfc-flex">
								<div className="mfc-flexdata">
									<h3>office number</h3>
									<h4><a href="javascript:void(0)">6667388</a></h4>
								</div>
							</div>
							<div className="mfc-flex">
								<div className="mfc-flexdata">
									<h3>office number</h3>
									<h4><a href="javascript:void(0)">6667388</a></h4>
								</div>
							</div>
						</div>
						<div className="mfc-saperator">
							<div className="mfc-saperator-line"></div>
						</div>						
					</div>
				</div>
				<div className="row">
					<div className="col-lg-6 col-md-6 col-sm-12 col-12">
						<div className="mfc-form">
							<form>
								<div className="form-group">
									<input type="text" name="name" placeholder="Name" className="form-control"/>
								</div>
								<div className="form-group">
									<input type="text" name="phone" placeholder="Email or Phone number" className="form-control"/>
								</div>
								<div className="form-group">
									<textarea type="textarea" name="commnet" placeholder="Comment" className="form-control"/>
								</div>
								<div className="form-group mb-0 mfc-formsend-btn">
									<button type="button" className="btn">Send</button>
								</div>
                            </form>
                            
						</div>
					</div>
					<div className="col-lg-6 col-md-6 col-sm-12 col-12">
						<div className="mfc-map">
							<h3>STORE ADDRESS</h3>
							<p>Store address, Street, Buliding, Office 1012</p>
							<div className="mfc-mapinner">
								<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27814.41193999645!2d47.961267178803226!3d29.37610101465698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf9c83ce455983%3A0xc3ebaef5af09b90e!2sKuwait%20City%2C%20Kuwait!5e0!3m2!1sen!2sin!4v1684418108436!5m2!1sen!2sin"
								 style={{border:'0', allowFullScreen:'', loading:'lazy',referrerPolicy:'no-referrer-when-downgrade'}}>
								 
								 </iframe>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="mf-bottom">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-md-12 col-sm-12 col-12 align-self-center">
						<div className="mf-copyright">
							<p>© 2023 Tashead. All rights reserved.</p>
						</div>
					</div>
					<div className="col-lg-6 col-md-12 col-sm-12 col-12 align-self-center">
						<div className="mf-socials">
							<ul>
								<li><a href="javascript:void(0)"><img src="assets/images/twitter.png" alt="twitter icon"/></a></li>
								<li><a href="javascript:void(0)"><img src="assets/images/instagram.png" alt="twitter icon"/></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
	{/* <!-- end main footer -->

	<!-- scroll top icon --> */}
	<div className="scroll-top"> 
		<a className="scrollToTop" href="#"> 
		<i className="fa fa-angle-up" aria-hidden="true"></i></a> 
	</div>
	{/* <!-- end scroll top icon --> */}

	<div className="comm-msg-modal" id="missing_item_modal">
		<div className="modl-inner">
			<div className="modl-header">
				<h3>Alert</h3>
			</div>
			<div className="modl-body">
				<h4>Missing items</h4>
				<div className="modl-body-btns">
					<button type="button" className="btn" id="missing_item_popbtn">Ok</button>
				</div>
			</div>
		</div>
	</div>

	<div className="comm-msg-modal" id="missing_item_confmodal">
		<div className="modl-inner">
			<div className="modl-header">
				<h3>Alert</h3>
			</div>
			<div className="modl-body">
				<h4>Are you sure!</h4>
				<div className="modl-body-btns d-flex justify-content-between">
					<button type="button" className="btn" id="missing_item_confpopbtnY">Yes</button>
					<button type="button" className="btn" id="missing_item_confpopbtnN">No</button>
				</div>
			</div>
		</div>
	</div>
</div>

</div>

</>
  )
}

export default Home

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Slide.css';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
function Category() {

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
		{
			imgSrc: 'assets/images/cat-background.png',
			title: 'STRUCTURE MATERIAL',
		},
	];
	const [activeSlide, setActiveSlide] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
		}, 3000);

		return () => clearInterval(interval);
	}, []);


	return (
		<>

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
							<div className="slide">
								<img src="assets/images/banner.png" alt="Banner 1" />
								<div className="text-overlay">
									<h1>ALL YOU NEED TO START <br /> YOUR DREAM HOME</h1>
									<p>
										Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam<br />
										nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat<br />
										volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation<br />
										ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis<br />
										autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie<br />
										consequat, vel illum dolore eu feugiat
									</p>
									<button className='b'>Start Shopping</button>
								</div>
							</div>
							<div className="slide">
								<img src="assets/images/banner2.png" alt="Banner 2" />
								<div className="text-overlay">
									<h1>ALL YOU NEED TO START <br />YOUR DREAM HOME</h1>
									<p>
										Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam<br />
										nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat<br />
										volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation<br />
										ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis<br />
										autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie<br />
										consequat, vel illum dolore eu feugiat
									</p>
									<button className='b'>Start Shopping</button>
								</div>
							</div>
							<div className="slide">
								<img src="assets/images/banner.png" alt="Banner 3" />
								<div className="text-overlay">
									<h1>ALL YOU NEED TO START
										<br />YOUR DREAM HOME</h1>
									<p>
										Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam<br />
										nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam <br />
										volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation<br />
										ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis<br />
										autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie<br />
										consequat, vel illum dolore eu feugiat
									</p>
									<button className='b'>Start Shopping</button>
								</div>
							</div>
						</Carousel>
					</div>
				</section>

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
				<div className="best-seller product-slider catts-products">
					<div className="container">
						<div className="row comm-mob-sec">
							<div className="col-12">
								<div className="product-main-title common-main-title">
									<h2>Material</h2>
								</div>
							</div>
						</div>
						<div className="row category-products mob-catlistpro">
							<div className="col-lg-3 col-md-3 col-sm-6 col-12 product-boxitem">
								<div className="product-box">
									<div className="product-img text-center">
										<img src="assets/images/pro-1.png" alt="product image" />
									</div>
									<div className="product-data">
										<div className="ppd-flex comm-desk-sec mob-fav">
											<button type="button" className="btn add-favBtn" id="add_favBtn">
												<i className="fa fa-star-o" aria-hidden="true"></i>
											</button>
										</div>
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
										<div className="product-pricedata comm-mob-sec">
											<div className="ppd-flex">
												<Link to='/cart'>
													<button type="button" className="btn add-cartBtn" id="add_cartBtn">
														<img src="assets/images/add-cart.png" alt="add cart icon" />
													</button></Link>
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
										<div className="mob-addcart comm-desk-sec">
											<div className="product-pricedata">
												<div className="ppd-flex">
													<div className="pro-quantity">
														<div className="quantity">
															<button type="button" className="quantity-minus">-</button>
															<input type="number" id="quantity_count" className="input-text qty" step="1" min="0" max="99" name="qty-count" value="1" title="" size="4" placeholder="" inputmode="numeric" />
															<button type="button" className="quantity-plus">+</button>
														</div>
													</div>
													<div className="price-amount">
														<div className="price-amountinner">
															<span className="price-discount"><del>12.00</del> KD</span>
															<span>12.00 KD</span>
														</div>
													</div>
												</div>
											</div>
											<div className="pro-addcartbtn">
												<button type="button" className="btn pro-addcart-btn" id="pro_addcart_btn">Add to cart</button>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-3 col-sm-6 col-12 product-boxitem">
								<div className="product-box">
									<div className="product-img text-center">
										<img src="assets/images/pro-2.png" alt="product image" />
									</div>
									<div className="product-data">
										<div className="ppd-flex comm-desk-sec mob-fav">
											<button type="button" className="btn add-favBtn" id="add_favBtn">
												<i className="fa fa-star-o" aria-hidden="true"></i>
											</button>
										</div>
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
										<div className="product-pricedata comm-mob-sec">
											<div className="ppd-flex">
												<Link to='/cart'>
													<button type="button" className="btn add-cartBtn" id="add_cartBtn">
														<img src="assets/images/add-cart.png" alt="add cart icon" />
													</button></Link>
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
										<div className="mob-addcart comm-desk-sec">
											<div className="product-pricedata">
												<div className="ppd-flex">
													<div className="pro-quantity">
														<div className="quantity">
															<button type="button" className="quantity-minus">-</button>
															<input type="number" id="quantity_count" className="input-text qty" step="1" min="0" max="99" name="qty-count" value="1" title="" size="4" placeholder="" inputmode="numeric" />
															<button type="button" className="quantity-plus">+</button>
														</div>
													</div>
													<div className="price-amount">
														<div className="price-amountinner">
															<span className="price-discount"><del>12.00</del> KD</span>
															<span>12.00 KD</span>
														</div>
													</div>
												</div>
											</div>
											<div className="pro-addcartbtn">
												<button type="button" className="btn pro-addcart-btn" id="pro_addcart_btn">Add to cart</button>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-3 col-sm-6 col-12 product-boxitem">
								<div className="product-box">
									<div className="product-img text-center">
										<img src="assets/images/pro-3.png" alt="product image" />
									</div>
									<div className="product-data">
										<div className="ppd-flex comm-desk-sec mob-fav">
											<button type="button" className="btn add-favBtn" id="add_favBtn">
												<i className="fa fa-star-o" aria-hidden="true"></i>
											</button>
										</div>
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
										<div className="product-pricedata comm-mob-sec">
											<div className="ppd-flex">
												<Link to='/cart'>
													<button type="button" className="btn add-cartBtn" id="add_cartBtn">
														<img src="assets/images/add-cart.png" alt="add cart icon" />
													</button></Link>
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
										<div className="mob-addcart comm-desk-sec">
											<div className="product-pricedata">
												<div className="ppd-flex">
													<div className="pro-quantity">
														<div className="quantity">
															<button type="button" className="quantity-minus">-</button>
															<input type="number" id="quantity_count" className="input-text qty" step="1" min="0" max="99" name="qty-count" value="1" title="" size="4" placeholder="" inputmode="numeric" />
															<button type="button" className="quantity-plus">+</button>
														</div>
													</div>
													<div className="price-amount">
														<div className="price-amountinner">
															<span className="price-discount"><del>12.00</del> KD</span>
															<span>12.00 KD</span>
														</div>
													</div>
												</div>
											</div>
											<div className="pro-addcartbtn">
												<button type="button" className="btn pro-addcart-btn" id="pro_addcart_btn">Add to cart</button>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-3 col-sm-6 col-12 product-boxitem">
								<div className="product-box">
									<div className="product-img text-center">
										<img src="assets/images/pro-4.png" alt="product image" />
									</div>
									<div className="product-data">
										<div className="ppd-flex comm-desk-sec mob-fav">
											<button type="button" className="btn add-favBtn" id="add_favBtn">
												<i className="fa fa-star-o" aria-hidden="true"></i>
											</button>
										</div>
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
										<div className="product-pricedata comm-mob-sec">
											<div className="ppd-flex">
												<Link to='/cart'>
													<button type="button" className="btn add-cartBtn" id="add_cartBtn">
														<img src="assets/images/add-cart.png" alt="add cart icon" />
													</button></Link>
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
										<div className="mob-addcart comm-desk-sec">
											<div className="product-pricedata">
												<div className="ppd-flex">
													<div className="pro-quantity">
														<div className="quantity">
															<button type="button" className="quantity-minus">-</button>
															<input type="number" id="quantity_count" className="input-text qty" step="1" min="0" max="99" name="qty-count" value="1" title="" size="4" placeholder="" inputmode="numeric" />
															<button type="button" className="quantity-plus">+</button>
														</div>
													</div>
													<div className="price-amount">
														<div className="price-amountinner">
															<span className="price-discount"><del>12.00</del> KD</span>
															<span>12.00 KD</span>
														</div>
													</div>
												</div>
											</div>
											<div className="pro-addcartbtn">
												<Link to='/cart'>
													<button type="button" className="btn add-cartBtn" id="add_cartBtn">
														<img src="assets/images/add-cart.png" alt="add cart icon" />
													</button></Link>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-3 col-sm-6 col-12 product-boxitem">
								<div className="product-box">
									<div className="product-img text-center">
										<img src="assets/images/pro-5.png" alt="product image" />
									</div>
									<div className="product-data">
										<div className="ppd-flex comm-desk-sec mob-fav">
											<button type="button" className="btn add-favBtn" id="add_favBtn">
												<i className="fa fa-star-o" aria-hidden="true"></i>
											</button>
										</div>
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
										<div className="product-pricedata comm-mob-sec">
											<div className="ppd-flex">
												<Link to='/cart'>
													<button type="button" className="btn add-cartBtn" id="add_cartBtn">
														<img src="assets/images/add-cart.png" alt="add cart icon" />
													</button></Link>
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
										<div className="mob-addcart comm-desk-sec">
											<div className="product-pricedata">
												<div className="ppd-flex">
													<div className="pro-quantity">
														<div className="quantity">
															<button type="button" className="quantity-minus">-</button>
															<input type="number" id="quantity_count" className="input-text qty" step="1" min="0" max="99" name="qty-count" value="1" title="" size="4" placeholder="" inputmode="numeric" />
															<button type="button" className="quantity-plus">+</button>
														</div>
													</div>
													<div className="price-amount">
														<div className="price-amountinner">
															<span className="price-discount"><del>12.00</del> KD</span>
															<span>12.00 KD</span>
														</div>
													</div>
												</div>
											</div>
											<div className="pro-addcartbtn">
												<Link to='/Cart'>
													<button type="button" className="btn add-cartBtn" id="add_cartBtn">
														<img src="assets/images/add-cart.png" alt="add cart icon" />
													</button></Link>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-3 col-sm-6 col-12 product-boxitem">
								<div className="product-box">
									<div className="product-img text-center">
										<img src="assets/images/pro-6.png" alt="product image" />
									</div>
									<div className="product-data">
										<div className="ppd-flex comm-desk-sec mob-fav">
											<button type="button" className="btn add-favBtn" id="add_favBtn">
												<i className="fa fa-star-o" aria-hidden="true"></i>
											</button>
										</div>
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
										<div className="product-pricedata comm-mob-sec">
											<div className="ppd-flex">
												<Link to='/cart'>
													<button type="button" className="btn add-cartBtn" id="add_cartBtn">
														<img src="assets/images/add-cart.png" alt="add cart icon" />
													</button></Link>
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
										<div className="mob-addcart comm-desk-sec">
											<div className="product-pricedata">
												<div className="ppd-flex">
													<div className="pro-quantity">
														<div className="quantity">
															<button type="button" className="quantity-minus">-</button>
															<input type="number" id="quantity_count" className="input-text qty" step="1" min="0" max="99" name="qty-count" value="1" title="" size="4" placeholder="" inputmode="numeric" />
															<button type="button" className="quantity-plus">+</button>
														</div>
													</div>
													<div className="price-amount">
														<div className="price-amountinner">
															<span className="price-discount"><del>12.00</del> KD</span>
															<span>12.00 KD</span>
														</div>
													</div>
												</div>
											</div>
											<div className="pro-addcartbtn">
												<button type="button" className="btn pro-addcart-btn" id="pro_addcart_btn">Add to cart</button>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-3 col-sm-6 col-12 product-boxitem">
								<div className="product-box">
									<div className="product-img text-center">
										<img src="assets/images/pro-7.png" alt="product image" />
									</div>
									<div className="product-data">
										<div className="ppd-flex comm-desk-sec mob-fav">
											<button type="button" className="btn add-favBtn" id="add_favBtn">
												<i className="fa fa-star-o" aria-hidden="true"></i>
											</button>
										</div>
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
										<div className="product-pricedata comm-mob-sec">
											<div className="ppd-flex">
												<Link to='/cart'>
													<button type="button" className="btn add-cartBtn" id="add_cartBtn">
														<img src="assets/images/add-cart.png" alt="add cart icon" />
													</button></Link>
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
										<div className="mob-addcart comm-desk-sec">
											<div className="product-pricedata">
												<div className="ppd-flex">
													<div className="pro-quantity">
														<div className="quantity">
															<button type="button" className="quantity-minus">-</button>
															<input type="number" id="quantity_count" className="input-text qty" step="1" min="0" max="99" name="qty-count" value="1" title="" size="4" placeholder="" inputmode="numeric" />
															<button type="button" className="quantity-plus">+</button>
														</div>
													</div>
													<div className="price-amount">
														<div className="price-amountinner">
															<span className="price-discount"><del>12.00</del> KD</span>
															<span>12.00 KD</span>
														</div>
													</div>
												</div>
											</div>
											<div className="pro-addcartbtn">
												<button type="button" className="btn pro-addcart-btn" id="pro_addcart_btn">Add to cart</button>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-3 col-sm-6 col-12 product-boxitem">
								<div className="product-box">
									<div className="product-img text-center">
										<img src="assets/images/pro-8.png" alt="product image" />
									</div>
									<div className="product-data">
										<div className="ppd-flex comm-desk-sec mob-fav">
											<button type="button" className="btn add-favBtn" id="add_favBtn">
												<i className="fa fa-star-o" aria-hidden="true"></i>
											</button>
										</div>
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
										<div className="product-pricedata comm-mob-sec">
											<div className="ppd-flex">
												<Link to='/cart'>
													<button type="button" className="btn add-cartBtn" id="add_cartBtn">
														<img src="assets/images/add-cart.png" alt="add cart icon" />
													</button></Link>
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
										<div className="mob-addcart comm-desk-sec">
											<div className="product-pricedata">
												<div className="ppd-flex">
													<div className="pro-quantity">
														<div className="quantity">
															<button type="button" className="quantity-minus">-</button>
															<input type="number" id="quantity_count" className="input-text qty" step="1" min="0" max="99" name="qty-count" value="1" title="" size="4" placeholder="" inputmode="numeric" />
															<button type="button" className="quantity-plus">+</button>
														</div>
													</div>
													<div className="price-amount">
														<div className="price-amountinner">
															<span className="price-discount"><del>12.00</del> KD</span>
															<span>12.00 KD</span>
														</div>
													</div>
												</div>
											</div>
											<div className="pro-addcartbtn">
												<button type="button" className="btn pro-addcart-btn" id="pro_addcart_btn">Add to cart</button>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-3 col-sm-6 col-12 product-boxitem">
								<div className="product-box">
									<div className="product-img text-center">
										<img src="assets/images/pro-9.png" alt="product image" />
									</div>
									<div className="product-data">
										<div className="ppd-flex comm-desk-sec mob-fav">
											<button type="button" className="btn add-favBtn" id="add_favBtn">
												<i className="fa fa-star-o" aria-hidden="true"></i>
											</button>
										</div>
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
										<div className="product-pricedata comm-mob-sec">
											<div className="ppd-flex">
												<Link to='/cart'>
													<button type="button" className="btn add-cartBtn" id="add_cartBtn">
														<img src="assets/images/add-cart.png" alt="add cart icon" />
													</button></Link>
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
										<div className="mob-addcart comm-desk-sec">
											<div className="product-pricedata">
												<div className="ppd-flex">
													<div className="pro-quantity">
														<div className="quantity">
															<button type="button" className="quantity-minus">-</button>
															<input type="number" id="quantity_count" className="input-text qty" step="1" min="0" max="99" name="qty-count" value="1" title="" size="4" placeholder="" inputmode="numeric" />
															<button type="button" className="quantity-plus">+</button>
														</div>
													</div>
													<div className="price-amount">
														<div className="price-amountinner">
															<span className="price-discount"><del>12.00</del> KD</span>
															<span>12.00 KD</span>
														</div>
													</div>
												</div>
											</div>
											<div className="pro-addcartbtn">
												<button type="button" className="btn pro-addcart-btn" id="pro_addcart_btn">Add to cart</button>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-3 col-sm-6 col-12 product-boxitem">
								<div className="product-box">
									<div className="product-img text-center">
										<img src="assets/images/pro-10.png" alt="product image" />
									</div>
									<div className="product-data">
										<div className="ppd-flex comm-desk-sec mob-fav">
											<button type="button" className="btn add-favBtn" id="add_favBtn">
												<i className="fa fa-star-o" aria-hidden="true"></i>
											</button>
										</div>
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
										<div className="product-pricedata comm-mob-sec">
											<div className="ppd-flex">
												<Link to='/cart'>
													<button type="button" className="btn add-cartBtn" id="add_cartBtn">
														<img src="assets/images/add-cart.png" alt="add cart icon" />
													</button></Link>
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
										<div className="mob-addcart comm-desk-sec">
											<div className="product-pricedata">
												<div className="ppd-flex">
													<div className="pro-quantity">
														<div className="quantity">
															<button type="button" className="quantity-minus">-</button>
															<input type="number" id="quantity_count" className="input-text qty" step="1" min="0" max="99" name="qty-count" value="1" title="" size="4" placeholder="" inputmode="numeric" />
															<button type="button" className="quantity-plus">+</button>
														</div>
													</div>
													<div className="price-amount">
														<div className="price-amountinner">
															<span className="price-discount"><del>12.00</del> KD</span>
															<span>12.00 KD</span>
														</div>
													</div>
												</div>
											</div>
											<div className="pro-addcartbtn">
												<button type="button" className="btn pro-addcart-btn" id="pro_addcart_btn">Add to cart</button>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-3 col-sm-6 col-12 product-boxitem">
								<div className="product-box">
									<div className="product-img text-center">
										<img src="assets/images/pro-11.png" alt="product image" />
									</div>
									<div className="product-data">
										<div className="ppd-flex comm-desk-sec mob-fav">
											<button type="button" className="btn add-favBtn" id="add_favBtn">
												<i className="fa fa-star-o" aria-hidden="true"></i>
											</button>
										</div>
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
										<div className="product-pricedata comm-mob-sec">
											<div className="ppd-flex">
												<Link to='/cart'>
													<button type="button" className="btn add-cartBtn" id="add_cartBtn">
														<img src="assets/images/add-cart.png" alt="add cart icon" />
													</button></Link>
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
										<div className="mob-addcart comm-desk-sec">
											<div className="product-pricedata">
												<div className="ppd-flex">
													<div className="pro-quantity">
														<div className="quantity">
															<button type="button" className="quantity-minus">-</button>
															<input type="number" id="quantity_count" className="input-text qty" step="1" min="0" max="99" name="qty-count" value="1" title="" size="4" placeholder="" inputmode="numeric" />
															<button type="button" className="quantity-plus">+</button>
														</div>
													</div>
													<div className="price-amount">
														<div className="price-amountinner">
															<span className="price-discount"><del>12.00</del> KD</span>
															<span>12.00 KD</span>
														</div>
													</div>
												</div>
											</div>
											<div className="pro-addcartbtn">
												<button type="button" className="btn pro-addcart-btn" id="pro_addcart_btn">Add to cart</button>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-3 col-sm-6 col-12 product-boxitem">
								<div className="product-box">
									<div className="product-img text-center">
										<img src="assets/images/pro-12.png" alt="product image" />
									</div>
									<div className="product-data">
										<div className="ppd-flex comm-desk-sec mob-fav">
											<button type="button" className="btn add-favBtn" id="add_favBtn">
												<i className="fa fa-star-o" aria-hidden="true"></i>
											</button>
										</div>
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
										<div className="product-pricedata comm-mob-sec">
											<div className="ppd-flex">
												<Link to='/cart'>
													<button type="button" className="btn add-cartBtn" id="add_cartBtn">
														<img src="assets/images/add-cart.png" alt="add cart icon" />
													</button></Link>
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
										<div className="mob-addcart comm-desk-sec">
											<div className="product-pricedata">
												<div className="ppd-flex">
													<div className="pro-quantity">
														<div className="quantity">
															<button type="button" className="quantity-minus">-</button>
															<input type="number" id="quantity_count" className="input-text qty" step="1" min="0" max="99" name="qty-count" value="1" title="" size="4" placeholder="" inputmode="numeric" />
															<button type="button" className="quantity-plus">+</button>
														</div>
													</div>
													<div className="price-amount">
														<div className="price-amountinner">
															<span className="price-discount"><del>12.00</del> KD</span>
															<span>12.00 KD</span>
														</div>
													</div>
												</div>
											</div>
											<div className="pro-addcartbtn">
												<button type="button" className="btn pro-addcart-btn" id="pro_addcart_btn">Add to cart</button>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-3 col-sm-6 col-12 product-boxitem">
								<div className="product-box">
									<div className="product-img text-center">
										<img src="assets/images/pro-13.png" alt="product image" />
									</div>
									<div className="product-data">
										<div className="ppd-flex comm-desk-sec mob-fav">
											<button type="button" className="btn add-favBtn" id="add_favBtn">
												<i className="fa fa-star-o" aria-hidden="true"></i>
											</button>
										</div>
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
										<div className="product-pricedata comm-mob-sec">
											<div className="ppd-flex">
												<Link to='/cart'>
													<button type="button" className="btn add-cartBtn" id="add_cartBtn">
														<img src="assets/images/add-cart.png" alt="add cart icon" />
													</button></Link>
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
										<div className="mob-addcart comm-desk-sec">
											<div className="product-pricedata">
												<div className="ppd-flex">
													<div className="pro-quantity">
														<div className="quantity">
															<button type="button" className="quantity-minus">-</button>
															<input type="number" id="quantity_count" className="input-text qty" step="1" min="0" max="99" name="qty-count" value="1" title="" size="4" placeholder="" inputmode="numeric" />
															<button type="button" className="quantity-plus">+</button>
														</div>
													</div>
													<div className="price-amount">
														<div className="price-amountinner">
															<span className="price-discount"><del>12.00</del> KD</span>
															<span>12.00 KD</span>
														</div>
													</div>
												</div>
											</div>
											<div className="pro-addcartbtn">
												<button type="button" className="btn pro-addcart-btn" id="pro_addcart_btn">Add to cart</button>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-3 col-sm-6 col-12 product-boxitem">
								<div className="product-box">
									<div className="product-img text-center">
										<img src="assets/images/pro-14.png" alt="product image" />
									</div>
									<div className="product-data">
										<div className="ppd-flex comm-desk-sec mob-fav">
											<button type="button" className="btn add-favBtn" id="add_favBtn">
												<i className="fa fa-star-o" aria-hidden="true"></i>
											</button>
										</div>
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
										<div className="product-pricedata comm-mob-sec">
											<div className="ppd-flex">
												<Link to='/cart'>
													<button type="button" className="btn add-cartBtn" id="add_cartBtn">
														<img src="assets/images/add-cart.png" alt="add cart icon" />
													</button></Link>
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
										<div className="mob-addcart comm-desk-sec">
											<div className="product-pricedata">
												<div className="ppd-flex">
													<div className="pro-quantity">
														<div className="quantity">
															<button type="button" className="quantity-minus">-</button>
															<input type="number" id="quantity_count" className="input-text qty" step="1" min="0" max="99" name="qty-count" value="1" title="" size="4" placeholder="" inputmode="numeric" />
															<button type="button" className="quantity-plus">+</button>
														</div>
													</div>
													<div className="price-amount">
														<div className="price-amountinner">
															<span className="price-discount"><del>12.00</del> KD</span>
															<span>12.00 KD</span>
														</div>
													</div>
												</div>
											</div>
											<div className="pro-addcartbtn">
												<button type="button" className="btn pro-addcart-btn" id="pro_addcart_btn">Add to cart</button>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-3 col-sm-6 col-12 product-boxitem">
								<div className="product-box">
									<div className="product-img text-center">
										<img src="assets/images/pro-15.png" alt="product image" />
									</div>
									<div className="product-data">
										<div className="ppd-flex comm-desk-sec mob-fav">
											<button type="button" className="btn add-favBtn" id="add_favBtn">
												<i className="fa fa-star-o" aria-hidden="true"></i>
											</button>
										</div>
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
										<div className="product-pricedata comm-mob-sec">
											<div className="ppd-flex">
												<Link to='/cart'>
													<button type="button" className="btn add-cartBtn" id="add_cartBtn">
														<img src="assets/images/add-cart.png" alt="add cart icon" />
													</button></Link>
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
										<div className="mob-addcart comm-desk-sec">
											<div className="product-pricedata">
												<div className="ppd-flex">
													<div className="pro-quantity">
														<div className="quantity">
															<button type="button" className="quantity-minus">-</button>
															<input type="number" id="quantity_count" className="input-text qty" step="1" min="0" max="99" name="qty-count" value="1" title="" size="4" placeholder="" inputmode="numeric" />
															<button type="button" className="quantity-plus">+</button>
														</div>
													</div>
													<div className="price-amount">
														<div className="price-amountinner">
															<span className="price-discount"><del>12.00</del> KD</span>
															<span>12.00 KD</span>
														</div>
													</div>
												</div>
											</div>
											<div className="pro-addcartbtn">
												<button type="button" className="btn pro-addcart-btn" id="pro_addcart_btn">Add to cart</button>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-3 col-sm-6 col-12 product-boxitem">
								<div className="product-box">
									<div className="product-img text-center">
										<img src="assets/images/pro-16.png" alt="product image" />
									</div>
									<div className="product-data">
										<div className="ppd-flex comm-desk-sec mob-fav">
											<button type="button" className="btn add-favBtn" id="add_favBtn">
												<i className="fa fa-star-o" aria-hidden="true"></i>
											</button>
										</div>
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
										<div className="product-pricedata comm-mob-sec">
											<div className="ppd-flex">
												<Link to='/cart'>
													<button type="button" className="btn add-cartBtn" id="add_cartBtn">
														<img src="assets/images/add-cart.png" alt="add cart icon" />
													</button></Link>
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
										<div className="mob-addcart comm-desk-sec">
											<div className="product-pricedata">
												<div className="ppd-flex">
													<div className="pro-quantity">
														<div className="quantity">
															<button type="button" className="quantity-minus">-</button>
															<input type="number" id="quantity_count" className="input-text qty" step="1" min="0" max="99" name="qty-count" value="1" title="" size="4" placeholder="" inputmode="numeric" />
															<button type="button" className="quantity-plus">+</button>
														</div>
													</div>
													<div className="price-amount">
														<div className="price-amountinner">
															<span className="price-discount"><del>12.00</del> KD</span>
															<span>12.00 KD</span>
														</div>
													</div>
												</div>
											</div>
											<div className="pro-addcartbtn">
												<button type="button" className="btn pro-addcart-btn" id="pro_addcart_btn">Add to cart</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default Category

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Slide.css';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Card from './Product/Card';
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

							<Card productImage='assets/images/pro-1.png' productName='Product 1'
								productlabel='Supplier' productp='Hempel' weight='Weight' sp='1x40 ML'
								l='Type of Unit' para='Piece' iconimage='assets/images/add-cart.png'
								star='fa fa-star-o' del='20.00' ori='KD' final='12.00' />


							<Card productImage='assets/images/pro-2.png' productName='Product 1'
								productlabel='Supplier' productp='Hempel' weight='Weight' sp='1x40 ML'
								l='Type of Unit' para='Piece' iconimage='assets/images/add-cart.png'
								star='fa fa-star-o' del='20.00' ori='KD' final='12.00' />

							<Card productImage='assets/images/pro-3.png' productName='Product 1'
								productlabel='Supplier' productp='Hempel' weight='Weight' sp='1x40 ML'
								l='Type of Unit' para='Piece' iconimage='assets/images/add-cart.png'
								star='fa fa-star-o' del='20.00' ori='KD' final='12.00' />


							<Card productImage='assets/images/pro-4.png' productName='Product 1'
								productlabel='Supplier' productp='Hempel' weight='Weight' sp='1x40 ML'
								l='Type of Unit' para='Piece' iconimage='assets/images/add-cart.png'
								star='fa fa-star-o' del='20.00' ori='KD' final='12.00' />


						</div>
						<div className="row category-products mob-catlistpro">
							<Card productImage='assets/images/pro-5.png' productName='Product 1'
								productlabel='Supplier' productp='Hempel' weight='Weight' sp='1x40 ML'
								l='Type of Unit' para='Piece' iconimage='assets/images/add-cart.png'
								star='fa fa-star-o' del='20.00' ori='KD' final='12.00' />


							<Card productImage='assets/images/pro-6.png' productName='Product 1'
								productlabel='Supplier' productp='Hempel' weight='Weight' sp='1x40 ML'
								l='Type of Unit' para='Piece' iconimage='assets/images/add-cart.png'
								star='fa fa-star-o' del='20.00' ori='KD' final='12.00' />

							<Card productImage='assets/images/pro-7.png' productName='Product 1'
								productlabel='Supplier' productp='Hempel' weight='Weight' sp='1x40 ML'
								l='Type of Unit' para='Piece' iconimage='assets/images/add-cart.png'
								star='fa fa-star-o' del='20.00' ori='KD' final='12.00' />

							<Card productImage='assets/images/pro-8.png' productName='Product 1'
								productlabel='Supplier' productp='Hempel' weight='Weight' sp='1x40 ML'
								l='Type of Unit' para='Piece' iconimage='assets/images/add-cart.png'
								star='fa fa-star-o' del='20.00' ori='KD' final='12.00' />

						</div>

						<div className="row category-products mob-catlistpro">
							<Card productImage='assets/images/pro-9.png' productName='Product 1'
								productlabel='Supplier' productp='Hempel' weight='Weight' sp='1x40 ML'
								l='Type of Unit' para='Piece' iconimage='assets/images/add-cart.png'
								star='fa fa-star-o' del='20.00' ori='KD' final='12.00' />

							<Card productImage='assets/images/pro-10.png' productName='Product 1'
								productlabel='Supplier' productp='Hempel' weight='Weight' sp='1x40 ML'
								l='Type of Unit' para='Piece' iconimage='assets/images/add-cart.png'
								star='fa fa-star-o' del='20.00' ori='KD' final='12.00' />

							<Card productImage='assets/images/pro-11.png' productName='Product 1'
								productlabel='Supplier' productp='Hempel' weight='Weight' sp='1x40 ML'
								l='Type of Unit' para='Piece' iconimage='assets/images/add-cart.png'
								star='fa fa-star-o' del='20.00' ori='KD' final='12.00' />

							<Card productImage='assets/images/pro-12.png' productName='Product 1'
								productlabel='Supplier' productp='Hempel' weight='Weight' sp='1x40 ML'
								l='Type of Unit' para='Piece' iconimage='assets/images/add-cart.png'
								star='fa fa-star-o' del='20.00' ori='KD' final='12.00' />

						</div>
						<div className="row category-products mob-catlistpro">
							<Card productImage='assets/images/pro-13.png' productName='Product 1'
								productlabel='Supplier' productp='Hempel' weight='Weight' sp='1x40 ML'
								l='Type of Unit' para='Piece' iconimage='assets/images/add-cart.png'
								star='fa fa-star-o' del='20.00' ori='KD' final='12.00' />

							<Card productImage='assets/images/pro-14.png' productName='Product 1'
								productlabel='Supplier' productp='Hempel' weight='Weight' sp='1x40 ML'
								l='Type of Unit' para='Piece' iconimage='assets/images/add-cart.png'
								star='fa fa-star-o' del='20.00' ori='KD' final='12.00' />

							<Card productImage='assets/images/pro-15.png' productName='Product 1'
								productlabel='Supplier' productp='Hempel' weight='Weight' sp='1x40 ML'
								l='Type of Unit' para='Piece' iconimage='assets/images/add-cart.png'
								star='fa fa-star-o' del='20.00' ori='KD' final='12.00' />

							<Card productImage='assets/images/pro-16.png' productName='Product 1'
								productlabel='Supplier' productp='Hempel' weight='Weight' sp='1x40 ML'
								l='Type of Unit' para='Piece' iconimage='assets/images/add-cart.png'
								star='fa fa-star-o' del='20.00' ori='KD' final='12.00' />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default Category
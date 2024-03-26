import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Product/Card'
function Influencers() {
	return (
		<>
			<div className="wrapper">
				<section className="middle-content">
					<div className="influencers-topbanner">
						<div className="container-fluid p-0">
							<div className="row">
								<div className="col-12">
									<div className="banner influencers-banner">
										<div className="banner-inner">
											<div className="banner-item">
												<div className="banner-image">
													<img src="assets/images/influencers-banner.png" alt="banner" />
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="comm-mob-sec">
						<div className="best-seller product-slider">
							<div className="container">
								<div className="row">
									<div className="col-12">
										<div className="product-main-title common-main-title">
											<h2>Tools</h2>
											<a href="#" className="view-moreLink">View all</a>
										</div>
									</div>
								</div>
								<div className="swiper product-sliding product-common-swiper">
									<div className="row common-slick-slide swiper-wrapper">

										<Card productImage='assets/images/pro-1.png' productName='Product 1'
											productlabel='Supplier' productp='Hempel' weight='Weight' sp='1x40 ML'
											l='Type of Unit' para='Piece' iconimage='assets/images/add-cart.png'
											star='fa fa-star-o' del='20.00' ori='KD' final='12.00' />

										<Card productImage='assets/images/pro-2.png' productName='Product 2'
											productlabel='Supplier' productp='Hempel' weight='Weight' sp='1x40 ML'
											l='Type of Unit' para='Piece' iconimage='assets/images/add-cart.png'
											star='fa fa-star-o' del='20.00' ori='KD' final='12.00' />

										<Card productImage='assets/images/pro-3.png' productName=' Product 3'
											productlabel='Supplier' productp='Hempel' weight='Weight' sp='1x40 ML'
											l='Type of Unit' para='Piece' iconimage='assets/images/add-cart.png'
											star='fa fa-star-o' del='20.00' ori='KD' final='12.00' />

										<Card productImage='assets/images/pro-4.png' productName=' Product 4'
											productlabel='Supplier' productp='Hempel' weight='Weight' sp='1x40 ML'
											l='Type of Unit' para='Piece' iconimage='assets/images/add-cart.png'
											star='fa fa-star-o' del='20.00' ori='KD' final='12.00' />


									</div>
									<div className="swiper-button-prev common-swipercontrol-btn"></div>
									<div className="swiper-button-next common-swipercontrol-btn"></div>
								</div>
							</div>
						</div>
						<div className="container">
							<div className="row">
								<div className="col-12">
									<div className="product-separator"></div>
								</div>
							</div>
						</div>
						<div className="new-product product-slider">
							<div className="container">
								<div className="row">
									<div className="col-12">
										<div className="product-main-title common-main-title">
											<h2>Stuff</h2>
											<a href="#" className="view-moreLink">View all</a>
										</div>
									</div>
								</div>
								<div className="swiper product-sliding product-common-swiper">
									<div className="row common-slick-slide swiper-wrapper">

										<Card productImage='assets/images/pro-5.png' productName='Stuff 1'
											productlabel='Supplier' productp='Hempel' weight='Weight' sp='1x40 ML'
											l='Type of Unit' para='Piece' iconimage='assets/images/add-cart.png'
											star='fa fa-star-o' del='20.00' ori='KD' final='12.00' />


										<Card productImage='assets/images/pro-6.png' productName='Stuff 2'
											productlabel='Supplier' productp='Hempel' weight='Weight' sp='1x40 ML'
											l='Type of Unit' para='Piece' iconimage='assets/images/add-cart.png'
											star='fa fa-star-o' del='20.00' ori='KD' final='12.00' />

										<Card productImage='assets/images/pro-7.png' productName='Stuff 3'
											productlabel='Supplier' productp='Hempel' weight='Weight' sp='1x40 ML'
											l='Type of Unit' para='Piece' iconimage='assets/images/add-cart.png'
											star='fa fa-star-o' del='20.00' ori='KD' final='12.00' />

										<Card productImage='assets/images/pro-8.png' productName='Stuff 4'
											productlabel='Supplier' productp='Hempel' weight='Weight' sp='1x40 ML'
											l='Type of Unit' para='Piece' iconimage='assets/images/add-cart.png'
											star='fa fa-star-o' del='20.00' ori='KD' final='12.00' />


										<Card productImage='assets/images/pro-9.png' productName='Stuff 5'
											productlabel='Supplier' productp='Hempel' weight='Weight' sp='1x40 ML'
											l='Type of Unit' para='Piece' iconimage='assets/images/add-cart.png'
											star='fa fa-star-o' del='20.00' ori='KD' final='12.00' />

									</div>
									<div className="swiper-button-prev common-swipercontrol-btn"></div>
									<div className="swiper-button-next common-swipercontrol-btn"></div>
								</div>
							</div>
						</div>
						<div className="container">
							<div className="row">
								<div className="col-12">
									<div className="product-separator"></div>
								</div>
							</div>
						</div>
						<div className="best-seller product-slider">
							<div className="container">
								<div className="row">
									<div className="col-12">
										<div className="product-main-title common-main-title">
											<h2>Bags</h2>
											<a href="#" className="view-moreLink">View all</a>
										</div>
									</div>
								</div>
								<div className="swiper product-sliding product-common-swiper">
									<div className="row common-slick-slide swiper-wrapper">


										<Card productImage='assets/images/pro-1.png' productName='BAG 1'
											productlabel='Supplier' productp='Hempel' weight='Weight' sp='1x40 ML'
											l='Type of Unit' para='Piece' iconimage='assets/images/add-cart.png'
											star='fa fa-star-o' del='20.00' ori='KD' final='12.00' />

										<Card productImage='assets/images/pro-2.png' productName='BAG 2'
											productlabel='Supplier' productp='Hempel' weight='Weight' sp='1x40 ML'
											l='Type of Unit' para='Piece' iconimage='assets/images/add-cart.png'
											star='fa fa-star-o' del='20.00' ori='KD' final='12.00' />


										<Card productImage='assets/images/pro-3.png' productName='BAG 3'
											productlabel='Supplier' productp='Hempel' weight='Weight' sp='1x40 ML'
											l='Type of Unit' para='Piece' iconimage='assets/images/add-cart.png'
											star='fa fa-star-o' del='20.00' ori='KD' final='12.00' />

										<Card productImage='assets/images/pro-4.png' productName='BAG 4'
											productlabel='Supplier' productp='Hempel' weight='Weight' sp='1x40 ML'
											l='Type of Unit' para='Piece' iconimage='assets/images/add-cart.png'
											star='fa fa-star-o' del='20.00' ori='KD' final='12.00' />

										<Card productImage='assets/images/pro-5.png' productName='BAG 5'
											productlabel='Supplier' productp='Hempel' weight='Weight' sp='1x40 ML'
											l='Type of Unit' para='Piece' iconimage='assets/images/add-cart.png'
											star='fa fa-star-o' del='20.00' ori='KD' final='12.00' />
									</div>
									<div className="swiper-button-prev common-swipercontrol-btn"></div>
									<div className="swiper-button-next common-swipercontrol-btn"></div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	)
}
export default Influencers
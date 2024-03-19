import React from 'react'

function Cart() {
  return (
    <>
<div className="wrapper">
<section className="middle-content">
		<div className="cs-breadcrumb comm-mob-sec">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<ul>
							<li><a href="index.html">Home</a></li>
							<li><a href="category.html">Product</a></li>
							<li>Cart</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div className="product-view cart-view">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="cart-viewedit">
							<a href="javascript:void(0)" className="cart-viewedit-link">Edit</a>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="proview-top">
							<div className="proview-flex cpf-flex">
								<div className="proview-left">
									<div className="cart-viewimg">
										 <a href="javascript:void(0)">
								             <img src="assets/images/pro-1.png" alt="product image"/>
								         </a>
								     </div>
								     <button type="button" className="pro-delete-btn btn" id="pro_delete_btn">
								     	<img src="assets/images/close-icon.png" alt="delete icon"/>
								     </button>
								</div>
								<div className="proview-right">
									<div className="product-data">
										<h4><a href="product-view.html" tabindex="0">Structure material</a></h4>
										<div className="product-varient mb-0">
											<div className="product-varient-inner">
												<label>Suppler:</label>
												<div className="pvi-flex">
													<p>Hempel</p>
												</div>
											</div>
											<div className="cartv-flex">
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
												<div className="product-pricedata">
													<div className="ppd-flex">
														<div className="price-amount">
															<div className="price-amountinner">
																<span className="price-discount"><del>12.00</del> KD</span>
																<span>12.00 KD</span>
															</div>
														</div>
														<div className="pro-quantity">
															<div className="quantity">
																<button type="button" className="quantity-minus">-</button>	
																	<input type="number" id="quantity_count" className="input-text qty" step="1" min="0" max="99" name="qty-count" value="1" title="" size="4" placeholder="" inputmode="numeric"/>
																<button type="button" className="quantity-plus">+</button>	
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="proview-flex cpf-flex">
								<div className="proview-left">
									<div className="cart-viewimg">
										 <a href="javascript:void(0)">
								             <img src="assets/images/pro-1.png" alt="product image"/>
								         </a>
								     </div>
								     <button type="button" className="pro-delete-btn btn" id="pro_delete_btn">
								     	<img src="assets/images/close-icon.png" alt="delete icon"/>
								     </button>
								</div>
								<div className="proview-right">
									<div className="product-data">
										<h4><a href="product-view.html" tabindex="0">Structure material</a></h4>
										<div className="product-varient mb-0">
											<div className="product-varient-inner">
												<label>Suppler:</label>
												<div className="pvi-flex">
													<p>Hempel</p>
												</div>
											</div>
											<div className="cartv-flex">
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
												<div className="product-pricedata">
													<div className="ppd-flex">
														<div className="price-amount">
															<div className="price-amountinner">
																<span className="price-discount"><del>12.00</del> KD</span>
																<span>12.00 KD</span>
															</div>
														</div>
														<div className="pro-quantity">
															<div className="quantity">
																<button type="button" className="quantity-minus">-</button>	
																	<input type="number" id="quantity_count" className="input-text qty" step="1" min="0" max="99" name="qty-count" value="1" title="" size="4" placeholder="" inputmode="numeric"/>
																<button type="button" className="quantity-plus">+</button>	
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="proview-flex cpf-flex">
								<div className="proview-left">
									<div className="cart-viewimg">
										 <a href="javascript:void(0)">
								             <img src="assets/images/pro-1.png" alt="product image"/>
								         </a>
								     </div>
								     <button type="button" className="pro-delete-btn btn" id="pro_delete_btn">
								     	<img src="assets/images/close-icon.png" alt="delete icon"/>
								     </button>
								</div>
								<div className="proview-right">
									<div className="product-data">
										<h4><a href="product-view.html" tabindex="0">Structure material</a></h4>
										<div className="product-varient mb-0">
											<div className="product-varient-inner">
												<label>Suppler:</label>
												<div className="pvi-flex">
													<p>Hempel</p>
												</div>
											</div>
											<div className="cartv-flex">
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
												<div className="product-pricedata">
													<div className="ppd-flex">
														<div className="price-amount">
															<div className="price-amountinner">
																<span className="price-discount"><del>12.00</del> KD</span>
																<span>12.00 KD</span>
															</div>
														</div>
														<div className="pro-quantity">
															<div className="quantity">
																<button type="button" className="quantity-minus">-</button>	
																	<input type="number" id="quantity_count" className="input-text qty" step="1" min="0" max="99" name="qty-count" value="1" title="" size="4" placeholder="" inputmode="numeric"/>
																<button type="button" className="quantity-plus">+</button>	
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-12">
						<div className="cart-viewtotals">
							<div className="cart-viewtotals-inner">
								<label>Subtotal:</label>
								<span>12.00 kd</span>
							</div>
							<div className="cart-viewtotals-inner cvi-noborder">
								<label>Delivery Charge:</label>
								<span>12.00 kd</span>
							</div>
							<div className="cart-viewtotals-inner cvi-noborder use-credit-fields">
								<label>Use Credit:<br/><span className="vailablility-credit-count m-0"><span className="m-0">Available Credit:</span> <b>4.00 Kd</b></span></label>
								<span className="credit-span"><input type="number" placeholder="Enter Credit" className="form-control" name="credit-use"/> <span>kd</span></span>
							</div>
							<div className="cart-viewtotals-inner cvi-bott">
								<label>Total:</label>
								<span>12.00 kd</span>
							</div>
						</div>
					</div>
					<div className="col-12">
						<div className="general-notes">
							<h3>General notes</h3>
							<textarea type="textarea" className="form-control" placeholder="Notes"></textarea>
						</div>
						<div className="common-credform-btns">
							<div className="cart-view-btngroup">
								<button type="button" className="btn login-btn" id="cart_continue_shopbtn">Continue Shopping</button>
								<button type="button" className="btn login-btn" id="cart_nextbtn">Next</button>
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
		<div className="best-seller product-slider comm-mob-sec">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="product-main-title common-main-title">
							<h2>Products you may like!</h2>
							<a href="#" className="view-moreLink">View all</a>
						</div>
					</div>
				</div>
				<div className="swiper product-sliding product-common-swiper">
					<div className="row common-slick-slide swiper-wrapper">
						<div className="col-lg-3 col-md-3 col-sm-6 col-12 swiper-slide product-boxcol product-boxitem">
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
						<div className="col-lg-3 col-md-3 col-sm-6 col-12 swiper-slide product-boxcol product-boxitem">
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
						<div className="col-lg-3 col-md-3 col-sm-6 col-12 swiper-slide product-boxcol product-boxitem">
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
						<div className="col-lg-3 col-md-3 col-sm-6 col-12 swiper-slide product-boxcol product-boxitem">
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
						<div className="col-lg-3 col-md-3 col-sm-6 col-12 swiper-slide product-boxcol product-boxitem">
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
	</section>
	{/* <!-- end middle content --> */}

	{/* <!-- start main footer --> */}
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
									<textarea type="textarea" name="commnet" placeholder="Comment" className="form-control"></textarea>
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
                                ></iframe>
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

	<div className="comm-msg-modal cam-modal choose-address-modal" id="choose_address_modal">
		<div className="modl-inner">
			<div className="modl-header position-relative text-center">
				<h3>Choose delivery address</h3>
				<button type="button" className="btn modal-close-btn"><img src="assets/images/modal-close.png" alt="close"/></button>
			</div>
			<div className="modl-body">
				<h4><a href="#" className="add-address-linkmodal" id="cart_newaddress_pop">Add new adress</a></h4>
				<div className="modal-addressbox">
					<div className="modal-addressbox-inner">
						<div className="modal-addressbox-innerleft">
							<label for="address_choose_home">
								<h4>Home</h4>
								<p>Block Block A, St. 69 Street, House 2</p>
								<h5>Abu Hlefa</h5>
								<input type="radio" name="address_choose" className="radio-button__input" id="address_choose_home" hidden/>
								<div className="radio-button__custom-indicator"></div>
							</label>
						</div>
						<div className="modal-addressbox-innerbottom">
							<a href="#">Edit</a>
						</div>
 					</div>
 					<div className="modal-addressbox-inner">
						<div className="modal-addressbox-innerleft">
							<label for="address_choose_office">
								<h4>Office</h4>
								<p>Block Block A, St. 69 Street, House 2</p>
								<h5>Abu Hlefa</h5>
								<input type="radio" name="address_choose" className="radio-button__input" id="address_choose_office" hidden/>
								<div className="radio-button__custom-indicator"></div>
							</label>
						</div>
						<div className="modal-addressbox-innerbottom">
							<a href="#">Edit</a>
						</div>
 					</div>
 					<div className="modal-addressbox-inner">
						<div className="modal-addressbox-innerleft">
							<label for="address_choose_workshop">
								<h4>Workshop</h4>
								<p>Block Block A, St. 69 Street, House 2</p>
								<h5>Abu Hlefa</h5>
								<input type="radio" name="address_choose" className="radio-button__input" id="address_choose_workshop" hidden/>
								<div className="radio-button__custom-indicator"></div>
							</label>
						</div>
						<div className="modal-addressbox-innerbottom">
							<a href="#">Edit</a>
						</div>
 					</div>
 					<div className="modal-addressbox-inner">
						<div className="modal-addressbox-innerleft">
							<label for="address_choose_other">
								<h4>Clinet 1 aziz</h4>
								<p>Block Block A, St. 69 Street, House 2</p>
								<h5>Abu Hlefa</h5>
								<input type="radio" name="address_choose" className="radio-button__input" id="address_choose_other" hidden/>
								<div className="radio-button__custom-indicator"></div>
							</label>
						</div>
						<div className="modal-addressbox-innerbottom">
							<a href="#">Edit</a>
						</div>
 					</div>
				</div>
				<div className="mfc-formsend-btn text-center mt-4">
					<button type="button" className="btn text-capitalize" id="choose_address_nextbtn">Next</button>
				</div>
			</div>
		</div>
	</div>

	<div className="comm-msg-modal cam-modal addnew-address-modal" id="addnew_address_modal">
		<div className="modl-inner">
			<div className="modl-header position-relative text-center">
				<h3>New Address</h3>
				<button type="button" className="btn modal-close-btn"><img src="assets/images/modal-close.png" alt="close"/></button>
			</div>
			<div className="modl-body">
				<div className="addnew-address-form common-credform">
					<form>
						<div className="form-group">
							<input type="text" name="add-name" placeholder="Adress name" className="form-control"/>
						</div>
						<div className="form-group">
							<div className="new-address-select">
								<img src="assets/images/select-arrow.png" alt="arrow"/>
								<select type="select" name="add-area" className="form-control">
									<option disabled selected>Area</option>
									<option value="Area Name">Area Name</option>
									<option value="Area Name">Area Name</option>
								</select>
							</div>
						</div>
						<div className="form-group">
							<input type="text" name="add-block" placeholder="Block" className="form-control"/>
						</div>
						<div className="form-group">
							<input type="text" name="add-street" placeholder="Street" className="form-control"/>
						</div>
						<div className="form-group">
							<input type="text" name="add-avenue" placeholder="Avenue ( Optional )" className="form-control"/>
						</div>
						<div className="form-group">
							<input type="text" name="add-building-no" placeholder="Building number" className="form-control"/>
						</div>
						<div className="form-group">
							<input type="text" name="add-floor" placeholder="Floor ( Optional )" className="form-control"/>
						</div>
						<div className="form-group">
							<input type="text" name="add-apartment" placeholder="Apartment number ( Optional )" className="form-control"/>
						</div>
						<div className="form-group">
							<div className="address-map-location">
								<h4>Select your location ( Optional )</h4>
								<div className="aml-inner">
									<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27814.41193999645!2d47.961267178803226!3d29.37610101465698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf9c83ce455983%3A0xc3ebaef5af09b90e!2sKuwait%20City%2C%20Kuwait!5e0!3m2!1sen!2sin!4v1684418108436!5m2!1sen!2sin" style={{border:'0', allowfullscreen:'', loading: '', referrerpolicy:'no-referrer-when-downgrade'}}></iframe>
								</div>
							</div>
						</div>
						<div className="form-group mb-0 mfc-formsend-btn text-center">
							<button type="button" className="btn" id="add_newaddress_btn">Add</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
    </>
  )
}

export default Cart
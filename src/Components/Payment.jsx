import React from 'react'
import { Link } from 'react-router-dom'

function Payment() {
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
							<li><a href="cart.html">Product</a></li>
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
						<div className="cart-payinfo">
							<div className="cart-payinfo-inner">
								<div className="ordered-schedule-info">
									<h3 className="cpi-cart-title">Your order will be delivered</h3>
									<p>Wednesday 24-05-2023</p>
								</div>
								<div className="cart-viewedit">
									<a href="javascript:void(0)" className="cart-viewedit-link">Edit</a>
								</div>
							</div>
							<div className="cart-payinfo-inner">
								<div className="cart-viewaddress">
									<h3 className="cpi-cart-title">Home</h3>
									<div className="cart-viewaddress-flex">
										<div className="cart-viewaddress-flex-l">
											<p>Block Block A, St. 69 Street, House 2</p>
											<p className="cadd-name">Abu Hlefa</p>
										</div>
										<div className="cart-viewedit">
											<a href="javascript:void(0)" className="cart-viewedit-link">Edit</a>
										</div>
									</div>
								</div>								
							</div>
							<div className="cart-payinfo-inner">
								<div className="cart-viewaddress">
									<h3 className="cpi-cart-title">Pay with</h3>
									<div className="cart-viewaddress-flex cvf-payment-flex">
										<div className="common-radiocheck-labels">
											<label className="radio-button__label-wrapper" for="payment_knet">
										      <img src="assets/images/knet.png" alt="knet image"/>  Knet
										      <input type="radio" name="payment_input" id="payment_knet" value="" className="radio-button__input" hidden=""/>
										      <div className="radio-button__custom-indicator"></div> 
										    </label>
										</div>
										<div className="common-radiocheck-labels">
											<label className="radio-button__label-wrapper" for="payment_visa">
										      <img src="assets/images/visa.png" alt="visa image"/>  Visa / Mastercard
										      <input type="radio" name="payment_input" id="payment_visa" value="" className="radio-button__input" hidden=""/>
										      <div className="radio-button__custom-indicator"></div> 
										    </label>
										</div>
										<div className="common-radiocheck-labels">
											<label className="radio-button__label-wrapper" for="payment_apple">
										      <img src="assets/images/visa.png" alt="apple image"/>  Apple pay
										      <input type="radio" name="payment_input" id="payment_apple" value="" className="radio-button__input" hidden=""/>
										      <div className="radio-button__custom-indicator"></div> 
										    </label>
										</div>
									</div>
                                
									<div className="cart-smslink">
										<div className="cart-smslink-inner">
											<div className="cart-viewaddress-flex cvf-payment-flex">
												<div className="common-radiocheck-labels">
													<label className="radio-button__label-wrapper" for="payment_sms">
												      Send a link
												      <input type="radio" name="payment_input" id="payment_sms" value="" className="radio-button__input" hidden=""/>
												      <div className="radio-button__custom-indicator"></div> 
												    </label>
												</div>
											</div>
											<div className="cart-smslink-input">
												<input type="text" name="phone" placeholder="Mobile number" className="form-control"/>
											</div>
										</div>
									</div>
								</div>								
							</div>
							<div className="cart-payinfo-inner">
								<div className="cart-viewaddress">
									<h3 className="cpi-cart-title">Promo code</h3>
									<div className="cart-smslink promocode-inner">
										<div className="cart-smslink-inner">
											<div className="cart-smslink-input">
												<input type="text" name="promo" placeholder="Promo code" className="form-control"/>
											</div>
										</div>
									</div>
								</div>								
							</div>
						</div>
					</div>
					<div className="col-12">
						<div className="form-group pay-terms-reglink">
							<div className="common-radiocheck-labels">
								<label className="radio-button__label-wrapper" for="pay_terms_input" id="tashed_pay_terms">
							       Terms & conditions approval
							      <input type="radio" name="pay-terms-input" id="pay_terms_input" value="" className="radio-button__input" hidden=""/>
							      <div className="radio-button__custom-indicator"></div> 
							    </label>
							</div>
						</div>
					</div>
					<div className="col-12">
						<div className="common-credform-btns">
							<div className="cart-view-btngroup mob-cartview-btn">
								<button type="button" className="btn login-btn" id="cart_continue_shopbtn" style={{marginRight:'15px'}}>Continue Shopping</button>
								<Link to='/Orderhistory'><button type="button" className="btn login-btn" id="cart_paymentnextbtn">Next</button></Link>
							</div>
						</div>
					</div>
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
                                style={{border:'0', allowfullscreen:"", loading:"lazy" ,referrerpolicy:"no-referrer-when-downgrade"}}></iframe>
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

</div>
</>
  )
}

export default Payment
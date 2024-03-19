import React from 'react'

function Profile() {
  return (
    <>
    <div className="mobile-sidebar">
	<div className="mobile-sidebar-inner">
		<div className="mobile-sidebar-innerflex">
			<div className="msi-inner-top">
				<button type="button" className="btn mobile-sidebar-closeBtn"><img src="assets/images/modal-close.png" alt="close icon"/></button>
				<ul className="msi-menubar">
					<li><a href="index.html">home</a></li>
					<li className="mobile-menu-dropdown"><a href="#" className="mmd-link">my account <i className="fa fa-angle-down" aria-hidden="true"></i></a>
						<ul>
							<li><a href="profile.html" className="active">Profile</a></li>
							<li><a href="order-list.html">my orders</a></li>
							<li><a href="wishlist.html">whislist</a></li>
						</ul>
					</li>
					<li><a href="about.html">about us</a></li>
					<li><a href="contact.html">contact us</a></li>
					<li><a href="terms.html">terms & conditions</a></li>
					<li><a href="feedback.html">feedback</a></li>
					<li><a href="#">tell a friend</a></li>
				</ul>
				<div className="lang-notif">
					<div className="lang-notif-inner">
						<span>Language</span>
						<span className="lang-switchlink"><a href="#">ar</a>/<a href="#">en</a></span> 
					</div>
					<div className="lang-notif-inner">
						<span>notification</span>
						<span className="lni-swicthes">
							<div className="custom-control custom-switch">
							  <label className="custom-control-label" htmlFor="customSwitch1">
							  	 <input type="checkbox" className="custom-control-input" id="customSwitch1" checked/>
							  	 <span className="custom-control-label-span"></span>
							  </label>
							</div>
						</span> 
					</div>
					<div className="msi-logobar">
						<img src="assets/images/main-logo.png" alt="brand logo"/>
					</div>
					<div className="msi-socialbar">
						<ul>
							<li><a href="javascript:void(0)"><img src="assets/images/twitter-blue.png" alt="twitter icon"/></a></li>
							<li><a href="javascript:void(0)"><img src="assets/images/instagram-blue.png" alt="twitter icon"/></a></li>
						</ul>
					</div>	
				</div>
			</div>
			<div className="msi-inner-bottom">
				<div className="msi-powerby-logobar">
					<div className="msi-powerby-logobar-inner">
						<img src="assets/images/msi-si-logo.png" alt="brand logo"/>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
{/* <!-- end mobile sidebar --> */}

<div className="wrapper">

	{/* <!-- start main header --> */}
	{/* <header className="sticky-top">
		<div className="desktop-view-nav main-header">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="m-headerinner">
							<div className="m-headerinner-l">
								<div className="m-headerinner-logo">
									<img src="assets/images/main-logo.png" alt="brand logo"/>
								</div>
							</div>
							<div className="m-headerinner-r">
								<div className="m-headerinner-rtop">
									<div className="m-headerinner-rtopflex">
										<div className="m-headerinner-search">
											<form>
												<div className="seach-forminner">
													<button type="button" className="search-btn btn"><img src="assets/images/search-icon.png" alt="search-icon"/></button>
													<input type="text" placeholder="What are you looking for?"/>
												</div>
											</form>
										</div>
										<div className="m-headerinner-rtopflex-r">
											<div className="m-headerinner-rtopflex-rinner">
												<div className="language-switch">
													<a href="#">AR</a> <span>/</span> <a href="#">EN</a>
												</div>
												<div className="user-propic">
													<a href="#" className="user-droptoggle">
														<img src="assets/images/user-propic.png" alt="profile picture"/>
													</a>
													<ul className="user-dropdown">
														<li><a href="javascript:void(0)">Menu 1</a></li>
														<li><a href="javascript:void(0)">Menu 2</a></li>
														<li><a href="javascript:void(0)">Menu 3</a></li>
													</ul>
												</div>
												<div className="fav-pro">
													<a href="wishlist.html">
														<img src="assets/images/fav-star.png" alt="fav star icon"/>
													</a>
												</div>
												<div className="cart-icon">
													<a href="cart.html">
														<img src="assets/images/cart-icon.png" alt="cart icon"/>
														<span>3</span>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="m-headerinner-nav">
							<div className="main-menu">
								<ul>
									<li><a href="index.html">Home</a></li>
									<li><a href="profile.html" className="active">My Account</a></li>
									<li><a href="influencers.html">Influencers</a></li>
									<li><a href="about.html">About us</a></li>
									<li><a href="#contactus_sec" className="contact-scroll">Contact us</a></li>
									<li><a href="feedback.html">Feedback</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="mobile-view-nav">
			<div className="container">
				<div className="row">
					<div className="col-12 p-0">
						<div className="m-headerinner">
							<div className="bar-toggler">
								<div className="bar-toggler-inner">
								    <div className="bar1"></div>
									<div className="bar2"></div>
									<div className="bar3"></div>
								</div>
							</div>
							<div className="m-headerinner-r">
								<div className="m-headerinner-rtop">
									<div className="m-headerinner-prevlink">
										<a href="#"><i className="fa fa-angle-left" aria-hidden="true"></i></a>
									</div>
									<div className="m-headerinner-prevlink-title">
										<h5>Profile</h5>
									</div>
									<div className="m-headerinner-rtopflex">
										<div className="m-headerinner-rtopflex-r">
											<div className="m-headerinner-rtopflex-rinner">
												<div className="cart-icon">
													<a href="cart.html">
														<img src="assets/images/cart-icon.png" alt="cart icon"/>
														<span>3</span>
													</a>
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
	</header> */}
	{/* <!-- end main header -->

	<!-- start middle content --> */}
	<section className="middle-content">
		<div className="cs-breadcrumb comm-mob-sec">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<ul>
							<li><a href="index.html">Home</a></li>
							<li>Profile</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div className="main-profile-sec">
			<div className="profile-sec-inner">
				<div className="container">
					<div className="row">
						<div className="col-lg-4 col-md-4 col-sm-6 col-12 mpsi-col">
							<a href="order-list.html" className="mpsi-link">
								<div className="profile-sec-innerdata">
									<div className="mpsi-leftbar"><img src="assets/images/parcel-icon.png" alt="icon"/></div>
									<div className="mpsi-rightbar"><h4>Your Orders</h4><p>Check status of your order</p></div>
								</div>
							</a>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-6 col-12 mpsi-col">
							<a href="order-list.html" className="mpsi-link">
								<div className="profile-sec-innerdata">
									<div className="mpsi-leftbar"><img src="assets/images/wishlist-icon.png" alt="icon"/></div>
									<div className="mpsi-rightbar"><h4>Your Wishlist</h4><p>Check wishlist of your order</p></div>
								</div>
							</a>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-6 col-12 mpsi-col">
							<a href="profile-info.html" className="mpsi-link">
								<div className="profile-sec-innerdata">
									<div className="mpsi-leftbar"><img src="assets/images/user-icon.png" alt="icon"/></div>
									<div className="mpsi-rightbar"><h4>Profile Info</h4><p>Edit your profile info</p></div>
								</div>
							</a>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-6 col-12 mpsi-col">
							<a href="addresses.html" className="mpsi-link">
								<div className="profile-sec-innerdata">
									<div className="mpsi-leftbar"><img src="assets/images/address-icon.png" alt="icon"/></div>
									<div className="mpsi-rightbar"><h4>Your Addresses</h4><p>Edit address for your order</p></div>
								</div>
							</a>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-6 col-12 mpsi-col">
							<a href="change-password.html" className="mpsi-link">
								<div className="profile-sec-innerdata">
									<div className="mpsi-leftbar"><img src="assets/images/login-icon.png" alt="icon"/></div>
									<div className="mpsi-rightbar"><h4>Login & Security</h4><p>Change password</p></div>
								</div>
							</a>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-6 col-12 mpsi-col">
							<a href="#" className="mpsi-link">
								<div className="profile-sec-innerdata">
									<div className="mpsi-leftbar"><img src="assets/images/receive-mail.png" alt="icon"/></div>
									<div className="mpsi-rightbar"><h4>Inbox</h4><p>Notification & Messages</p></div>
								</div>
							</a>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-6 col-12 mpsi-col">
							<div className="profile-sec-innerdata">
								<div className="mpsi-leftbar"><img src="assets/images/debit-card.png" alt="icon"/></div>
								<div className="mpsi-rightbar"><h4>Credit</h4><p><span className="d-inline-block">Used Credit:</span> <b>10 KD</b></p><p><span className="d-inline-block">Remaining Credit: </span><b>20 KD</b></p></div>
							</div>							
						</div>
					</div>
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
                                style={{border:'0', allowFullScreen:'', loading:'lazy',referrerPolicy:'no-referrer-when-downgrade'}}></iframe>
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

export default Profile
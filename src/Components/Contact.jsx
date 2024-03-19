import React from 'react'

function Contact() {
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
							<li><a href="profile.html">Profile</a></li>
							<li><a href="order-list.html">my orders</a></li>
							<li><a href="wishlist.html">whislist</a></li>
						</ul>
					</li>
					<li><a href="about.html">about us</a></li>
					<li><a href="contact.html" className="active">contact us</a></li>
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
							  <label className="custom-control-label" for="customSwitch1">
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

	
	<section className="middle-content">
		<div className="contact-page">
			<div className="container">
			<div className="row">
					<div className="col-12">
						<div className="cred-forms-logo">
							<img src="assets/images/main-logo.png" alt="brand logo"/>
						</div>
					</div>
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
					<div className="col-lg-12 col-md-12 col-sm-12 col-12">
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
					<div className="col-12">
						<div className="mfc-saperator">
							<div className="mfc-saperator-line"></div>
						</div>	
					</div>
					<div className="col-lg-12 col-md-12 col-sm-12 col-12">
						<div className="mfc-map">
							<h3>STORE ADDRESS</h3>
							<p>Store address, Street, Buliding, Office 1012</p>
							<div className="mfc-mapinner">
								<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27814.41193999645!2d47.961267178803226!3d29.37610101465698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf9c83ce455983%3A0xc3ebaef5af09b90e!2sKuwait%20City%2C%20Kuwait!5e0!3m2!1sen!2sin!4v1684418108436!5m2!1sen!2sin" 
                                
                                style={{border:'0', allowFullScreen:'', loading:'lazy',referrerPolicy:'no-referrer-when-downgrade'}}></iframe>
							</div>
						</div>
					</div>
					<div className="col-12">
						<div className="mfc-saperator">
							<div className="mfc-saperator-line"></div>
						</div>	
					</div>
					<div className="col-12">
						<div className="mfc-socialicons">
							<ul>
								<li>
									<a href="#" target="_blank"><img src="assets/images/twitter-blue.png" alt="twitter icon"/></a>
								</li>
								<li>
									<a href="#" target="_blank"><img src="assets/images/instagram-blue.png" alt="instagram icon"/></a>
								</li>
							</ul>
						</div>	
					</div>
				</div>
			</div>
		</div>
	</section>
	{/* <!-- end middle content -->

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

export default Contact
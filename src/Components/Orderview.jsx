import React from 'react'
function Orderview() {
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
							<li>Order View</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div className="wishlist-sec order-viewsec">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="orderview-alldetails">
							<p>Order #483 was placed on October 23, 2023 and is currently Completed.</p>
							<div className="ovd-box ovd-box-mb-4">
								<div className="generate-invoice">
									<h5 className="m-0">Order Details</h5>
									<div className="order-export-btns">
										<button type="button" className="btn order-export-reportBtn" id="order_export_reportBtn"><i className="fa fa-download" aria-hidden="true"></i>Invoice</button>
									</div>
								</div>
								<div className="ovd-tables">
									<div className="table-responsive">
										<table>
											<thead>
												<tr>
													<th width="100px">Image</th>
													<th>Product Name</th>
													<th width="100px">Supplier</th>
													<th width="100px">Weight</th>
													<th width="150px">Payment Method</th>
													<th width="150px">Order Status</th>
													<th width="100px" className="text-center">Total</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>
														<div className="wishlist-product-img">
															<img src="assets/images/pro-1.png" alt="product image"/>
														</div>
													</td>
													<td><h3 className="wishlist-product-name"><a href="#">Structure material</a></h3></td>
													<td>Hempel</td>
													<td>1x50 ML</td>
													<td>Cash on Delivery</td>
													<td><span className="wishlist-status-tag wishlist-in-stock">Completed</span></td>
													<td>
														<div className="wishlist-unitprice">
															<h5>24.00 KD</h5>
														</div>
													</td>
												</tr>
												<tr>
													<td colspan="6">
														<div className="ovd-subtotal">
															<b>Subtotal:</b>
														</div>
													</td>
													<td>
														<div className="wishlist-unitprice">
															<h5><b>24.00 KD</b></h5>
														</div>
													</td>
												</tr>
												<tr>
													<td colspan="6">
														<div className="ovd-subtotal">
															<b>Discount:</b>
														</div>
													</td>
													<td>
														<div className="wishlist-unitprice">
															<h5><b>00.00 KD</b></h5>
														</div>
													</td>
												</tr>
												<tr>
													<td colspan="6">
														<div className="ovd-subtotal">
															<b>Total:</b>
														</div>
													</td>
													<td>
														<div className="wishlist-unitprice">
															<h5><b>24.00 KD</b></h5>
														</div>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
							<div className="ovd-box">
								<h5>Billing Address</h5>
								<div className="ovd-tables">
									<div className="table-responsive">
										<table>
											<thead>
												<tr>
													<th>Address</th>
													<th width="200px">Customer Name</th>
													<th width="200px">Mobile Number</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>9, om sai residancy, rayam. Ta - Bardoli, Di - Surat, 394355</td>
													<td>Abu Hlefa</td>
													<td>+91 9664741462</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
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
                                 style={{border:'0', allowfullscreen:"", loading:"lazy" , referrerpolicy:"no-referrer-when-downgrade"}}></iframe>
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

export default Orderview
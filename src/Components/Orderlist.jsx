import React from 'react'
import { Link } from 'react-router-dom'
function Orderlist() {
  return (
    <>
    <div className="wrapper">
    {/* <!-- start middle content --> */}
	<section className="middle-content">
		<div className="cs-breadcrumb comm-mob-sec">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<ul>
							<li><a href="index.html">Home</a></li>
							<li>Order List</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div className="wishlist-sec order-listsec">
			<div className="container">
				<div className="row comm-mob-sec">
					<div className="col-12">
						<div className="common-filter-dropdown order-filter-dropdown">
							<select type="select">
								<option selected>Filter by Status</option>
								<option value="Completed">Completed</option>
								<option value="Cancelled">Cancelled</option>
								<option value="Processing">Processing</option>
							</select>
							<div className="order-export-btns">
								<button type="button" className="btn order-export-reportBtn" id="order_export_reportBtn"><i className="fa fa-download" aria-hidden="true"></i>Export</button>
							</div>
						</div>
					</div>
					<div className="col-12">
						<div className="table-responsive">
							<table id="example">
								<thead>
									<tr>
										<th width="34px"></th>
										<th width="100px">Image</th>
										<th>Product Name</th>
										<th width="150px">Unit Price</th>
										<th width="150px">Order Status</th>
										<th width="140px"></th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											<button type="button" className="delete-wishlistBtn btn" id="delete_wishlistBtn">
										     	<img src="assets/images/close-icon.png" alt="delete icon"/>
										    </button>
										</td>
										<td>
											<div className="wishlist-product-img">
												<img src="assets/images/pro-1.png" alt="product image"/>
											</div>
										</td>
										<td><h3 className="wishlist-product-name">Structure material</h3></td>
										<td>
											<div className="wishlist-unitprice">
													<del>30.00 KD</del> <h5>$24.00 KD</h5>
											</div>
										</td>
										<td><span className="wishlist-status-tag wishlist-in-stock">Completed</span></td>
										<td>
											<div className="wishlist-addcartbtn">
												<Link to='/Orderview' className="orderdetail-viewLink" id="orderdetail_viewLink">View</Link>
											</div>
										</td>
									</tr>
									<tr>
										<td>
											<button type="button" className="delete-wishlistBtn btn" id="delete_wishlistBtn">
										     	<img src="assets/images/close-icon.png" alt="delete icon"/>
										    </button>
										</td>
										<td>
											<div className="wishlist-product-img">
												<img src="assets/images/pro-1.png" alt="product image"/>
											</div>
										</td>
										<td><h3 className="wishlist-product-name">Structure material</h3></td>
										<td>
											<div className="wishlist-unitprice">
												<del>30.00 KD</del> <h5>$24.00 KD</h5>
											</div>
										</td>
										<td><span className="wishlist-status-tag wishlist-out-stock">Cancelled</span></td>
										<td>
											<div className="wishlist-addcartbtn">
												<Link to='/Orderview' className="orderdetail-viewLink" id="orderdetail_viewLink">View</Link>
											</div>
										</td>
									</tr>
									<tr>
										<td>
											<button type="button" className="delete-wishlistBtn btn" id="delete_wishlistBtn">
										     	<img src="assets/images/close-icon.png" alt="delete icon"/>
										    </button>
										</td>
										<td>
											<div className="wishlist-product-img">
												<img src="assets/images/pro-1.png" alt="product image"/>
											</div>
										</td>
										<td><h3 className="wishlist-product-name">Structure material</h3></td>
										<td>
											<div className="wishlist-unitprice">
												<del>30.00 KD</del> <h5>$24.00 KD</h5>
											</div>
										</td>
										<td><span className="wishlist-status-tag order-processing-tag">Processing</span></td>
										<td>
											<div className="wishlist-addcartbtn">
												<Link to='/Orderview'className="orderdetail-viewLink" id="orderdetail_viewLink">View</Link>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
				<div className="row comm-desk-sec">
					<div className="col-12">
						<div className="common-filter-dropdown order-filter-dropdown">
							<select type="select">
								<option selected>Filter by Status</option>
								<option value="Completed">Completed</option>
								<option value="Cancelled">Cancelled</option>
								<option value="Processing">Processing</option>
							</select>
							<div className="order-export-btns">
								<button type="button" className="btn order-export-reportBtn" id="order_export_reportBtn"><i className="fa fa-download" aria-hidden="true"></i>Export</button>
							</div>
						</div>
					</div>
					<div className="col-12">
						<div className="table-responsive">
							<table>
								<tbody>
									<tr>
										<td colspan="6">
											<table className="secondlevel-table">
												<tr>
													<td>
														<button type="button" className="delete-wishlistBtn btn" id="delete_wishlistBtn">
													     	<img src="assets/images/close-icon.png" alt="delete icon"/>
													    </button>
													</td>
												</tr>
												<tr>
													<td>
														<div className="wishlist-product-img">
															<img src="assets/images/pro-1.png" alt="product image"/>
														</div>
													</td>
												</tr>
												<tr>
													<td><h3 className="wishlist-product-name">Structure material</h3></td>
												</tr>
												<tr>
													<td>
														<div className="wishlist-unitprice">
															<del>30.00 KD</del> <h5>$24.00 KD</h5>
														</div>
													</td>
												</tr>
												<tr>
													<td><span className="wishlist-status-tag wishlist-in-stock">Completed</span></td>
												</tr>
												<tr>
													<td>
														<div className="wishlist-addcartbtn">
															<a href="order-view.html" className="orderdetail-viewLink" id="orderdetail_viewLink">View</a>
														</div>
													</td>
												</tr>
											</table>
										</td>
									</tr>
									<tr>
										<td colspan="6">
											<table className="secondlevel-table">
												<tr>
													<td>
														<button type="button" className="delete-wishlistBtn btn" id="delete_wishlistBtn">
													     	<img src="assets/images/close-icon.png" alt="delete icon"/>
													    </button>
													</td>
												</tr>
												<tr>
													<td>
														<div className="wishlist-product-img">
															<img src="assets/images/pro-1.png" alt="product image"/>
														</div>
													</td>
												</tr>
												<tr>
													<td><h3 className="wishlist-product-name">Structure material</h3></td>
												</tr>
												<tr>
													<td>
														<div className="wishlist-unitprice">
															<del>30.00 KD</del> <h5>$24.00 KD</h5>
														</div>
													</td>
												</tr>
												<tr>
													<td><span className="wishlist-status-tag wishlist-out-stock">Cancelled</span></td>
												</tr>
												<tr>
													<td>
														<div className="wishlist-addcartbtn">
															<a href="order-view.html" className="orderdetail-viewLink" id="orderdetail_viewLink">View</a>
														</div>
													</td>
												</tr>
											</table>
										</td>
									</tr>
									<tr>
										<td colspan="6">
											<table className="secondlevel-table">
												<tr>
													<td>
														<button type="button" className="delete-wishlistBtn btn" id="delete_wishlistBtn">
													     	<img src="assets/images/close-icon.png" alt="delete icon"/>
													    </button>
													</td>
												</tr>
												<tr>
													<td>
														<div className="wishlist-product-img">
															<img src="assets/images/pro-1.png" alt="product image"/>
														</div>
													</td>
												</tr>
												<tr>
													<td><h3 className="wishlist-product-name">Structure material</h3></td>
												</tr>
												<tr>
													<td>
														<div className="wishlist-unitprice">
															<del>30.00 KD</del> <h5>$24.00 KD</h5>
														</div>
													</td>
												</tr>
												<tr>
													<td><span className="wishlist-status-tag order-processing-tag">Processing</span></td>
												</tr>
												<tr>
													<td>
														<div className="wishlist-addcartbtn">
															<a href="order-view.html" className="orderdetail-viewLink" id="orderdetail_viewLink">View</a>
														</div>
													</td>
												</tr>
											</table>
										</td>
									</tr>
								</tbody>
							</table>
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
                                style={{border:'0', allowfullscreen:"" , loading:"lazy" ,referrerpolicy:"no-referrer-when-downgrade"}}></iframe>
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

export default Orderlist
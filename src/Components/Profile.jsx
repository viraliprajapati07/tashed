import React from 'react'
import { Link } from 'react-router-dom'
import Links from './NavLinks/Links'
function Profile() {
	return (
		<>
			<div className="wrapper">
			<section className="middle-content">
				<Links linkName='profile'/>
					<div className="main-profile-sec">
						<div className="profile-sec-inner">
							<div className="container">
								
								<div className="row">
									<div className="col-lg-4 col-md-4 col-sm-6 col-12 mpsi-col">

										<div className="profile-sec-innerdata">
											<Link to='/orderlist'>
												<div className="mpsi-leftbar"><img src="assets/images/parcel-icon.png" alt="icon" /></div>
												<div className="mpsi-rightbar"><h4>Your Orders</h4><p>Check status of your order</p></div>
											</Link>
										</div>

									</div>
									<div className="col-lg-4 col-md-4 col-sm-6 col-12 mpsi-col">

										<div className="profile-sec-innerdata">
											<Link to='/orderlist'>
												<div className="mpsi-leftbar"><img src="assets/images/wishlist-icon.png" alt="icon" /></div>
												<div className="mpsi-rightbar"><h4>Your Wishlist</h4><p>Check wishlist of your order</p></div>
											</Link>
										</div>


									</div>
									<div className="col-lg-4 col-md-4 col-sm-6 col-12 mpsi-col">

										<div className="profile-sec-innerdata">
											<Link to='/profileinfo'>
												<div className="mpsi-leftbar"><img src="assets/images/user-icon.png" alt="icon" /></div>
												<div className="mpsi-rightbar"><h4>Profile Info</h4><p>Edit your profile info</p></div>
											</Link>
										</div>

									</div>
									<div className="col-lg-4 col-md-4 col-sm-6 col-12 mpsi-col">

										<div className="profile-sec-innerdata">
											<Link to='/address'>
												<div className="mpsi-leftbar"><img src="assets/images/address-icon.png" alt="icon" /></div>
												<div className="mpsi-rightbar"><h4>Your Addresses</h4><p>Edit address for your order</p></div>
											</Link>
										</div>

									</div>
									<div className="col-lg-4 col-md-4 col-sm-6 col-12 mpsi-col">

										<div className="profile-sec-innerdata">
											<Link to='/changepass'>
												<div className="mpsi-leftbar"><img src="assets/images/login-icon.png" alt="icon" /></div>
												<div className="mpsi-rightbar"><h4>Login & Security</h4><p>Change password</p></div>
											</Link>
										</div>

									</div>
									<div className="col-lg-4 col-md-4 col-sm-6 col-12 mpsi-col">
										<Link to='/profile'>
											<div className="profile-sec-innerdata">
												<div className="mpsi-leftbar"><img src="assets/images/receive-mail.png" alt="icon" /></div>
												<div className="mpsi-rightbar"><h4>Inbox</h4><p>Notification & Messages</p></div>
											</div>
										</Link>
									</div>
									<div className="col-lg-4 col-md-4 col-sm-6 col-12 mpsi-col">
										<div className="profile-sec-innerdata">
											<Link to='/profile'>
												<div className="mpsi-leftbar"><img src="assets/images/debit-card.png" alt="icon" /></div>
												<div className="mpsi-rightbar"><h4>Credit</h4><p><span className="d-inline-block">Used Credit:</span> <b>10 KD</b></p><p><span className="d-inline-block">Remaining Credit: </span><b>20 KD</b></p></div>
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	)
}
export default Profile
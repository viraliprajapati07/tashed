import React from 'react'
import { Link } from 'react-router-dom'
function Register() {
	return (
		<>
			<div className="wrapper">
				<section className="middle-content">
					<div className="middle-100vh-content">
						<div className="cred-forms-logo cfl-absolute">
							<img src="assets/images/main-logo.png" alt="brand logo" />
						</div>
						<div className="register common-credform-padding">
							<div className="register-inner">
								<div className="container">
									<div className="row">
										<div className="col-12">
											<div className="register-form common-credform">
												<div className="common-credform-inner">
													<h3 className="comm-mob-sec">REGISTRATION</h3>
													<form>
														<div className="form-group">
															<input type="text" name="fullname" placeholder="Full name" className="form-control" />
														</div>
														<div className="form-group">
															<input type="password" name="password" placeholder="Password" className="form-control" />
														</div>
														<div className="form-group">
															<input type="password" name="confirm-password" placeholder="Confirm password" className="form-control" />
														</div>
														<div className="form-group">
															<input type="email" name="email" placeholder="Email" className="form-control" />
														</div>
														<div className="common-credform-btns mt-4 mb-4">
															<div className="common-credform-addressbtns mb-0">
																<button type="button" className="btn delivery-address-btn guest-btn" id="delivery_address_btn">
																	Add delivery address
																</button>
															</div>
														</div>
														<div className="form-group">
															<textarea type="textarea" name="comment" placeholder="Comment (optional)" className="form-control"></textarea>
														</div>
														<div className="form-group terms-reglink">
															<div className="common-radiocheck-labels">
																<label className="radio-button__label-wrapper" for="terms_input" id="tashed_reg_terms">
																	Terms & conditions approval
																	<input type="radio" name="terms-input" id="terms_input" value="" className="radio-button__input" hidden="" />
																	<div className="radio-button__custom-indicator"></div>
																</label>
															</div>
														</div>
														<div className="common-credform-btns">
															<div className="common-credform-loginbtns">
																<Link to="/payment">
																	<button type="button" className="btn login-btn" id="register_btn">
																		Create Account!
																	</button>
																</Link>
															</div>
														</div>
														<div className="common-ga-btns">
															<h5>Register using following account</h5>
															<div className="common-googlebtns">
																<button type="button" className="btn google-reg-btn" id="google_reg_btn">
																	Google
																</button>
															</div>
															<div className="common-applebtns">
																<button type="button" className="btn apple-reg-btn" id="apple_reg_btn">
																	Apple
																</button>
															</div>
														</div>
													</form>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<div className="comm-msg-modal cam-modal addnew-address-modal" id="addnew_address_modal">
					<div className="modl-inner">
						<div className="modl-header position-relative text-center">
							<h3>New Address</h3>
							<button type="button" className="btn modal-close-btn"><img src="assets/images/modal-close.png" alt="close" /></button>
						</div>
						<div className="modl-body">
							<div className="addnew-address-form common-credform">
								<form>
									<div className="form-group">
										<input type="text" name="add-name" placeholder="Adress name" className="form-control" />
									</div>
									<div className="form-group">
										<div className="new-address-select">
											<img src="assets/images/select-arrow.png" alt="arrow" />
											<select type="select" name="add-area" className="form-control">
												<option disabled selected>Area</option>
												<option value="Area Name">Area Name</option>
												<option value="Area Name">Area Name</option>
											</select>
										</div>
									</div>
									<div className="form-group">
										<input type="text" name="add-block" placeholder="Block" className="form-control" />
									</div>
									<div className="form-group">
										<input type="text" name="add-street" placeholder="Street" className="form-control" />
									</div>
									<div className="form-group">
										<input type="text" name="add-avenue" placeholder="Avenue ( Optional )" className="form-control" />
									</div>
									<div className="form-group">
										<input type="text" name="add-building-no" placeholder="Building number" className="form-control" />
									</div>
									<div className="form-group">
										<input type="text" name="add-floor" placeholder="Floor ( Optional )" className="form-control" />
									</div>
									<div className="form-group">
										<input type="text" name="add-apartment" placeholder="Apartment number ( Optional )" className="form-control" />
									</div>
									<div className="form-group">
										<div className="address-map-location">
											<h4>Select your location ( Optional )</h4>
											<div className="aml-inner">
												<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27814.41193999645!2d47.961267178803226!3d29.37610101465698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf9c83ce455983%3A0xc3ebaef5af09b90e!2sKuwait%20City%2C%20Kuwait!5e0!3m2!1sen!2sin!4v1684418108436!5m2!1sen!2sin"
													style={{ border: '0', allowfullscreen: "", loading: "lazy", referrerpolicy: "no-referrer-when-downgrade" }}></iframe>
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
export default Register
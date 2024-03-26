import { Link } from "react-router-dom";
import Links from "./NavLinks/Links";
import Card from "./Product/Card";
import CartIn from "./Carts/CartIn";
function Cart() {
	return (
		<>
			<div className="wrapper">
				<section className="middle-content">
					<Link to="/category">
						<Links linkName="Product" linkName2="Cart" />
					</Link>
					<div className="product-view cart-view">
						<div className="container">
							<div className="row">
								<div className="col-12">
									<div className="cart-viewedit">
										<a href="javascript:void(0)" className="cart-viewedit-link">
											Edit
										</a>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-12">
									<div className="proview-top">
										<CartIn />
										<CartIn />
										<CartIn />
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
												<label>
													Use Credit:
													<br />
													<span className="vailablility-credit-count m-0">
														<span className="m-0">Available Credit:</span>{" "}
														<b>4.00 Kd</b>
													</span>
												</label>
												<span className="credit-span">
													<input
														type="number"
														placeholder="Enter Credit"
														className="form-control"
														name="credit-use"
													/>
													<span>kd</span>
												</span>
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
											<textarea
												type="textarea"
												className="form-control"
												placeholder="Notes"
											></textarea>
										</div>
										<div className="common-credform-btns">
											<div className="cart-view-btngroup">
												<Link to="/category">
													<button
														type="button"
														className="btn login-btn"
														id="cart_continue_shopbtn"
														style={{ marginRight: "15px" }}
													>
														Continue Shopping
													</button>
												</Link>
												<Link to="/register">
													<button type="button" className="btn login-btn" id="cart_nextbtn">
														Next
													</button>
												</Link>
											</div>
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
										<a href="#" className="view-moreLink">
											View all
										</a>
									</div>
								</div>
							</div>
							<div className="swiper product-sliding product-common-swiper">
								<div className="row common-slick-slide swiper-wrapper">

									<Card productImage="assets/images/pro-1.png" productName="Product 1"
										productlabel="Supplier" productp="Hempel" weight="Weight" sp="1x40 ML"
										l="Type of Unit" para="Piece" iconimage="assets/images/add-cart.png"
										star="fa fa-star-o" del="20.00" ori="KD" final="12.00" />

									<Card productImage="assets/images/pro-2.png" productName="Product 1"
										productlabel="Supplier" productp="Hempel" weight="Weight" sp="1x40 ML"
										l="Type of Unit" para="Piece" iconimage="assets/images/add-cart.png"
										star="fa fa-star-o" del="20.00" ori="KD" final="12.00" />

									<Card productImage="assets/images/pro-3.png" productName="Product 1"
										productlabel="Supplier" productp="Hempel" weight="Weight" sp="1x40 ML"
										l="Type of Unit" para="Piece" iconimage="assets/images/add-cart.png"
										star="fa fa-star-o" del="20.00" ori="KD" final="12.00" />

									<Card productImage="assets/images/pro-4.png" productName="Product 1"
										productlabel="Supplier" productp="Hempel" weight="Weight" sp="1x40 ML"
										l="Type of Unit" para="Piece" iconimage="assets/images/add-cart.png"
										star="fa fa-star-o" del="20.00" ori="KD" final="12.00" />

									<Card productImage="assets/images/pro-5.png" productName="Product 1"
										productlabel="Supplier" productp="Hempel" weight="Weight" sp="1x40 ML"
										l="Type of Unit" para="Piece" iconimage="assets/images/add-cart.png"
										star="fa fa-star-o" del="20.00" ori="KD" final="12.00" />
									</div>

									<div className="swiper-button-prev common-swipercontrol-btn"></div>
									<div className="swiper-button-next common-swipercontrol-btn"></div>
								</div>
							</div>
						</div>
				</section>
			</div>
		</>
	);
}
export default Cart;

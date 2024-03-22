import React from 'react'
import { Link } from 'react-router-dom';
function Card(props) {
    return (
        <>
            <div className="col-lg-3 col-md-3 col-sm-6 col-12 swiper-slide product-boxcol product-boxitemcol-lg-3 col-md-3 col-sm-6 col-12 swiper-slide product-boxcol product-boxitem swiper-slide-active 
						"role="group" aria-label='2 / 5 '
                style={{ width: "255px", marginRight: "30px" }}>
                <div className="product-box">
                    <div className="product-img text-center">
                        <img src={props.productImage}/>
                    </div>
                    <div className="product-data">
                        <h4><a href="product-view.html">{props.productName}</a></h4>
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
                                <Link to='/Cart'><button type="button" className="btn add-cartBtn" id="add_cartBtn">
                                    <img src="assets/images/add-cart.png" alt="add cart icon" />
                                </button></Link>
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
        </>
    )
}

export default Card
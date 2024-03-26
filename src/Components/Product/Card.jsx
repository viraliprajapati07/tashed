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
                        <h4><Link to='/viewproduct'>{props.productName}</Link></h4>
                        <div className="product-varient">
                            <div className="product-varient-inner">
                                <label>{props.productlabel}</label>
                                <div className="pvi-flex">
                                    <p>{props.productp}</p>
                                </div>
                            </div>
                            <div className="product-varient-inner pvi-weight">
                                <label>{props.weight}</label>
                                <div className="pvi-flex">
                                    <span>{props.sp}</span>
                                    <span>{props.sp}</span>
                                    <span>{props.sp}</span>
                                </div>
                            </div>
                            <div className="product-varient-inner">
                                <label>{props.l}</label>
                                <div className="pvi-flex">
                                    <p>{props.para}</p>
                                </div>
                            </div>
                        </div>
                        <div className="product-pricedata">
                            <div className="ppd-flex">
                                <Link to='/Cart'><button type="button" className="btn add-cartBtn" id="add_cartBtn">
                                    <img src={props.iconimage} alt="add cart icon" />
                                </button></Link>
                                <button type="button" className="btn add-favBtn" id="add_favBtn">
                                    <i className={props.star} aria-hidden="true"></i>
                                </button>
                                <div className="price-amount">
                                    <div className="price-amountinner">
                                        <span className="price-discount"><del>{props.del}</del>{props.ori}</span>
                                        <span>{props.final}</span>
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
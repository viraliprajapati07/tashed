import React,{useState} from 'react'
import Card from './Product/Card'
import { Link } from 'react-router-dom'
import Links from './NavLinks/Links';
function Viewproduct() {
    
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    return (
        <>
            <div className="wrapper">
                <section className="middle-content">
                    <div className="cs-breadcrumb">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                <Link to="/category">
						        <Links linkName="Product" linkName2="View Product" />
					            </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-view  main-productview">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="proview-top productview-top">
                                        <div className="proview-flex">
                                            <div className="proview-left">
                                                <button type="button" className="goToPrevSlideBtn common-lightcontorl" id="goToPrevSlide"></button>
                                                <button type="button" className="goToNextSlideBtn common-lightcontorl" id="goToNextSlide"></button>
                                                <ul id="lightSlider">
                                                    <li data-thumb="assets/images/pro-1.png">
                                                        <a href="assets/images/pro-1.png" data-fancybox="gallery">
                                                            <img src="assets/images/pro-1.png" />
                                                        </a>
                                                    </li>
                                                    <li data-thumb="assets/images/pro-1.png">
                                                        <a href="assets/images/pro-1.png" data-fancybox="gallery">
                                                            <img src="assets/images/pro-1.png" />
                                                        </a>
                                                    </li>
                                                    <li data-thumb="assets/images/pro-1.png">
                                                        <a href="assets/images/pro-1.png" data-fancybox="gallery">
                                                            <img src="assets/images/pro-1.png" />
                                                        </a>
                                                    </li>
                                                    <li data-thumb="assets/images/pro-1.png">
                                                        <a href="assets/images/pro-1.png" data-fancybox="gallery">
                                                            <img src="assets/images/pro-1.png" />
                                                        </a>
                                                    </li>
                                                    <li data-thumb="assets/images/pro-1.png">
                                                        <a href="assets/images/pro-1.png" data-fancybox="gallery">
                                                            <img src="assets/images/pro-1.png" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="proview-right">
                                                <div className="product-data">
                                                    <div className="main-pro-fav">
                                                        <button type="button" className="btn add-favBtn" id="add_favBtn">
                                                            <i className="fa fa-star-o" aria-hidden="true"></i>
                                                        </button>
                                                    </div>
                                                    <h4><a href="javascript:void(0)" tabindex="0">Structure material</a></h4>
                                                    <div className="pro-description mp-desc comm-desk-sec">
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                                                            dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
                                                            suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
                                                            vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et
                                                            iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                                                            Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                                                            laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                                                            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                                                            dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
                                                            suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
                                                            vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et
                                                            iusto odio dignissim qui blandit praesent luptatum zzril delenit a
                                                        </p>
                                                    </div>
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
                                                            <div className="pro-quantity">
                                                                <div className="quantity">
                                                                    <button type="button" className="quantity-minus"onClick={handleDecrement}>-</button>
                                                                    <input type="number" id="quantity_count" className="input-text qty" step="1" min="0" max="99" name="qty-count" value={quantity} title="" size="4" placeholder="" inputmode="numeric" />
                                                                    <button type="button" className="quantity-plus" onClick={handleIncrement}>+</button>
                                                                </div>
                                                            </div>
                                                            <div className="price-amount">
                                                                <div className="price-amountinner">
                                                                    <span className="price-discount"><del>12.00</del> KD</span>
                                                                    <span>12.00 KD</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="pro-addcartbtn">
                                                        <Link to='/cart'>
                                                        <button type="button" className="btn pro-addcart-btn" id="pro_addcart_btn">Add to cart</button></Link>
                                                    </div>
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
                                    <div className="product-separator proview-separator"></div>
                                </div>
                            </div>
                        </div>
                        <div className="container comm-mob-sec">
                            <div className="row">
                                <div className="col-12">
                                    <div className="proview-bottom">
                                        <div className="pro-description">
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                                                dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
                                                suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
                                                vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et
                                                iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                                                Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                                                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                                                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                                                dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
                                                suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
                                                vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et
                                                iusto odio dignissim qui blandit praesent luptatum zzril delenit a
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="product-separator"></div>
                            </div>
                        </div>
                    </div>
                    <div className="best-seller product-slider proview-mobile-carousel">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="product-main-title common-main-title">
                                        <h2>Related products</h2>
                                        <a href="#" className="view-moreLink">View all</a>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper product-sliding main-related-product product-common-swiper">
                                <div className="row common-slick-slide swiper-wrapper">

                                    <Card productImage='assets/images/pro-1.png' productName='Product 1'
                                        productlabel='Supplier' productp='Hempel' weight='Weight' sp='1x40 ML'
                                        l='Type of Unit' para='Piece' iconimage='assets/images/add-cart.png'
                                        star='fa fa-star-o' del='20.00' ori='KD' final='12.00 KD' />

                                    <Card productImage='assets/images/pro-2.png' productName='Product 2'
                                        productlabel='Supplier' productp='Hempel' weight='Weight' sp='1x40 ML'
                                        l='Type of Unit' para='Piece' iconimage='assets/images/add-cart.png'
                                        star='fa fa-star-o' del='20.00' ori='KD' final='12.00' />


                                    <Card productImage='assets/images/pro-3.png' productName='Product 3'
                                        productlabel='Supplier' productp='Hempel' weight='Weight' sp='1x40 ML'
                                        l='Type of Unit' para='Piece' iconimage='assets/images/add-cart.png'
                                        star='fa fa-star-o' del='20.00' ori='KD' final='12.00' />

                                    <Card productImage='assets/images/pro-4.png' productName='Product 4'
                                        productlabel='Supplier' productp='Hempel' weight='Weight' sp='1x40 ML'
                                        l='Type of Unit' para='Piece' iconimage='assets/images/add-cart.png'
                                        star='fa fa-star-o' del='20.00' ori='KD' final='12.00' />


                                    <Card productImage='assets/images/pro-5.png' productName='Product 1'
                                        productlabel='Supplier' productp='Hempel' weight='Weight' sp='1x40 ML'
                                        l='Type of Unit' para='Piece' iconimage='assets/images/add-cart.png'
                                        star='fa fa-star-o' del='20.00' ori='KD' final='12.00' />

                                </div>
                                <div className="swiper-button-prev common-swipercontrol-btn"></div>
                                <div className="swiper-button-next common-swipercontrol-btn"></div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
export default Viewproduct




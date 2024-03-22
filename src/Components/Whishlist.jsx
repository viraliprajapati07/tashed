import React from 'react'
function Whishlist() {
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
                                        <li>Wishlist</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wishlist-sec">
                        <div className="container">
                            <div className="row comm-mob-sec">
                                <div className="col-12">
                                    <div className="common-filter-dropdown order-filter-dropdown">
                                        <select type="select">
                                            <option selected>Filter by Status</option>
                                            <option value="In Stock">In Stock</option>
                                            <option value="Out of Stock">Out of Stock</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="table-responsive">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th width="34px"></th>
                                                    <th width="100px">Image</th>
                                                    <th>Product Name</th>
                                                    <th width="150px">Unit Price</th>
                                                    <th width="150px">Stock Status</th>
                                                    <th width="140px"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <button type="button" className="delete-wishlistBtn btn" id="delete_wishlistBtn">
                                                            <img src="assets/images/close-icon.png" alt="delete icon" />
                                                        </button>
                                                    </td>
                                                    <td>
                                                        <div className="wishlist-product-img">
                                                            <img src="assets/images/pro-1.png" alt="product image" />
                                                        </div>
                                                    </td>
                                                    <td><h3 className="wishlist-product-name">Structure material</h3></td>
                                                    <td>
                                                        <div className="wishlist-unitprice">
                                                            <del>30.00 KD</del> <h5>24.00 KD</h5>
                                                        </div>
                                                    </td>
                                                    <td><span className="wishlist-status-tag wishlist-in-stock">In Stock</span></td>
                                                    <td>
                                                        <div className="wishlist-addcartbtn">
                                                            <button type="button" className="btn wishlist-addcartBtn" id="wishlist_addcartBtn">Add to Cart</button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <button type="button" className="delete-wishlistBtn btn" id="delete_wishlistBtn">
                                                            <img src="assets/images/close-icon.png" alt="delete icon" />
                                                        </button>
                                                    </td>
                                                    <td>
                                                        <div className="wishlist-product-img">
                                                            <img src="assets/images/pro-1.png" alt="product image" />
                                                        </div>
                                                    </td>
                                                    <td><h3 className="wishlist-product-name">Structure material</h3></td>
                                                    <td>
                                                        <div className="wishlist-unitprice">
                                                            <del>30.00 KD</del> <h5>24.00 KD</h5>
                                                        </div>
                                                    </td>
                                                    <td><span className="wishlist-status-tag wishlist-out-stock">Out of Stock</span></td>
                                                    <td>
                                                        <div className="wishlist-addcartbtn">
                                                            <button type="button" className="btn wishlist-addcartBtn" id="wishlist_addcartBtn" disabled>Add to Cart</button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <button type="button" className="delete-wishlistBtn btn" id="delete_wishlistBtn">
                                                            <img src="assets/images/close-icon.png" alt="delete icon" />
                                                        </button>
                                                    </td>
                                                    <td>
                                                        <div className="wishlist-product-img">
                                                            <img src="assets/images/pro-1.png" alt="product image" />
                                                        </div>
                                                    </td>
                                                    <td><h3 className="wishlist-product-name">Structure material</h3></td>
                                                    <td>
                                                        <div className="wishlist-unitprice">
                                                            <del>30.00 KD</del> <h5>24.00 KD</h5>
                                                        </div>
                                                    </td>
                                                    <td><span className="wishlist-status-tag wishlist-in-stock">In Stock</span></td>
                                                    <td>
                                                        <div className="wishlist-addcartbtn">
                                                            <button type="button" className="btn wishlist-addcartBtn" id="wishlist_addcartBtn">Add to Cart</button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <button type="button" className="delete-wishlistBtn btn" id="delete_wishlistBtn">
                                                            <img src="assets/images/close-icon.png" alt="delete icon" />
                                                        </button>
                                                    </td>
                                                    <td>
                                                        <div className="wishlist-product-img">
                                                            <img src="assets/images/pro-1.png" alt="product image" />
                                                        </div>
                                                    </td>
                                                    <td><h3 className="wishlist-product-name">Structure material</h3></td>
                                                    <td>
                                                        <div className="wishlist-unitprice">
                                                            <del>30.00 KD</del> <h5>24.00 KD</h5>
                                                        </div>
                                                    </td>
                                                    <td><span className="wishlist-status-tag wishlist-out-stock">Out of Stock</span></td>
                                                    <td>
                                                        <div className="wishlist-addcartbtn">
                                                            <button type="button" className="btn wishlist-addcartBtn" id="wishlist_addcartBtn" disabled>Add to Cart</button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <button type="button" className="delete-wishlistBtn btn" id="delete_wishlistBtn">
                                                            <img src="assets/images/close-icon.png" alt="delete icon" />
                                                        </button>
                                                    </td>
                                                    <td>
                                                        <div className="wishlist-product-img">
                                                            <img src="assets/images/pro-1.png" alt="product image" />
                                                        </div>
                                                    </td>
                                                    <td><h3 className="wishlist-product-name">Structure material</h3></td>
                                                    <td>
                                                        <div className="wishlist-unitprice">
                                                            <del>30.00 KD</del> <h5>24.00 KD</h5>
                                                        </div>
                                                    </td>
                                                    <td><span className="wishlist-status-tag wishlist-in-stock">In Stock</span></td>
                                                    <td>
                                                        <div className="wishlist-addcartbtn">
                                                            <button type="button" className="btn wishlist-addcartBtn" id="wishlist_addcartBtn">Add to Cart</button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <button type="button" className="delete-wishlistBtn btn" id="delete_wishlistBtn">
                                                            <img src="assets/images/close-icon.png" alt="delete icon" />
                                                        </button>
                                                    </td>
                                                    <td>
                                                        <div className="wishlist-product-img">
                                                            <img src="assets/images/pro-1.png" alt="product image" />
                                                        </div>
                                                    </td>
                                                    <td><h3 className="wishlist-product-name">Structure material</h3></td>
                                                    <td>
                                                        <div className="wishlist-unitprice">
                                                            <del>30.00 KD</del> <h5>24.00 KD</h5>
                                                        </div>
                                                    </td>
                                                    <td><span className="wishlist-status-tag wishlist-out-stock">Out of Stock</span></td>
                                                    <td>
                                                        <div className="wishlist-addcartbtn">
                                                            <button type="button" className="btn wishlist-addcartBtn" id="wishlist_addcartBtn" disabled>Add to Cart</button>
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
                                            <option value="In Stock">In Stock</option>
                                            <option value="Out of Stock">Out of Stock</option>
                                        </select>
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
                                                                        <img src="assets/images/close-icon.png" alt="delete icon" />
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="wishlist-product-img">
                                                                        <img src="assets/images/pro-1.png" alt="product image" />
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td><h3 className="wishlist-product-name">Structure material</h3></td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="wishlist-unitprice">
                                                                        <del>30.00 KD</del> <h5>24.00 KD</h5>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td><span className="wishlist-status-tag wishlist-in-stock">In Stock</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="wishlist-addcartbtn">
                                                                        <button type="button" className="btn wishlist-addcartBtn" id="wishlist_addcartBtn">Add to Cart</button>
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
                                                                        <img src="assets/images/close-icon.png" alt="delete icon" />
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="wishlist-product-img">
                                                                        <img src="assets/images/pro-1.png" alt="product image" />
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td><h3 className="wishlist-product-name">Structure material</h3></td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="wishlist-unitprice">
                                                                        <del>30.00 KD</del> <h5>24.00 KD</h5>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td><span className="wishlist-status-tag wishlist-out-stock">Out of Stock</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="wishlist-addcartbtn">
                                                                        <button type="button" className="btn wishlist-addcartBtn" id="wishlist_addcartBtn" disabled>Add to Cart</button>
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
            </div>
        </>
    )
}
export default Whishlist
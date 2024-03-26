import React from 'react'

function OutofStock() {
    return (
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
    )
}

export default OutofStock
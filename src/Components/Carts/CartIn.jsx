import React,{ useState } from 'react';
function CartIn(props) {
const [quantity1, setQuantity1] = useState(1);
	const decrement1 = () => {
		if (quantity1 > 0) {
			setQuantity1(quantity1 - 1);
		}
	};

	const increment1 = () => {
		if (quantity1 < 99) {
			setQuantity1(quantity1 + 1);
		}
	};

  return (

    <div className="proview-flex cpf-flex">
    <div className="proview-left">
        <div className="cart-viewimg">
            <a href="javascript:void(0)">
                <img src="assets/images/pro-1.png" alt="product image" />
            </a>
        </div>
        <button type="button" className="pro-delete-btn btn" id="pro_delete_btn">
            <img src="assets/images/close-icon.png" alt="delete icon" />
        </button>
    </div>
    <div className="proview-right">
        <div className="product-data">
            <h4><a href="product-view.html" tabindex="0">Structure material</a></h4>
            <div className="product-varient mb-0">
                <div className="product-varient-inner">
                    <label>Suppler:</label>
                    <div className="pvi-flex">
                        <p>Hempel</p>
                    </div>
                </div>
                <div className="cartv-flex">
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
                    <div className="product-pricedata">
                        <div className="ppd-flex">
                            <div className="price-amount">
                                <div className="price-amountinner">
                                    <span className="price-discount"><del>12.00</del> KD</span>
                                    <span>12.00 KD</span>
                                </div>
                            </div>
                            <div className="pro-quantity">
                                <div className="quantity">
                                    <button type="button" className="quantity-minus" onClick={decrement1}>-</button>
                                    <input type="number" className="input-text qty" value={quantity1} readOnly />
                                    <button type="button" className="quantity-plus" onClick={increment1}>+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</div>
  )
}

export default CartIn
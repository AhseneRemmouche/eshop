import React from "react";
import "./CheckoutProduct.css";

function CheckoutProduct() {
	return (
		<div className="checkoutProduct">
			<img
				src="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
				alt=""
				className="checkoutProduct_image"
			/>
			<div className="checkoutProduct_info">
				<p className="checkoutProduct_title">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
					iure dolorum natus vel itaque nostrum fuga cupiditate velit doloremque
					tempore.
				</p>
				<p className="checkoutProduct_price">
					<small>$</small>
					<strong>20</strong>
				</p>
				<div className="checkoutProduct_rating">⭐⭐⭐⭐</div>
				<button>Remove from Basket</button>
			</div>
		</div>
	);
}

export default CheckoutProduct;

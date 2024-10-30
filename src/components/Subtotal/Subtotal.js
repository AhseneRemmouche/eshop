import React from "react";
import "./Subtotal.css";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../../reducer";

function Subtotal() {
	const [state, dispatch] = useStateValue();
	return (
		<div className="subtotal">
			<p>Subtotal: {state.basket.length}</p>
			<p>Total: {getBasketTotal(state.basket)}</p>
			<button>Proceed to Checkout</button>
		</div>
	);
}

export default Subtotal;

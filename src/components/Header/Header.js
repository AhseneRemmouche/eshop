import "./Header.css";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";

function Header() {
	const [state, dispatch] = useStateValue();
	return (
		<div className="header">
			<Link to="/" className="link">
				<div className="header_logo">
					<StorefrontIcon className="header_logoImage" />
					<h2 className="header_logoTitle">eShop</h2>
				</div>
			</Link>

			<div className="header_search">
				<input
					type="text"
					className="header_searchInput"
					fontSize="large"
					placeholder="Search here..."
				/>
				<SearchIcon className="header_searchIcon" />
			</div>

			<div className="header_nav">
				<Link to="/login">
					<div className="nav_item">
						<span className="nav_itemLineOne">Salam Guest</span>
						<span className="nav_itemLineTwo">Sign In</span>
					</div>
				</Link>
				<div className="nav_item">
					<span className="nav_itemLineOne">Your</span>
					<span className="nav_itemLineTwo">Shop</span>
				</div>
				<Link to="/checkout" className="link">
					<div className="nav_itemBasket">
						<ShoppingBasketIcon />
						<span className="nav_itemLineTwo nav_basketCount">
							{state.basket.length}
						</span>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Header;

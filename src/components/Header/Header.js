import "./Header.css";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

function Header() {
	return (
		<div className="header">
			<div className="header_logo">
				<StorefrontIcon className="header_logoImage" fontSize="large" />
				<h2 className="header_logoTitle">eShop</h2>
			</div>

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
				<div className="nav_item">
					<span className="nav_itemLineOne">Salam Guest</span>
					<span className="nav_itemLineTwo">Sign In</span>
				</div>

				<div className="nav_item">
					<span className="nav_itemLineOne">Your</span>
					<span className="nav_itemLineTwo">Shop</span>
				</div>

				<div className="nav_item">
					<ShoppingBasketIcon className="nav_itemBasket" />
					<span className="nav_itemLineTwo nav_basketCount">10</span>
				</div>
			</div>
		</div>
	);
}

export default Header;

import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import { Routes, Route } from "react-router-dom";
function App() {
	return (
		<div className="App">
			{/* <h1>Bismi Allah</h1> */}
			<Header />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/checkout" element={<Checkout />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</div>
	);
}

export default App;

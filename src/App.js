import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Profile from "./components/Profile/Profile";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { auth } from "./components/firebase/firebase";

function App() {
	const [user, setUser] = useState();
	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			setUser(user);
		});
	});
	return (
		<div className="App">
			{/* <h1>Bismi Allah</h1> */}
			<Header />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/checkout" element={<Checkout />} />
				<Route path="/login" element={user ? <Profile /> : <Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/profile" element={<Profile />} />
			</Routes>
			<ToastContainer />
		</div>
	);
}

export default App;

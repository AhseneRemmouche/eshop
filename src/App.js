import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Checkout from "./components/Checkout/Checkout"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
	return (
		<>
		// <Router>
			{/* <Routes>
				<Route path="/" element={<Home />} />
				<Route path="/checkout" element={<Checkout />}/>
			</Routes> */}
		<div className="App">
			{/* <h1>Bismi Allah</h1> */}
			<Header />
			<Home />
		</div>
		// </Router></>
	);
}

export default App;

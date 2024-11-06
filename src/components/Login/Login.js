import React, { useState } from "react";
import "./Login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function Login() {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	async function handleLogin(e) {
		e.preventDefault();
		try {
			await signInWithEmailAndPassword(auth, email, password);
			console.log("User Logged In Successfully!!");
			toast.success("User Registered Successfully!!", {
				position: "top-center",
			});
			window.location.href = "/profile";
		} catch (error) {
			console.log(error.message);
			toast.error(error.message, {
				position: "bottom-center",
			});
		}
	}
	return (
		<div className="login">
			<form onSubmit={handleLogin}>
				<h3>Sign In</h3>
				<div className="mb-3">
					<label htmlFor="email">Your Email </label>
					<input
						id="email"
						type="email"
						className="form-control"
						placeholder="email"
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="password">Your Password </label>
					<input
						id="password"
						type="password"
						className="form-control"
						placeholder="password"
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>

				<div className="d-grid">
					<button type="submit" className="btn btn-primary">
						Sign In
					</button>
				</div>
				<p className="forgot-password text-right">
					Register <a href="/register">Register</a>{" "}
				</p>
			</form>
		</div>
	);
}

export default Login;

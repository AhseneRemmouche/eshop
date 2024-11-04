import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase/firebase";

function Register() {
	const [firstName, setFirstName] = useState();
	const [lastName, setLastName] = useState();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	async function handleRegister(e) {
		e.preventDefault();
		try {
			await createUserWithEmailAndPassword(auth, email, password);
			const user = auth.currentUser;
			console.log(user);
			console.log("User Registered Successfully!!");
		} catch (error) {
			console.log(error.message);
		}
	}

	return (
		<form onSubmit={handleRegister}>
			<h3>Sign Up</h3>

			<div className="mb-3">
				<label htmlFor="fName">First Name </label>
				<input
					id="fName"
					type="text"
					className="form-control"
					placeholder="First Name"
					onChange={(e) => setFirstName(e.target.value)}
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="lName">Last Name </label>
				<input
					id="lName"
					type="text"
					className="form-control"
					placeholder="Last Name"
					onChange={(e) => setLastName(e.target.value)}
				/>
			</div>
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
					Sign Up
				</button>
			</div>
			<p className="forgot-password text-right">
				Already Registred <a href="/login">Login</a>{" "}
			</p>
		</form>
	);
}

export default Register;

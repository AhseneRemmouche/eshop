import React, { useState } from "react";
import "./Login.css";

function Login() {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	function handleLogin(e) {
		e.preventDefault();
	}
	return (
		<div className="login">
			<form onClick="handleLogin">
				<h3>Sign In</h3>
				<input type="text" />
				<div className="mb3">
					<button type="submit" className="btn btn-primary">
						Sign In
					</button>
				</div>
			</form>
		</div>
	);
}

export default Login;

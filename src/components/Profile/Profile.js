import React, { useState, useEffect } from "react";
import { auth, db } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";

function Profile() {
	const [userDetails, setUserDetails] = useState(null);
	const fetchUserData = async () => {
		auth.onAuthStateChanged(async (user) => {
			console.log(user);
			const docRef = doc(db, "Users", user.uid);
			const docSnap = await getDoc(docRef);
			if (docSnap.exists()) {
				setUserDetails(docSnap.data());
				console.log(docSnap.data());
			} else {
				console.log("User is not logged in");
			}
		});
	};

	useEffect(() => {
		fetchUserData();
	}, []);

	async function handleLogout() {
		try {
			await auth.signOut();
			window.location.href = "/login";
			console.log("User Logged Out Successfully!!");
		} catch (error) {
			console.log("Error Logged Out: ", error.message);
		}
	}

	return (
		<div>
			{userDetails ? (
				<>
					<h3>
						Welcome {userDetails.firstName} {userDetails.lastName} ⭐⭐⭐
					</h3>
					<div>
						<p>Email: {userDetails.email}</p>
						<p>First Name: {userDetails.firstName}</p>
						<p>Last Name: {userDetails.lastName}</p>
					</div>
					<button onClick={handleLogout} className="btn btn-primary">
						Logout
					</button>
				</>
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
}

export default Profile;

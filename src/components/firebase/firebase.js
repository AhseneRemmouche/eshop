import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDOXNJ2qO75JD83Xi7_xX2SlNySMxXa-EE",
	authDomain: "eshop-fe657.firebaseapp.com",
	projectId: "eshop-fe657",
	storageBucket: "eshop-fe657.firebasestorage.app",
	messagingSenderId: "78128024077",
	appId: "1:78128024077:web:ebe246683bed9b84c7e344",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { db, auth };
export default app;

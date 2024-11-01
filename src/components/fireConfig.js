import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyDOXNJ2qO75JD83Xi7_xX2SlNySMxXa-EE",
	authDomain: "eshop-fe657.firebaseapp.com",
	projectId: "eshop-fe657",
	storageBucket: "eshop-fe657.appspot.com",
	messagingSenderId: "78128024077",
	appId: "1:78128024077:web:ebe246683bed9b84c7e344",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAtLQ-cTMUVFYVal4jHj3JC5TL4Fc7yqUE",
  authDomain: "e-clo-shop-db.firebaseapp.com",
  projectId: "e-clo-shop-db",
  storageBucket: "e-clo-shop-db.appspot.com",
  messagingSenderId: "27242387011",
  appId: "1:27242387011:web:a31d08a9dcab5187daa6f6",
  measurementId: "G-PK0D9XZS7Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();
const auth = getAuth();
// signInWithRedirect(auth, provider);
const SignInWithGoogle = () => {
	signInWithPopup(auth, provider)
	.then((result) => {
		// This gives you a Google Access Token. You can use it to access the Google API.
		const credential = GoogleAuthProvider.credentialFromResult(result);
		// eslint-disable-next-line no-unused-vars
		const token = credential.accessToken;
		// The signed-in user info.
		// eslint-disable-next-line no-unused-vars
		const user = result.user;
		// ...
	}).catch((error) => {
		// Handle Errors here.
		// eslint-disable-next-line no-unused-vars
		const errorCode = error.code;
		// eslint-disable-next-line no-unused-vars
		const errorMessage = error.message;
		// The email of the user's account used.
		// eslint-disable-next-line no-unused-vars
		const email = error.email;
		// The AuthCredential type that was used.
		// eslint-disable-next-line no-unused-vars
		const credential = GoogleAuthProvider.credentialFromError(error);
		// ...
	});

}

export default SignInWithGoogle

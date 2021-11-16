import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import Header from './components/header/header';
import { auth, createUserProfile, db } from './firebase/firebase';
import HomePage from './pages/homepage/hompage';
import ShopPage from './pages/shoppage/shoppage';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import { doc, onSnapshot } from "firebase/firestore";



const App = () => {

	const [currentUser, setCurrentUser] = useState(null)


	useEffect(() => {
		const unsubscribeFromAuth = auth.onAuthStateChanged(async user => {

			if (user) {
				onSnapshot(doc(db, "users", user.uid), async (doc) => {
					
					setCurrentUser({
						...doc.data(),
						id: user.uid
					})
				});
				createUserProfile(user)
			} else {
				setCurrentUser(null)
			}
		})

		return () => unsubscribeFromAuth()

	}, [])

		console.log(currentUser)

	return (
		<>
		<Header currentUser={currentUser}/>
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/shop" element={<ShopPage />} />
			<Route path="/signin" element={<SignInAndSignUpPage />} />
		</Routes>
		</>
	)
	
}

export default App;
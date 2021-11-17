import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import Header from './components/header/header';
import { auth, createUserProfile, db } from './firebase/firebase';
import HomePage from './pages/homepage/hompage';
import ShopPage from './pages/shoppage/shoppage';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import { doc, onSnapshot } from "firebase/firestore";
import userActionCreator from './actions/userActionCreator';
import { useDispatch } from 'react-redux';
import CheckOutPage from './pages/checkoutpage/checkout';
import ShopCategoryRouting from './pages/shoppage/shop-category-routing/shop-category-routing';



const App = () => {

	const dispatch = useDispatch()

	useEffect(() => {
		const unsubscribeFromAuth = auth.onAuthStateChanged(async user => {

			if (user) {
				onSnapshot(doc(db, "users", user.uid), async (doc) => {
					
					dispatch(userActionCreator({
						...doc.data(),
						id: user.uid
					}))
				});
				createUserProfile(user)
			} else {
				dispatch(userActionCreator(null))
			}
		})

		return () => unsubscribeFromAuth()

	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<>
		<Header/>
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/shop" element={<ShopPage />} />
			<Route path="/shop/:category" element={<ShopCategoryRouting />} />
			<Route path="/signin" element={<SignInAndSignUpPage />} />
			<Route path="/checkout" element={<CheckOutPage />} />
		</Routes>
		</>
	)
	
}

export default App;
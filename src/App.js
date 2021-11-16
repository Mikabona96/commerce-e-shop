import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import Header from './components/header/header';
import { auth, createUserProfile, db } from './firebase/firebase';
import HomePage from './pages/homepage/hompage';
import ShopPage from './pages/shoppage/shoppage';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import { doc, onSnapshot } from "firebase/firestore";


class App extends React.Component {

	constructor() {
		super()
		this.state = {
			currentUser: null
		}
	}

	unsubscribeFromAuth = null

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {

			if (user) {
				onSnapshot(doc(db, "users", user.uid), async (doc) => {
					
					this.setState({currentUser: {
						...doc.data(),
						id: user.uid
					}})
				});
				createUserProfile(user)
			} else {
				this.setState({currentUser: null}) 
			}
		})
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth()
	}

	render() {

		console.log(this.state.currentUser)

	return (
		<>
		<Header currentUser={this.state.currentUser}/>
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/shop" element={<ShopPage />} />
			<Route path="/signin" element={<SignInAndSignUpPage />} />
		</Routes>
		</>
	)
	}
	
}

export default App;
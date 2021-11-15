import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import Header from './components/header/header';
import { auth, db } from './firebase/firebase.utils';
import HomePage from './pages/homepage/hompage';
import ShopPage from './pages/shoppage/shoppage';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';

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
			console.log(user)
			this.setState({currentUser: user})
		})
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth()
	}

	render() {

		console.log(db)

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
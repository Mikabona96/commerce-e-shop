import { Route, Routes } from 'react-router';
import './App.css';
import Header from './components/header/header';
import HomePage from './pages/homepage/hompage';
import ShopPage from './pages/shoppage/shoppage';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';

function App() {


	return (
		<>
		<Header />
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/shop" element={<ShopPage />} />
			<Route path="/signin" element={<SignInAndSignUpPage />} />
		</Routes>
		</>
	)
	
}

export default App;
import { Route, Routes } from 'react-router';
import './App.css';
import Header from './components/header/header';
import HomePage from './pages/homepage/hompage';
import ShopPage from './pages/shoppage/shoppage';


function App() {


	return (
		<>
		<Header />
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/shop" element={<ShopPage />} />
		</Routes>
		</>
	)
	
}

export default App;
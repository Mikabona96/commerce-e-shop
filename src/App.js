import { Route, Routes } from 'react-router';
import './App.css';
import HomePage from './pages/homepage/hompage';


function App() {

	const HatsPage = () => {
		return (
			<div>
				<h1>Hats Page</h1>
			</div>
		)
	}
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/hats" element={<HatsPage />} />
		</Routes>
	)
	
}

export default App;
import HatsPage from '../hats-page/hats-page'
import SneakersPage from '../sneakers-page/sneaker-page'
import { useLocation } from 'react-router';
import JacketsPage from '../jackets-page/jackets-page';
import WomensPage from '../womens-page/womens-page';
import MensPage from '../mens-page/mens-page';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCollectionsData } from '../../../firebase/firebase';


const ShopCategoryRouting = () => {



	const dispatch = useDispatch()

	useEffect(() => {
		getCollectionsData().then(data => {
			dispatch({ type: 'UPDATE_COLLECTIONS', payload: data })
		})

	}, [dispatch])

	const location = useLocation()

	switch (location.pathname) {
		case '/shop/hats':
			return <HatsPage />
		case '/shop/sneakers':
			return <SneakersPage />
		case '/shop/jackets':
			return <JacketsPage />
		case '/shop/womens':
			return <WomensPage />
		case '/shop/mens':
			return <MensPage />
		default:
			return
	}

}

export default ShopCategoryRouting
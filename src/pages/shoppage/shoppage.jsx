import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CollectionOverview from '../../components/collection-overview/collection-overview';
import { getCollectionsData } from '../../firebase/firebase';

const ShopPage = () => {

	const dispatch = useDispatch()

	useEffect(() => {
		getCollectionsData().then(collections => {
			const sortedCollections = collections.sort((a, b) => {
				if (a.id > b.id) {
					return 1;
				}
				if (a.id < b.id) {
					return -1;
				}
				return 0;
			})
			dispatch({ type: 'UPDATE_COLLECTIONS', payload: sortedCollections })
		})
		console.log('updated')
	}, [dispatch])

	return (
		<div className="shop-page">
			<CollectionOverview />
		</div>
	)
}

export default ShopPage
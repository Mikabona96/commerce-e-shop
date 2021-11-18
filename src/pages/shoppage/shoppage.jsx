import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CollectionOverview from '../../components/collection-overview/collection-overview';
import { getCollectionsData } from '../../firebase/firebase';
import Spinner from '../../components/spinner/spinner';
import { useState } from 'react';

const CollectionOverviewWithSpinner = Spinner(CollectionOverview)

const ShopPage = () => {

	// eslint-disable-next-line no-unused-vars
	const [isLoading, setIsLoading] = useState(true)

	const dispatch = useDispatch()

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false)
		}, 100)
	}, [dispatch])

	return (
		<div className="shop-page">
			<CollectionOverviewWithSpinner isLoading={isLoading} />
		</div>
	)
}

export default ShopPage
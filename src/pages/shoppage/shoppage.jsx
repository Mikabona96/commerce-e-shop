import { useEffect } from 'react';
import CollectionOverview from '../../components/collection-overview/collection-overview';
import Spinner from '../../components/spinner/spinner';
import { useState } from 'react';
import ShopCategoryRouting from './shop-category-routing/shop-category-routing';

// const CollectionOverviewWithSpinner = Spinner(CollectionOverview)

const ShopPage = () => {

	// eslint-disable-next-line no-unused-vars
	const [isLoading, setIsLoading] = useState(true)


	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false)
		}, 100)
	}, [isLoading])

	return (
		<div className="shop-page">
			{/* <CollectionOverviewWithSpinner isLoading={isLoading} /> */}
			<ShopCategoryRouting />
		</div>
	)
}

export default ShopPage
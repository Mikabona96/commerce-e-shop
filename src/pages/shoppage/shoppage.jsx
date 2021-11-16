import React, { useState } from 'react';
import SHOP_DATA from './shop.data'
import CollectionPreview from '../../components/collection-preview/collection-preview';

const ShopPage = () => {

	// eslint-disable-next-line no-unused-vars
	const [state, setState] = useState({
		collections: SHOP_DATA
	})

	const { collections } = state
	return (
		<div className="shop-page">
			{
				collections.map(({ id, ...props }) => (
					<CollectionPreview key={id} {...props} />
				))
			}
		</div>
	)
}

export default ShopPage
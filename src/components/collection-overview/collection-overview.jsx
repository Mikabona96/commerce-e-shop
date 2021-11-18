import { useSelector } from 'react-redux'
import CollectionPreview from '../collection-preview/collection-preview'
import './collection-overview.scss'
import { getCollectionsData } from '../../firebase/firebase';
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { useEffect } from 'react';

const CollectionOverview = () => {
	const collections = useSelector(state => state.shop.collections)

	const [isLoading, setIsLoading] = useState(true)

	const dispatch = useDispatch()

	useEffect(() => {
		getCollectionsData().then(data => {
			dispatch({ type: 'UPDATE_COLLECTIONS', payload: data })
		})
		setTimeout(() => {
			setIsLoading(false)
		}, 1000)
	}, [dispatch, isLoading])

	console.log('overview')

	return (
		<div className="collections-overview">
			{
				collections.map(({ id, ...props }) => (
					<CollectionPreview key={id} {...props} />
				))
			}
		</div>
	)
}

export default CollectionOverview













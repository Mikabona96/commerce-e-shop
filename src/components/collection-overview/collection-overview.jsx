import { useSelector } from 'react-redux'
import CollectionPreview from '../collection-preview/collection-preview'
import './collection-overview.scss'

const CollectionOverview = () => {
	const collections = useSelector(state => state.shop.collections)

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













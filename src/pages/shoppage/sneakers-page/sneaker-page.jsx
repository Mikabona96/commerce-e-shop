import CollectionPreview from '../../../components/collection-preview/collection-preview'
import { useSelector } from 'react-redux'


const SneakersPage = () => {
	const sneakers = useSelector(state => state.shop.collections[1])
	return (
		<CollectionPreview {...sneakers} />
	)
}


export default SneakersPage

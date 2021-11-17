import CollectionShow from '../../../components/show-full-colection/collection-show'
import { useSelector } from 'react-redux'


const SneakersPage = () => {
	const sneakers = useSelector(state => state.shop.collections[1])
	return (
		<CollectionShow item={sneakers} />
	)
}


export default SneakersPage

import CollectionShow from '../../../components/show-full-colection/collection-show'
import { useSelector } from 'react-redux'


const JacketsPage = () => {

	const jackets = useSelector(state => state.shop.collections[2])
	return (
		<CollectionShow item={jackets} />
	)
}


export default JacketsPage

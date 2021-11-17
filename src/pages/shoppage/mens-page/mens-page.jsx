import CollectionShow from '../../../components/show-full-colection/collection-show'
import { useSelector } from 'react-redux'


const MensPage = () => {

	const mens = useSelector(state => state.shop.collections[4])
	return (
		<CollectionShow item={mens} />
	)
}


export default MensPage
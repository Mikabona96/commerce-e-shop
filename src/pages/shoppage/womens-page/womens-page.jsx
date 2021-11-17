import CollectionShow from '../../../components/show-full-colection/collection-show'
import { useSelector } from 'react-redux'


const WomensPage = () => {

	const womens = useSelector(state => state.shop.collections[3])
	return (
		<CollectionShow item={womens} />
	)
}


export default WomensPage
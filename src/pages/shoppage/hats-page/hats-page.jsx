import './hats-page.scss'
import CollectionShow from '../../../components/show-full-colection/collection-show'
import { useSelector } from 'react-redux'


const HatsPage = () => {

	const hats = useSelector(state => state.shop.collections[0])
	return (
		<CollectionShow item={hats} />
	)
}


export default HatsPage










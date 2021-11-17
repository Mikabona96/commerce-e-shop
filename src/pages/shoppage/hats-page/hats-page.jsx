import './hats-page.scss'
import { useSelector } from 'react-redux'
import CollectionPreview from '../../../components/collection-preview/collection-preview'



const HatsPage = () => {

	const hats = useSelector(state => state.shop.collections[0])
	return (
		<CollectionPreview {...hats} />
	)
}


export default HatsPage










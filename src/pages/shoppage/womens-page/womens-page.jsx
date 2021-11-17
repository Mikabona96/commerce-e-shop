import CollectionPreview from '../../../components/collection-preview/collection-preview'
import { useSelector } from 'react-redux'


const WomensPage = () => {

	const womens = useSelector(state => state.shop.collections[3])
	return (
		<CollectionPreview {...womens} />
	)
}


export default WomensPage
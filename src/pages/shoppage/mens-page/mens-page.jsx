import CollectionPreview from '../../../components/collection-preview/collection-preview'
import { useSelector } from 'react-redux'


const MensPage = () => {

	const mens = useSelector(state => state.shop.collections[4])
	return (
		<CollectionPreview {...mens} />
	)
}


export default MensPage
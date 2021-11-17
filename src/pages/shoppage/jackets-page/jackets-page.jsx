import CollectionPreview from '../../../components/collection-preview/collection-preview'
import { useSelector } from 'react-redux'


const JacketsPage = () => {

	const jackets = useSelector(state => state.shop.collections[2])
	return (
		<CollectionPreview {...jackets} />
	)
}


export default JacketsPage

import { useLocation, useNavigate } from 'react-router'
import CollectionItem from './collection-item/collection-item'
import './collection-preview.scss'



const CollectionPreview = ({ title, items, routeName }) => {
	const location = useLocation()
	const navigate = useNavigate()

	const onClickHandler = () => {
		if (location.pathname === '/shop') {
			navigate(`/shop/${routeName}`)
		}
	}
	return (
		<div className="collection-preview">
			<span onClick={onClickHandler} className="title-collection">{title.toUpperCase()}</span>
			<div className="preview">
				{
					location.pathname === '/shop'
						? items
							.filter((item, idx) => idx < 4)
							.map(item => (
								<CollectionItem key={item.id} item={item} />
							))
						: items
							.map(item => (
								<CollectionItem key={item.id} item={item} />
							))
				}
			</div>
		</div>
	)
}


export default CollectionPreview
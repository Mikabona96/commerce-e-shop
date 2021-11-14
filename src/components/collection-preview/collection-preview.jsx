import CollectionItem from './collection-item/collection-item'
import './collection-preview.scss'


const CollectionPreview = ({ title, items }) => {
	return (
		<div>
			<h1 className="title">{title.toUpperCase()}</h1>
			<div className="preview">
				{
					items
						.filter((item, idx) => idx < 4)
						.map(({ id, ...props }) => (
							<CollectionItem key={id} {...props} />
						))
				}
			</div>
		</div>
	)
}


export default CollectionPreview
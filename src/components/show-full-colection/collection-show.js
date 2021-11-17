import ShowItem from './show-item'
import './collection-show.scss'


const CollectionShow = ({item}) => {
	const { title, items } = item
	return (
		<div>
			<h1 className="title">{title.toUpperCase()}</h1>
			<div className="preview">
				{
					items
						.map(item => (
							<ShowItem key={item.id} item={item} />
						))
				}
			</div>
		</div>
	)
}


export default CollectionShow
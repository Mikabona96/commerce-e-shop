import './show-item.scss'
import CustomButton from '../custom-button/custom-button'
import { addItem } from '../../actions/cartActionCreator'
import { useDispatch } from 'react-redux'

const ShowItem = ({ item }) => {
	const { name, price, imageUrl } = item
	const dispatch = useDispatch()

	return (
		<div className="collection-item">
			<img className="collection-img" src={imageUrl} alt="" />
			<div className="collection-footer">
				<span className="name">{name}</span>
				<span className="price">{price}$</span>
			</div>
			<CustomButton inverted onClick={() => dispatch(addItem(item))}>Add to cart</CustomButton>
		</div>
	)
}


export default ShowItem
import { useDispatch } from 'react-redux'
import { clearCartFromItem, addItem, removeItem } from '../../actions/cartActionCreator'
import './checkout-item.scss'


const CheckoutItem = ({ cartItem }) => {

	const { name, imageUrl, price, quantity } = cartItem

	const dispatch = useDispatch()
	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt="" />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">
				<div onClick={() => dispatch(removeItem(cartItem))} className="arrow">&#10094;</div>
				<span className="value">{quantity}</span>
				<div onClick={() => dispatch(addItem(cartItem))} className="arrow">&#10095;</div>
			</span>
			<span className="price">{price}</span>
			<div onClick={() => dispatch(clearCartFromItem(cartItem))} className="remove-button">&#10005;</div>
		</div>
	)
}

export default CheckoutItem
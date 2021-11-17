import { useSelector } from 'react-redux'
import './checkout.scss'
import CheckoutItem from '../../components/checkout-item/checkout-item'

const CheckOutPage = () => {
	const cartItems = useSelector(state => state.cart.cartItems)
	const total = cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity * cartItem.price, 0)
	return (
		<div className="checkout-page">
			<div className="checkout-header">
				<div className="header-block">
					<span>Product</span>
				</div>
				<div className="header-block">
					<span>Description</span>
				</div>
				<div className="header-block">
					<span>Quantity</span>
				</div>
				<div className="header-block">
					<span>Price</span>
				</div>
				<div className="header-block">
					<span>Remove</span>
				</div>
			</div>
			{
				cartItems.map(cartItem =>
					<CheckoutItem key={cartItem.id} cartItem={cartItem} />
				)
			}
			{!cartItems.length ? <div style={{ marginTop: '4rem', fontSize: '1.5rem', fontWeight: '500' }}>Cart is empty...</div> : null}
			<div className="total">
				<span>TOTAL: ${total}</span>
			</div>
		</div>
	)
}


export default CheckOutPage
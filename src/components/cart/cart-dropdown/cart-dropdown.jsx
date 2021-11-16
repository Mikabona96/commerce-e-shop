import CustomButton from '../../custom-button/custom-button'
import './cart-dropdown.scss'
import CartItem from '../cart-item/cart-item'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import toggleCartHidden from '../../../actions/cartActionCreator'
import { useDispatch } from 'react-redux'



const CartDropdown = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const cartItems = useSelector(state => state.cart.cartItems)
	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				{cartItems.length
					? cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
					: <span className="empty-message">Your cart is empty</span>
				}
			</div>
			<CustomButton onClick={() => {
				navigate('/checkout')
				dispatch(toggleCartHidden())
			}}>GO TO CHECKOUT</CustomButton>
		</div>
	)
}




export default CartDropdown






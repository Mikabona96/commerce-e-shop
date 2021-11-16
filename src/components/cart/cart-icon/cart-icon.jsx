import './cart-icon.scss'
import { ReactComponent as ShoppingCartIcon } from '../../../assets/shopping-bag.svg'
import toggleCartHidden from '../../../actions/cartActionCreator'
import { useDispatch, useSelector } from 'react-redux'



const CartIcon = () => {

	const cartItems = useSelector(state => state.cart.cartItems)

	const itemsCount = cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)

	const dispatch = useDispatch()

	const onClickHandler = () => {
		dispatch(toggleCartHidden())
	}

	return (
		<div onClick={onClickHandler} className="cart-icon">
			<ShoppingCartIcon className="shopping-icon" />
			{itemsCount > 0
				? <div className="cart-itemCount-wrapper">
					<span className="item-count">{itemsCount}</span>
				</div>
				: null}
		</div>
	)
}

export default CartIcon


















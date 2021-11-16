import './cart-icon.scss'
import { ReactComponent as ShoppingCartIcon } from '../../../assets/shopping-bag.svg'
import toggleCartHidden from '../../../actions/cartActionCreator'
import { useDispatch } from 'react-redux'



const CartIcon = () => {


	const dispatch = useDispatch()

	const onClickHandler = () => {
		dispatch(toggleCartHidden())
	}

	return (
		<div onClick={onClickHandler} className="cart-icon">
			<ShoppingCartIcon className="shopping-icon" />
			<span className="item-count">0</span>
		</div>
	)
}

export default CartIcon


















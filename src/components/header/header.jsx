import React from 'react'
import './header.scss'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { SignOutFromGoogle } from '../../firebase/firebase'
import { useSelector } from 'react-redux'
import CartIcon from '../cart/cart-icon/cart-icon'
import CartDropdown from '../cart/cart-dropdown/cart-dropdown'


const Header = () => {
	const currentUser = useSelector(state => state.user.currentUser)
	const hidden = useSelector(state => state.cart.hidden)

	return (
		<div className="header">
			<Link to="/" className="logo-container">
				<Logo className="logo" />
			</Link>
			<div className="options">
				<Link className="option" to="shop">SHOP</Link>
				<Link className="option" to="contact">CONTACT</Link>
				{
					currentUser
						? <div onClick={SignOutFromGoogle} className="option">SIGN OUT</div>
						: <Link className="option" to="/signin">SIGN IN</Link>
				}
				<CartIcon />
			</div>
			{
				hidden ? null : <CartDropdown />
			}
		</div>
	)
}

export default Header
import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { SignOutFromGoogle } from '../../firebase/firebase'
import { useSelector } from 'react-redux'
import CartIcon from '../cart/cart-icon/cart-icon'
import CartDropdown from '../cart/cart-dropdown/cart-dropdown'
import styled from 'styled-components'

const Header = () => {
	const currentUser = useSelector(state => state.user.currentUser)
	const hidden = useSelector(state => state.cart.hidden)

	return (
		<Heder>
			<Link to="/" className="logo-container">
				<Logo className="logo" />
			</Link>
			<Options>
				<Option className="option" to="shop">SHOP</Option>
				<Option className="option" to="contact">CONTACT</Option>
				{
					currentUser
						? <Option as="div" onClick={SignOutFromGoogle} className="option">SIGN OUT</Option>
						: <Option className="option" to="/signin">SIGN IN</Option>
				}
				<CartIcon />
			</Options>
			{
				hidden ? null : <CartDropdown />
			}
		</Heder>
	)
}

export default Header

const Heder = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`

const Options = styled.div`
	display: flex;
`

const Option = styled(Link)`
	text-decoration: none;
	color: black;
	margin-left: 1.5rem;
	cursor: pointer;
	line-height: 50px;
`
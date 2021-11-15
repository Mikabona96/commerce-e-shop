import React from 'react'
import './header.scss'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { SignOutFromGoogle } from '../../firebase/firebase'


const Header = ({ currentUser }) => {
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
			</div>
		</div>
	)
}

export default Header
import React from 'react';
import CustomButton from '../custom-button/custom-button';
import FormInput from '../form-input/form-input';

import { createUserProfile } from '../../firebase/firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";
import './sign-up.scss'
import { auth } from '../../firebase/firebase';

export default class SignUp extends React.Component {
	constructor() {
		super()
		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: ''
		}
	}

	handleSubmit = async (e) => {
		e.preventDefault()

		const { displayName, email, password, confirmPassword } = this.state

		if (password !== confirmPassword) {
			alert("passwords don't match")
			return
		}

		try {
			const userU = await createUserWithEmailAndPassword(auth, email, password)
			auth.onAuthStateChanged(async user => {
				if (user) {
					createUserProfile(userU.user, { displayName })
				}
			})
		} catch (error) {
			console.log(error.message)
		}

		this.setState({
			displayName: '',
			email: '',
			password: '',
			confirmPassword: ''
		})

	}

	handleChange = (e) => {
		const { name, value } = e.target
		this.setState({
			[name]: value
		})
	}



	render() {
		// console.log(this.state)
		const { displayName, email, password, confirmPassword } = this.state
		return (
			<div className="sign-up">
				<h2 className="title">I do not have an account</h2>
				<span>Sign up with your email & password</span>
				<form className="sign-up-form" onSubmit={this.handleSubmit}>
					<FormInput
						type="text"
						name="displayName"
						value={displayName}
						onChange={this.handleChange}
						label="Display Name"
						placeholder="Display Name"
						required
					/>

					<FormInput
						type="email"
						name="email"
						value={email}
						onChange={this.handleChange}
						label="Email"
						placeholder="Email"
						required
					/>

					<FormInput
						type="password"
						name="password"
						value={password}
						onChange={this.handleChange}
						label="Password"
						placeholder="Password"
						required
					/>
					<FormInput
						type="password"
						name="confirmPassword"
						value={confirmPassword}
						onChange={this.handleChange}
						label="Confirm Password"
						placeholder="Confirm Password"
						required
					/>

					<CustomButton type="submit">SIGN UP</CustomButton>

				</form>
			</div>
		)
	}
}
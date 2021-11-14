import React from 'react';
import CustomButton from '../custom-button/custom-button';
import FormInput from '../form-input/form-input';
import './sign-in.scss'
import SignInWithGoogle from '../../firebase/firebase.utils'


export default class SignIn extends React.Component {
	constructor() {
		super()
		this.state = {
			email: '',
			password: ''
		}
	}

	handleSubmit = (e) => {
		e.preventDefault()

		this.setState({ email: '', password: '' })
	}

	handleChange = (e) => {
		const { value, name } = e.target

		this.setState({ [name]: value })
	}


	render() {
		return (
			<div className="sign-in">
				<h2 className="title">I already have an account</h2>
				<span>Sign in with your email and password</span>


				<form onSubmit={this.handleSubmit}>
					<FormInput handleChange={this.handleChange} placeholder="E-mail" name="email" type="email" value={this.state.email} label="email" required />
					<FormInput handleChange={this.handleChange} placeholder="Password" name="password" type="password" value={this.state.password} label="password" required />

					<CustomButton type="submit" value="Submit Form">Sign in</CustomButton>
					<CustomButton onClick={SignInWithGoogle} value="Submit Form">Sign in with Google</CustomButton>
				</form>
			</div>
		)
	}
}

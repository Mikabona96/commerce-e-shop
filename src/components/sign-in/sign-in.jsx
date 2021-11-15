import React from 'react';
import { SignInWithGoogle } from '../../firebase/firebase';
import CustomButton from '../custom-button/custom-button';
import FormInput from '../form-input/form-input';
import './sign-in.scss'



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
					<div className="buttons">
						<CustomButton type="submit" value="Submit Form">Sign in</CustomButton>
						<CustomButton onClick={SignInWithGoogle} isGoogleSignIn value="Submit Form">Sign in with Google</CustomButton>
					</div>

				</form>
			</div>
		)
	}
}

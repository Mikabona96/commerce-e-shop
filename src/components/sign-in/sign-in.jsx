import React, { useState } from 'react';
import { SignInWithGoogle, auth } from '../../firebase/firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import CustomButton from '../custom-button/custom-button';
import FormInput from '../form-input/form-input';
import './sign-in.scss'



const SignIn = () => {

	const [state, setState] = useState({
		email: '',
		password: ''
	})

	const handleSubmit = async (e) => {
		e.preventDefault()

		const { email, password } = state

		try {
			await signInWithEmailAndPassword(auth, email, password)
				.then((userCredential) => {
					// Signed in 
					const user = userCredential.user;
					console.log(user)
					// ...
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					console.log(errorMessage, errorCode)
				});
			setState({ email: '', password: '' })
		} catch (error) {
			console.log(error)
		}
	}

	const handleChange = (e) => {
		const { value, name } = e.target

		setState({
			...state,
			[name]: value
		})
	}

	return (
		<div className="sign-in">
			<h2 className="title">I already have an account</h2>
			<span>Sign in with your email and password</span>


			<form onSubmit={handleSubmit}>
				<FormInput handleChange={handleChange} placeholder="E-mail" name="email" type="email" value={state.email} label="email" required />
				<FormInput handleChange={handleChange} placeholder="Password" name="password" type="password" value={state.password} label="password" required />
				<div className="buttons">
					<CustomButton type="submit" value="Submit Form">Sign in</CustomButton>
					<CustomButton onClick={SignInWithGoogle} isGoogleSignIn value="Submit Form">Sign in with Google</CustomButton>
				</div>

			</form>
		</div>
	)
}

export default SignIn

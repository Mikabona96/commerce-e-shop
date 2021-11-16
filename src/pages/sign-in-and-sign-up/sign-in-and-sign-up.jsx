import './sign-in-and-sign-up.scss'
import SignIn from '../../components/sign-in/sign-in'
import SignUp from '../../components/sign-up/sign-up'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'


const SignInAndSignUpPage = () => {
	const navigate = useNavigate()
	const currentUser = useSelector(state => state.user.currentUser)

	if (currentUser) {
		setTimeout(() => navigate('/'), 100)
	}
	return (
		<div className="sign-in-and-sign-up">
			<SignIn />
			<SignUp />
		</div>
	)
}



export default SignInAndSignUpPage
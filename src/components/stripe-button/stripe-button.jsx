import StripeCheckout from 'react-stripe-checkout'
import './stripe-button.scss'
import CartIcon from '../../assets/logo.svg'

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100
	const publishableKey = 'pk_test_51Jwo8IFiXyi7cAvAt8y6peCFUeeXYzpmrdh9Pnp8XQsYsoQYk9Z0aUvIPjUKcH1yu3OyrExVwb8YA6P7V2T8GdrN000YEJfdsJ'
	const onToken = token => {
		console.log(token)
		alert('Payment successful')
	}
	return (
		<StripeCheckout
			label="Pay Now"
			name="Mika Shop"
			billingAddress
			shippingAddress
			image={CartIcon}
			description={`Your total value is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	)
}

export default StripeCheckoutButton
import styled, { css } from 'styled-components'

const CustomButton = ({ children, ...props }) => {
	return (
		<CustomBtn  {...props}>
			{children}
		</CustomBtn>
	)
}


export default CustomButton

const buttonStyles = css`
	background-color: black;
	color: white;
	border: none;
	&:hover {
		background-color: white;
		color: black;
		border: 1px solid black;
		transition: .5s ease;
	}
`

const getButtonStyles = props => {
	if (props.isGoogleSignIn) {
		return googleSignIn
	}

	return props.inverted ? invertedButtonStyles : buttonStyles
}

const invertedButtonStyles = css`
	background-color: white;
    color: black;
    border: 1px solid black;
	  transition: .5s ease;
    &:hover {
      background-color: black;
      color: white;
      border: none;
    }
`

const googleSignIn = css`
	background-color: #4285f4;
	border: 1px solid black;
	&:hover {
		background-color: #357ae8;
		border: none;
		color: white;
	}
`

export const CustomBtn = styled.button`
	min-width: 165px;
	width: auto;
	height: 50px;
	letter-spacing: 0.5px;
	line-height: 50px;
	padding: 0 35px 0 35px;
	font-size: 15px;
	text-transform: uppercase;
	font-family: 'Open Sans Condensed';
	font-weight: bolder;
	cursor: pointer;
	// margin: 0.2rem;
	transition: .5s ease;
	display: flex;
	justify-content: center;
	${getButtonStyles}
`
import CustomButton from '../../custom-button/custom-button'
import { addItem } from '../../../actions/cartActionCreator'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'


const CollectionItem = ({ item }) => {
	const { name, price, imageUrl } = item
	const dispatch = useDispatch()

	return (
		<CollItem className="collection-item">
			<Img className="collection-img" src={imageUrl} alt="" />
			<Footer className="collection-footer">
				<span className="name">{name}</span>
				<span className="price">{price}$</span>
			</Footer>
			<CustomBtn className="custom-button" inverted onClick={() => dispatch(addItem(item))}>Add to cart</CustomBtn>
		</CollItem>
	)
}


const CustomBtn = styled(CustomButton)`
	display: none;
	width: 80%;
	opacity: 0.7;
	position: absolute;
	bottom: 3rem;
	left: 50%;
	transform: translateX(-50%);
	cursor: pointer;
`

const CollItem = styled.div`
	width: 15rem;
	overflow: hidden;
	position: relative;
	transition: .5s;
	margin: 0.3rem 0.3rem;
	&:hover {
		opacity: 0.8;
		${CustomBtn} {
			display: flex;
			opacity: 0.85;
		}
	}
`

const Img = styled.img`
	max-height: 355px;
`
const Footer = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0 0.5rem;
`

export default CollectionItem
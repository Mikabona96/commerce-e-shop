import './menu-item.scss'
import { useNavigate } from 'react-router'

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
	const navigate = useNavigate()
	const onClickHandler = () => {
		navigate(linkUrl)
	}

	return (
		<div className={`${size} menu-item`} onClick={onClickHandler}>
			<img src={imageUrl} alt="" className="background-image" />
			<div className="content">
				<h1 className="title">{title.toUpperCase()}</h1>
				<span className="subtitle">Shop Now</span>
			</div>
		</div>
	)
}

export default MenuItem
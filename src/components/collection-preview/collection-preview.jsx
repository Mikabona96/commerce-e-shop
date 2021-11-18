import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router'
import CollectionItem from './collection-item/collection-item'
import './collection-preview.scss'
import { useState } from 'react'
import { Spin } from '../spinner/spinner'



const CollectionPreview = ({ title, items, routeName }) => {

	const [isLoading, setIsLoading] = useState(true)

	const collections = useSelector(state => state.shop.collections)
	const location = useLocation()
	const navigate = useNavigate()


	const onClickHandler = () => {
		if (location.pathname === '/shop') {
			navigate(`/shop/${routeName}`)
		}
	}
	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false)
		}, 1000)
	}, [isLoading])

	return (<>{
		!isLoading && collections.length > 0
			? <div className="collection-preview">
				<span onClick={onClickHandler} className="title-collection">{title.toUpperCase()}</span>
				<div className="preview">
					{
						location.pathname === '/shop'
							? items
								.filter((item, idx) => idx < 4)
								.map(item => (
									<CollectionItem key={item.id} item={item} />
								))
							: items
								.map(item => (
									<CollectionItem key={item.id} item={item} />
								))
					}
				</div>
			</div>
			: <Spin />
	}</>)
}


export default CollectionPreview
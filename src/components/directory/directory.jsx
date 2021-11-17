import { useSelector } from 'react-redux'
import MenuItem from '../menu-item/menu-item'
import './directory.scss'


const Directory = () => {

	const directory = useSelector(state => state.directory)

	return (
		<div className="directory-menu">
			{directory.sections.map(({ id, ...props }) => (
				<MenuItem key={id} {...props} />
			))}
		</div>
	)
}

export default Directory
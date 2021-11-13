import './homepage.styles.scss'
import Directory from '../../components/directory/directory'
// import { useLocation, useParams } from 'react-router-dom'

const HomePage = () => {
	// const params = useParams()
	// const loc = useLocation()
	// console.log(loc)
	// console.log(params)

	return (
		<div className="homepage">
			<Directory />
		</div>
	)
}

export default HomePage;
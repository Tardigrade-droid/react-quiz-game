import {Link} from 'react-router-dom'
import Dashboard from './Dashboard'

const Menu = ({btnState, setBtnState})=>{
	return <nav className={btnState}>
		<ul onClick={()=>setBtnState('')}>
			<li>
				<i className="fas fa-home"></i>
				<Link to='/'>Home</Link>
			</li>
			<li>
				<i className="fas fa-question"></i>
				<Link to='/quiz'>Quiz</Link>
			</li>
			<li>
				<i className="fas fa-star"></i>
				<a href="#">Best score</a>
			</li>
			<li>
				<i className="fas fa-share-alt"></i>
				<a href="#">Invite your friends</a>
			</li>
			<li>
				<i className="fas fa-address-book"></i>
				<a href="#">Contact us</a>
			</li>
			<li><Dashboard /></li>
		</ul>
		</nav>
}
export default Menu

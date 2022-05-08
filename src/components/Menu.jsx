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
				<Link to='best-score'>Best score</Link>
			</li>
			<li>
				<i className="fas fa-share-alt"></i>
				<Link to='invite'>Invite your friends</Link>
			</li>
			<li>
				<i className="fas fa-address-book"></i>
				<Link to='contact'>Contact us</Link>
			</li>
			<li><Dashboard /></li>
		</ul>
		</nav>
}
export default Menu

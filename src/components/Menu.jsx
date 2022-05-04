import {Link} from 'react-router-dom'
import Dashboard from './Dashboard'

const Menu = ({btnState, setBtnState})=>{
	return <nav className={btnState}>
		<ul onClick={()=>setBtnState('')}>
			<li><Link to='/'>Home</Link></li>
			<li><Link to='/quiz'>Quiz</Link></li>
			<li><a href="#">Best score</a></li>
			<li><a href="#">Invite your friends</a></li>
			<li><a href="#">Contact us</a></li>
			<li><Dashboard /></li>
		</ul>
		</nav>
}
export default Menu

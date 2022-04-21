import {Link} from 'react-router-dom'

const Menu = ({active})=>{
	return <nav className={active}>
		<ul>
		<li><Link to='/'>Home</Link></li>
		<li><a href="#">Best score</a></li>
		<li><a href="#">Invite your friends</a></li>
		<li><a href="#">Contact us</a></li>
		</ul>
		</nav>
}
export default Menu

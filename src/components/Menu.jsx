
const Menu = ({active})=>{
	return <nav className={active}>
		<ul>
		<li><a href="#">Home</a></li>
		<li><a href="#">Best score</a></li>
		<li><a href="#">Invite your friends</a></li>
		<li><a href="#">Contact us</a></li>
		</ul>
		</nav>
}
export default Menu

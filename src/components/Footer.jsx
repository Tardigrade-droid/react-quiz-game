import Menu from './Menu'

const Footer = ()=>{
	return <footer>
		<section>
		<div>
			<Menu/>
		</div>
		<div>
		<form>
			<textarea>Send a message</textarea>
		</form>
			<span>+243 814 811 989</span>
		</div>
		</section>
		<p className="copyright">Designed by Tardigrade-droid &copy; {new Date().getFullYear()}</p>
		</footer>
}
export default Footer

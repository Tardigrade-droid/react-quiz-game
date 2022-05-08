
const Footer = ()=>{
	return <footer>
		<section>
		<div className="social-icons">
			<i className="fab fa-facebook"></i>
			<i className="fab fa-instagram"></i>
			<i className="fab fa-twitter"></i>
			<i className="fab fa-linkedin"></i>
			<i className="fab fa-github"></i>
			<i className="fas fa-envelope"></i>
			<div><i></i>+243 814 811 989</div>
		</div>
		<div>
		<form>
			<textarea>Send a message</textarea>
		</form>
		</div>
		</section>
		<p className="copyright">Designed by Tardigrade-droid &copy; {new Date().getFullYear()}</p>
		</footer>
}
export default Footer

import {Link} from 'react-router-dom'
import Button from "./Button"

const Hero = ()=>{
	return <section className="hero">
		<h3>Welcome to the game that help your knowledge grow and split up your brain</h3>
		<div className="hero-btn">
		<img src="../assets/gamepad.svg" alt="" />
		<Button type="fill" color="white" text={<Link to='/quiz'>Start</Link>} />
		</div>
		</section>

}
export default Hero

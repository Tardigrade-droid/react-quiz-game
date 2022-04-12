import {useState} from 'react'

const Header = ()=>{
	const [btnState, setBtnState] = useState('active')
	return <header>
		<h1>quiz-app</h1>
		<div className={`btn ${btnState}`} onclick={setBtnState("")}><span></span></div>
		
		</header>
}

export default Header

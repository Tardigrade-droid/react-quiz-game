import {useState} from 'react'
import Menu from './Menu'

const Header = ()=>{
	const [btnState, setBtnState] = useState('')
	function afficheMenu(event){
		if(event.currentTarget.classList.contains('active')){
			setBtnState('')
		}else{
			setBtnState('active')
		}
	}
	return <header>
		<h1>quiz-app</h1>
		<div className={`menu-btn ${btnState}`} onClick={afficheMenu}><span></span></div>

		<Menu btnState={btnState} setBtnState={setBtnState} />
		</header>
}

export default Header

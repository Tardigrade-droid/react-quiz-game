import {useState} from 'react'

const SignIn = ()=>{
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	function handleSubmit(event){
		event.preventDefault()
		if(!email || !password) return alert('Enter credentials')
		alert(email + password)
	}
	return <main className="sign-box">
		<form className="sign">
		<div>
		<label for="email">email</label>
		<input type='email' id='email' value={email} onChange={({target})=>setEmail(target.value)}/>
		</div>
		<div>
		<label for="password">password</label>
		<input type='password' id='password' value={password} onChange={({target})=>setPassword(target.value)}/>
		</div>
		<div><input type="submit" value="Submit" onClick={handleSubmit}/></div>
		</form>
		</main>
}
export default SignIn

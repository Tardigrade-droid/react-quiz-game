import {useState} from 'react'

const SignUp = ()=>{
	const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	function handleSubmit(event){
		event.preventDefault()
		if(!username || !email || !password) return alert('Enter credentials')
		alert(username + email + password)
	}
	return <main className="sign-box">
		<form className="sign">
		<div>
		<label for="username">username</label>
		<input type='text' id='username' value={username} onChange={({target})=>setUsername(target.value)}/>
		</div>

		<div>                                          <label for="email">email</label>
                <input type='email' id='email' value={email} onChange={({target})=>setEmail(target.value)}/>
                </div>

		<div>                                          <label for="password">password</label>
                <input type='password' id='password' value={password} onChange={({target})=>setPassword(target.value)}/>
                </div>

		<div><input type="submit" value="Submit" onClick={handleSubmit}/></div>

		</form>
		</main>
}
export default SignUp

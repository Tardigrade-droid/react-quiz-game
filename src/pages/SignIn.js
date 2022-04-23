import {useState} from 'react'
import {signInWithEmailAndPassword} from 'firebase/auth'
import {useNavigate, Link} from 'react-router-dom'
import {auth} from '../firebase/firebase'
import Modal from '../components/Modal'

const SignIn = ()=>{
	const navigate = useNavigate()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')
	const [isLoading, setIsLoading] = useState(false)

	async function handleSubmit(event){
		event.preventDefault()
		if(!email || !password) return setError('Enter credentials')
		try{
			setIsLoading(true)
			await signInWithEmailAndPassword(auth, email, password)
			setEmail('')
			setPassword('')
			navigate('/quiz')
			setIsLoading(false)
		}catch(err){
			setError(err.message)
			setIsLoading(false)
		}
	}
	return <main className="sign-box">
		<form className="sign">
		{error && <Modal message={error} setMessage={setError} type='danger' />}
		<div>
		<label for="email">email</label>
		<input type='email' id='email' value={email} onChange={({target})=>setEmail(target.value)}/>
		</div>
		<div>
		<label for="password">password</label>
		<input type='password' id='password' value={password} onChange={({target})=>setPassword(target.value)}/>
		</div>
		<div><input disabled={isLoading} type="submit" value="Submit" onClick={handleSubmit}/></div>
		<div>
			<p>dont yet have an account ? <Link to='/signup'>sign up</Link></p>
		</div>
		</form>
		</main>
}
export default SignIn

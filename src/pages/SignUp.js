import {useState} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import {auth} from '../firebase/firebase'
import Modal from '../components/Modal'

const SignUp = ()=>{
	const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const navigate = useNavigate()
	async function handleSubmit(event){
		event.preventDefault()
		if(!username || !email || !password) return setError('Enter credentials')
		try{
			setIsLoading(true)
			await createUserWithEmailAndPassword(auth, email, password)
			await updateProfile(auth.currentUser, {displayName: username})
			setUsername('')
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
		<label for="username">username</label>
		<input type='text' id='username' value={username} onChange={({target})=>setUsername(target.value)}/>
		</div>

		<div>                                          <label for="email">email</label>
                <input type='email' id='email' value={email} onChange={({target})=>setEmail(target.value)}/>
                </div>

		<div>                                          <label for="password">password</label>
                <input type='password' id='password' value={password} onChange={({target})=>setPassword(target.value)}/>
                </div>

		<div><input disabled={isLoading} type="submit" value="Submit" onClick={handleSubmit}/></div>
		<div>
		<p>already have an account ? <Link to='/login'>login</Link></p>
		</div>

		</form>
		</main>
}
export default SignUp

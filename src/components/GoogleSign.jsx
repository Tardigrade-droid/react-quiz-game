import {signInWithPopup} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
import {auth, googleProvider} from '../firebase/firebase'

const GoogleSign = ()=>{
	const navigate = useNavigate()
	async function handleClick(){
		try{
			await signInWithPopup(auth, googleProvider)
			navigate('/quiz')
		}catch(err){
			alert(err.message)
		}
	}
	return <div className='google-btn'>
			<button type="button" onClick={handleClick}><i className="fab fa-google"></i> Sign In with Google</button>
		</div>
}
export default GoogleSign

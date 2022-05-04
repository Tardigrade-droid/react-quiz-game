import {signOut} from 'firebase/auth'
import {Link} from 'react-router-dom'
import {auth} from '../firebase/firebase'
import useAuth from '../hooks/useAuth'

const Dashboard = ()=>{
	async function handleClick(){
		await signOut(auth)
	}
	const user = useAuth()
	return <div className='user'>
		{user ? (<div><span>{user.displayName}</span><button onClick={handleClick}>sign out</button></div>) : (<div><button><Link to='/login'>login</Link></button></div>)}
		</div>
}
export default Dashboard

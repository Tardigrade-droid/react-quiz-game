import {useState, useEffect} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {onAuthStateChanged} from 'firebase/auth'
import {auth} from './firebase/firebase'
import {userContext} from './contexts/userContext'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Quiz from './pages/Quiz'
import QuizEditor from './pages/QuizEditor'
import './App.css';

const App = ()=> {
	const [user, setUser] = useState(null)
	useEffect(()=>onAuthStateChanged(auth, user => {
		setUser(user)
	}), [])

  return <BrowserRouter>
	<userContext.Provider value={user, setUser}>
	<Header/>
	<Routes>
		<Route path='/' element={<Home/>} />
		<Route path='signup' element={<SignUp/>} />
		<Route path='login' element={<SignIn/>} />
		<Route path='quiz' element={<Quiz/>} />
		<Route path='admin/quizeditor' element={<QuizEditor/>} />
	</Routes>
	<Footer/>
	</userContext.Provider>
	</BrowserRouter>
}

export default App;


import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Quiz from './pages/Quiz'
import './App.css';

const App = ()=> {
  return <BrowserRouter>
	<Header/>
	<Routes>
		<Route path='/' element={<Home/>} />
		<Route path='signup' element={<SignUp/>} />
		<Route path='login' element={<SignIn/>} />
		<Route path='quiz' element={<Quiz/>} />
	</Routes>
	<Footer/>
	</BrowserRouter>
}

export default App;

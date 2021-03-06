import {initializeApp} from 'firebase/app'
import {getFirestore, collection} from 'firebase/firestore'
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
	  apiKey: "AIzaSyAadf2dOLXQcVS4_AX9-mNaglufage8QyA",
	  authDomain: "react-quiz-game-e86cb.firebaseapp.com",
	  projectId: "react-quiz-game-e86cb",
	  storageBucket: "react-quiz-game-e86cb.appspot.com",
	  messagingSenderId: "526214537004",
	  appId: "1:526214537004:web:2ddc248d2efdc5de35d689"
};

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const questRef = collection(db, 'questions')
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()



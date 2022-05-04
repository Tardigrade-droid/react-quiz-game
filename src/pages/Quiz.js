import {useState, useEffect} from 'react'
import {onSnapshot} from 'firebase/firestore'
import Card from '../components/Card'
import Loading from '../components/Loading'
import {questRef} from '../firebase/firebase'

const Quiz = ()=>{
	const [questions, setQuestions] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	useEffect(()=>{
		const unsub = onSnapshot(questRef, (snapshot)=>{
		let quests = []
		snapshot.docs.forEach(doc => quests.push({...doc.data(), id:doc.id}))
		setQuestions(quests)
		setIsLoading(false)
		})
		return unsub

	}, [])

	return <main>
		{isLoading ? <Loading/> : questions?.map((question)=>(
			<Card question={question.question} answers={question.answers} key={question.id} correct_ans={question.correct_ans} />
		))}
		</main>
}
export default Quiz
